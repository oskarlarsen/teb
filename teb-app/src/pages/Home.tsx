import Header from '../components/Header'
import Letter3DSwap from '../components/fancy/text/letter-3d-swap'
import TextRotate from '../components/fancy/text/text-rotate'
import VariableFontHoverByRandomLetter from '../components/fancy/text/variable-font-hover-by-random-letter'
import MediaBetweenText from '../components/fancy/blocks/media-between-text'
import DarkVeil from '../components/reactbits/DarkVeil'
import WallOfLove from '../components/WallOfLove'
import EventsSlideshow, { type Event } from '../components/EventsSlideshow'

const Home = () => {
  const events: Event[] = [
    {
      id: 1,
      title: 'Pulebord 2025',
      startDateTime: '2025-12-20T12:30:00',
      endDateTime: '2025-12-21T03:00:00',
      description: 'Årets Pulebord er det 4de av sitt slag, og vi gleder oss til en kveld fylt med god mat, drikke og sosialt samvær. Dette blir en forglemmelig aften.',
      image: 'images/events/Pulebord.JPG'
    },
    {
      id: 2,
      title: 'Guttas Nyttårsaften',
      startDateTime: '2025-12-31T18:00:00',
      endDateTime: '2026-01-01T03:00:00',
      description: 'Vi feirer så klart nyttårsaften sammen og ser fram til en kveld fylt med moro, latter og gode minner. Det blir god mat, drikke og selvfølgelig fyrverkeri ved midnatt.',
      image: 'images/events/Nyttaar.jpg'
    },
    {
      id: 3,
      title: 'Sommerfest',
      description: 'Årets sommerfest er jo såklart høydepunktet på året vårt. Vi samles for en dag fylt med sol, moro og gode vibber. Det blir grilling, musikk og masse aktiviteter.',
      image: 'images/events/Sommerfest.png'
    }
  ]

  return (
    <div className="flex flex-col min-h-screen relative">
      {/* Custom Background - Fixed and covers full viewport */}
      <div className="fixed inset-0 w-full h-full z-0 bg-navy">
        <DarkVeil />
      </div>

      <Header />
      <main className="flex-1 flex flex-col items-center justify-center p-8 relative z-10">
        {/* Hero Section */}
        <div className="text-center max-w-4xl mx-auto space-y-12 mb-32">
          <VariableFontHoverByRandomLetter
            label="TEBONSMA"
            className="text-6xl md:text-8xl font-bold text-teb-orange tracking-tight"
            fromFontVariationSettings="'wght' 500"
            toFontVariationSettings="'wght' 900"
            staggerDuration={0.04}
            transition={{
              type: "spring",
              stiffness: 400,
              damping: 25,
            }}
          />

          <MediaBetweenText
            firstText="That's a nice"
            secondText="jarritos"
            mediaUrl="/images/Jarritos-PNG-Pic.png"
            mediaType="image"
            alt="jarritos"
            triggerType="hover"
            className="text-3xl md:text-4xl font-semibold text-white/90 justify-center items-center"
            animationVariants={{
              initial: { width: '0', opacity: 0},
              animate: { width: '10%', opacity: 1 },
            }}
            leftTextClassName="text-white/90"
            rightTextClassName="text-teb-orange font-bold"
            mediaContainerClassName="mx-1.5 h-16 overflow-hidden rounded-xl"
            mediaLink="https://www.jarritos.com/"
            mediaLinkTarget="_blank"
          />
          <div className="flex flex-col items-center gap-6 pt-8">
          <Letter3DSwap
            as="p"
            mainClassName="text-xl md:text-2xl text-white/70 font-light font-sans"
            frontFaceClassName="text-teb-orange"
            secondFaceClassName="text-teb-orange"
            staggerDuration={0.02}
            staggerFrom="last"
            rotateDirection="bottom"
          >
            Nettstedet er under konstant utvikling
          </Letter3DSwap>

          <TextRotate
            as="p"
            mainClassName="text-lg md:text-xl text-white/60 font-light font-sans"
            elementLevelClassName="text-teb-orange font-medium"
            texts={['Kom tilbake snart!', 'Vi jobber med noe kult!', 'Takk for tålmodigheten!']}
            rotationInterval={3000}
            staggerDuration={0.015}
            initial={{y: "-100% ", opacity: 0}}
            exit={{y: "120% ", opacity: 0}}
          />
          </div>
        </div>

        {/* Events Slideshow */}
        <EventsSlideshow events={events} autoPlayInterval={12000} />

        {/* Wall of Love Section */}
        <WallOfLove />
      </main>
    </div>
  )
}

export default Home