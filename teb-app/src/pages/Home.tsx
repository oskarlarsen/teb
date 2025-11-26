import Header from '../components/Header'
import Letter3DSwap from '../components/fancy/text/letter-3d-swap'
import TextRotate from '../components/fancy/text/text-rotate'
import VariableFontHoverByRandomLetter from '../components/fancy/text/variable-font-hover-by-random-letter'
import MediaBetweenText from '../components/fancy/blocks/media-between-text'
import DarkVeil from '../components/reactbits/DarkVeil'

const Home = () => {
  return (
    <div className="flex flex-col min-h-screen relative">
      {/* Custom Background */}
      <div className="fixed inset-0 z-0">
        <DarkVeil />
      </div>

      <Header />
      <main className="flex-1 flex items-center justify-center p-8 relative z-10">
        <div className="text-center max-w-4xl mx-auto space-y-12">
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
      </main>
    </div>
  )
}

export default Home