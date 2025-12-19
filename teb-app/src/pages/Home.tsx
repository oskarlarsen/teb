import { useEffect } from 'react'
import Header from '../components/Header'
//import Letter3DSwap from '../components/fancy/text/letter-3d-swap'
//import TextRotate from '../components/fancy/text/text-rotate'
import VariableFontHoverByRandomLetter from '../components/fancy/text/variable-font-hover-by-random-letter'
import MediaBetweenText from '../components/fancy/blocks/media-between-text'
import DarkVeil from '../components/reactbits/DarkVeil'
import WallOfLove from '../components/WallOfLove'
import EventsSlideshow, { type Event } from '../components/EventsSlideshow'
import FAQ from '../components/FAQ'

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
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

  const faqItems = [
    {
      id: 1,
      question: 'Hvor ofte har dere arrangementer?',
      answer: "Vi har 3 arrangementer i året: Pulebord i desember, Nyttårsaften og Sommerfesten. Sommerfesten er et offentlig arrangment hvor venner er invitert. De to andre er kun for medlemmer."
    },
    {
      id: 2,
      question: 'Hvor mange medlemmer har dere?',
      answer: 'Per nå har vi 9 medlemmer i TEBONSMA. Vi holder medlemskapet eksklusivt for å sikre en tett og god atmosfære blant medlemmene.'
    },
    {
      id: 3,
      question: 'Hvor morsom er egentlig Anders "Johann" Mo Garberg?',
      answer: 'Anders er ganske tullete av seg og bidrar ofte til god stemning på våre arrangementer. Han er kjent for morsomme utsagn en gang i blant.'
    },
    {
      id: 4,
      question: 'Har dere merch?',
      answer: 'Vi har ikke offisiell merch for øyeblikket, men vi er en slags ambassadør for Jarritos, så vi serverer alltid Jarritos på våre arrangementer! Du vil derfor se oss i merch fra Jarritos av og til.'
    },
    {
      id: 5,
      question: 'Hvem er det som er minst morsom i TEBONSMA?',
      answer: 'Det er hard konkurranse her, men mange vil nok si at Fredrik Schmid Bjørge tar den tittelen. Han prøver virkelig sitt beste.'
    },
    {
      id: 6,
      question: 'Hvordan kan jeg nå ut til dere?',
      answer: 'Du kan kontakte oss via e-post på post@tebonsma.no eller finne oss på sosiale medier. Vi ser frem til å høre fra deg!'
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
        <div className="text-center max-w-4xl mx-auto space-y-12 mb-4">
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

          {/*<div className="flex flex-col items-center gap-6 pt-8">
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
          </div>*/}
        </div>

        {/* Events Slideshow */}
        <EventsSlideshow events={events} autoPlayInterval={12000} />

        {/* FAQ Section */}
        <FAQ items={faqItems} />

        {/* Wall of Love Section */}
        <WallOfLove />

        {/* Media Between Text */}
        <div className="max-w-4xl mx-auto mb-2">
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
        </div>
      </main>
    </div>
  )
}

export default Home