import { useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'

const Calendar = () => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null)
  const [showTimeSlotModal, setShowTimeSlotModal] = useState(false)
  const [currentMonth, setCurrentMonth] = useState(new Date().getMonth())
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear())

  // Generate calendar days for current month
  const generateCalendarDays = () => {
    //const today = new Date()
    const year = currentYear
    const month = currentMonth
    const firstDay = new Date(year, month, 1)
    const lastDay = new Date(year, month + 1, 0)
    const daysInMonth = lastDay.getDate()
    const startingDayOfWeek = firstDay.getDay()

    const days = []
    
    // Add empty cells for days before month starts
    for (let i = 0; i < startingDayOfWeek; i++) {
      days.push(null)
    }
    
    // Add days of month
    for (let day = 1; day <= daysInMonth; day++) {
      days.push(new Date(year, month, day))
    }
    
    return days
  }

  const handleDateClick = (date: Date) => {
    const today = new Date()
    const isPast = date < today && date.toDateString() !== today.toDateString()
    
    if (!isPast) {
      setSelectedDate(date)
      setShowTimeSlotModal(true)
    }
  }

  const handlePreviousMonth = () => {
    if (currentMonth === 0) {
      setCurrentMonth(11)
      setCurrentYear(currentYear - 1)
    } else {
      setCurrentMonth(currentMonth - 1)
    }
  }

  const handleNextMonth = () => {
    if (currentMonth === 11) {
      setCurrentMonth(0)
      setCurrentYear(currentYear + 1)
    } else {
      setCurrentMonth(currentMonth + 1)
    }
  }

  const calendarDays = generateCalendarDays()
  const monthNames = ["Januar", "Februar", "Mars", "April", "Mai", "Juni", "Juli", "August", "September", "Oktober", "November", "Desember"]
  const dayNames = ["Søn", "Man", "Tir", "Ons", "Tor", "Fre", "Lør"]
  const today = new Date()

  // Generate time slots from 09:00 to 17:00
  const timeSlots = []
  for (let hour = 9; hour <= 17; hour++) {
    timeSlots.push(`${hour.toString().padStart(2, '0')}:00`)
    if (hour < 17) {
      timeSlots.push(`${hour.toString().padStart(2, '0')}:30`)
    }
  }

  return (
    <>
      <div className="space-y-4">
        {/* Month Navigation */}
        <div className="flex items-center justify-between">
          <button
            onClick={handlePreviousMonth}
            className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-white transition-colors border border-white/10"
            aria-label="Forrige måned"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          <h4 className="text-xl font-semibold text-white">
            {monthNames[currentMonth]} {currentYear}
          </h4>
          
          <button
            onClick={handleNextMonth}
            className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-white transition-colors border border-white/10"
            aria-label="Neste måned"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
        
        {/* Day Names */}
        <div className="grid grid-cols-7 gap-2 text-center">
          {dayNames.map((day) => (
            <div key={day} className="text-xs font-semibold text-gray-400 py-2">
              {day}
            </div>
          ))}
        </div>

        {/* Calendar Days */}
        <div className="grid grid-cols-7 gap-2">
          {calendarDays.map((date, index) => {
            if (!date) {
              return <div key={`empty-${index}`} className="aspect-square" />
            }
            
            const isToday = date.toDateString() === today.toDateString()
            const isPast = date < today && !isToday
            const isBooked = !isPast // All future dates are booked
            
            return (
              <button
                key={date.toISOString()}
                onClick={() => handleDateClick(date)}
                disabled={isPast}
                className={`
                  aspect-square rounded-lg flex items-center justify-center text-sm font-medium
                  relative group transition-all duration-200
                  ${
                    isPast
                      ? 'text-gray-600 bg-black/20 cursor-not-allowed'
                      : 'bg-red-900/30 text-red-300 border border-red-500/30 cursor-pointer hover:scale-105 hover:bg-red-900/50'
                  }
                `}
              >
                {date.getDate()}
                {isBooked && (
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/80 rounded-lg">
                    <span className="text-xs text-red-400 font-semibold">Opptatt</span>
                  </div>
                )}
              </button>
            )
          })}
        </div>
      </div>

      {/* Time Slot Modal */}
      <AnimatePresence>
        {showTimeSlotModal && selectedDate && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowTimeSlotModal(false)}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[60]"
            />

            {/* Modal */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-[70] w-[90%] max-w-md"
            >
              <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 rounded-xl border border-white/10 shadow-2xl overflow-hidden">
                {/* Modal Header */}
                <div className="bg-gradient-to-r from-teb-orange to-teb-green p-6 relative">
                  <button
                    onClick={() => setShowTimeSlotModal(false)}
                    className="absolute top-4 right-4 text-white hover:bg-white/20 rounded-full p-2 transition-colors"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                  <h3 className="text-2xl font-bold text-white">Velg tidspunkt</h3>
                  <p className="text-white/80 mt-1">
                    {selectedDate.toLocaleDateString('nb-NO', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' })}
                  </p>
                </div>

                {/* Time Slots */}
                <div className="p-6 max-h-[400px] overflow-y-auto">
                  <div className="grid grid-cols-2 gap-3">
                    {timeSlots.map((time) => (
                      <button
                        key={time}
                        disabled
                        className="bg-red-900/30 text-red-300 border border-red-500/30 rounded-lg py-3 px-4 text-sm font-medium cursor-not-allowed hover:bg-red-900/40 transition-colors relative group"
                      >
                        <span>{time}</span>
                        <span className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/80 rounded-lg">
                          <span className="text-xs text-red-400 font-semibold">Opptatt</span>
                        </span>
                      </button>
                    ))}
                  </div>

                  {/* Message */}
                  <div className="mt-6 p-4 bg-red-950/50 border border-red-500/20 rounded-lg">
                    <p className="text-red-400 text-sm text-center font-semibold">
                      ⚠️ Alle tidspunkter er fullbooket
                    </p>
                    <p className="text-gray-400 text-xs text-center mt-2">
                      Kontakt oss på eivind@tebonsma.no for å finne en ledig time
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Unavailable Message */}
      <div className="space-y-4 pt-4 border-t border-white/10">
        <div className="text-center space-y-2">
          <p className="text-red-400 font-semibold">⚠️ Alle datoer er for øyeblikket opptatt</p>
          <p className="text-gray-400 text-sm">Vennligst kontakt meg direkte på eivind@tebonsma.no for å finne en ledig time</p>
        </div>
        <button 
          disabled
          className="w-full bg-gray-700 text-gray-400 font-semibold py-3 px-6 rounded-lg opacity-50 cursor-not-allowed"
        >
          Ingen ledige timer tilgjengelig
        </button>
      </div>
    </>
  )
}

export default Calendar
