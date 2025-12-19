import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'motion/react'

export interface Event {
  id: number
  title: string
  startDateTime?: string // ISO 8601 format: 'YYYY-MM-DDTHH:mm:ss' - optional for TBA events
  endDateTime?: string   // ISO 8601 format: 'YYYY-MM-DDTHH:mm:ss' - optional for TBA events
  description: string
  image?: string
}

const getEventStatus = (startDateTime?: string, endDateTime?: string): 'upcoming' | 'current' | 'past' => {
  // If no dates set, assume upcoming (TBA)
  if (!startDateTime || !endDateTime) return 'upcoming'
  
  const now = new Date()
  const start = new Date(startDateTime)
  const end = new Date(endDateTime)

  if (now < start) return 'upcoming'
  if (now >= start && now <= end) return 'current'
  return 'past'
}

const formatEventDate = (startDateTime?: string, endDateTime?: string): string => {
  if (!startDateTime || !endDateTime) return 'Dato kommer snart'
  
  const start = new Date(startDateTime)
  const end = new Date(endDateTime)
  
  const dateOptions: Intl.DateTimeFormatOptions = { day: 'numeric', month: 'long', year: 'numeric' }
  const timeOptions: Intl.DateTimeFormatOptions = { hour: '2-digit', minute: '2-digit' }
  
  const isSameDay = start.toDateString() === end.toDateString()
  
  if (isSameDay) {
    return `${start.toLocaleDateString('nb-NO', dateOptions)} kl. ${start.toLocaleTimeString('nb-NO', timeOptions)} - ${end.toLocaleTimeString('nb-NO', timeOptions)}`
  }
  
  return `${start.toLocaleDateString('nb-NO', dateOptions)} kl. ${start.toLocaleTimeString('nb-NO', timeOptions)} - ${end.toLocaleDateString('nb-NO', dateOptions)} kl. ${end.toLocaleTimeString('nb-NO', timeOptions)}`
}

const getCountdown = (startDateTime?: string): { days: number; hours: number; minutes: number; seconds: number } | null => {
  if (!startDateTime) return null
  
  const now = new Date()
  const start = new Date(startDateTime)
  const diff = start.getTime() - now.getTime()
  
  // Only show countdown if less than 30 days away and event hasn't started
  if (diff < 0 || diff > 30 * 24 * 60 * 60 * 1000) return null
  
  const days = Math.floor(diff / (1000 * 60 * 60 * 24))
  const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
  const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60))
  const seconds = Math.floor((diff % (1000 * 60)) / 1000)
  
  return { days, hours, minutes, seconds }
}

const formatCountdown = (countdown: { days: number; hours: number; minutes: number; seconds: number }): string => {
  const parts = []
  
  if (countdown.days > 0) {
    parts.push(`${countdown.days}d`)
  }
  if (countdown.hours > 0 || countdown.days > 0) {
    parts.push(`${countdown.hours}t`)
  }
  if (countdown.minutes > 0 || countdown.hours > 0 || countdown.days > 0) {
    parts.push(`${countdown.minutes}m`)
  }
  parts.push(`${countdown.seconds}s`)
  
  return parts.join(' ')
}

interface EventsSlideshowProps {
  events: Event[]
  autoPlayInterval?: number
}

const EventsSlideshow = ({ events, autoPlayInterval = 5000 }: EventsSlideshowProps) => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [direction, setDirection] = useState(0)
  const [countdown, setCountdown] = useState<{ days: number; hours: number; minutes: number; seconds: number } | null>(null)

  // Update countdown every second
  useEffect(() => {
    if (events.length === 0) return
    
    const updateCountdown = () => {
      const currentEvent = events[currentIndex]
      const newCountdown = getCountdown(currentEvent.startDateTime)
      setCountdown(newCountdown)
    }
    
    updateCountdown()
    const countdownTimer = setInterval(updateCountdown, 1000)
    
    return () => clearInterval(countdownTimer)
  }, [currentIndex, events])

  useEffect(() => {
    if (events.length <= 1) return

    const timer = setInterval(() => {
      setDirection(1)
      setCurrentIndex((prev) => (prev + 1) % events.length)
    }, autoPlayInterval)

    return () => clearInterval(timer)
  }, [events.length, autoPlayInterval])

  const goToNext = () => {
    setDirection(1)
    setCurrentIndex((prev) => (prev + 1) % events.length)
  }

  const goToPrevious = () => {
    setDirection(-1)
    setCurrentIndex((prev) => (prev - 1 + events.length) % events.length)
  }

  const goToSlide = (index: number) => {
    setDirection(index > currentIndex ? 1 : -1)
    setCurrentIndex(index)
  }

  if (events.length === 0) return null

  const currentEvent = events[currentIndex]
  const eventStatus = getEventStatus(currentEvent.startDateTime, currentEvent.endDateTime)
  const formattedDate = formatEventDate(currentEvent.startDateTime, currentEvent.endDateTime)

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    }),
    center: {
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 1000 : -1000,
      opacity: 0
    })
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'current':
        return 'bg-teb-green'
      case 'upcoming':
        return 'bg-teb-orange'
      case 'past':
        return 'bg-gray-500'
      default:
        return 'bg-gray-500'
    }
  }

  const getStatusText = (status: string) => {
    switch (status) {
      case 'current':
        return 'Pågående'
      case 'upcoming':
        return 'Kommende'
      case 'past':
        return 'Avsluttet'
      default:
        return ''
    }
  }

  return (
    <div className="w-full max-w-5xl mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Events</h2>
        <p className="text-lg text-gray-400">Få med deg våre morsomme arrangementer</p>
      </div>

      <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl overflow-hidden">
        {/* Slideshow Container */}
        <div className="relative h-[400px] md:h-[450px]">
          <AnimatePresence initial={false} custom={direction} mode="wait">
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 }
              }}
              className="absolute inset-0 flex flex-col md:flex-row items-center p-8 md:p-12"
            >
              {/* Event Image */}
              {currentEvent.image && (
                <div className="w-full md:w-1/2 h-48 md:h-full mb-6 md:mb-0 md:mr-8">
                  <img
                    src={currentEvent.image}
                    alt={currentEvent.title}
                    className="w-full h-full object-cover rounded-2xl border-2 border-teb-orange/30"
                  />
                </div>
              )}

              {/* Event Info */}
              <div className={`flex-1 space-y-4 ${currentEvent.image ? '' : 'text-center'}`}>
                <div className="flex flex-col gap-2 items-center md:items-start">
                  <div className="flex items-center gap-3">
                    <span className={`${getStatusColor(eventStatus)} text-white text-xs font-bold px-3 py-1 rounded-full`}>
                      {getStatusText(eventStatus)}
                    </span>
                    {!countdown && eventStatus !== 'current' && <span className="text-gray-400 text-sm">{formattedDate}</span>}
                  </div>
                  
                  {/* Countdown - only for upcoming events */}
                  {countdown && eventStatus === 'upcoming' && (
                    <div className="flex items-center gap-2 bg-teb-orange/20 border border-teb-orange/40 rounded-xl px-4 py-2">
                      <svg className="w-5 h-5 text-teb-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span className="text-teb-orange font-bold text-lg">
                        {formatCountdown(countdown)}
                      </span>
                    </div>
                  )}
                </div>

                <h3 className="text-3xl md:text-4xl font-bold text-white leading-tight">
                  {currentEvent.title}
                </h3>

                <p className="text-gray-300 text-lg leading-relaxed">
                  {currentEvent.description}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Navigation Arrows */}
        {events.length > 1 && (
          <>
            <button
              onClick={goToPrevious}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 rounded-full p-3 transition-all duration-200 hover:scale-110 z-10"
              aria-label="Forrige"
            >
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            <button
              onClick={goToNext}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 rounded-full p-3 transition-all duration-200 hover:scale-110 z-10"
              aria-label="Neste"
            >
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </>
        )}

        {/* Dots Navigation */}
        {events.length > 1 && (
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-10">
            {events.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? 'bg-teb-orange w-8'
                    : 'bg-white/30 hover:bg-white/50'
                }`}
                aria-label={`Gå til slide ${index + 1}`}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

export default EventsSlideshow
