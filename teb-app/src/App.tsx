import Header from './components/Header'
import Footer from './components/Footer'
import Letter3DSwap from './components/fancy/text/letter-3d-swap'
import TextRotate from './components/fancy/text/text-rotate'
import VariableFontHoverByRandomLetter from './components/fancy/text/variable-font-hover-by-random-letter'
import MediaBetweenText from './components/fancy/blocks/media-between-text'
import myImage from './assets/images/Jarritos-PNG-Pic.png'
import './App.css'

function App() {

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 flex items-center justify-center p-8">
        <div className="text-center max-w-4xl mx-auto">
          <VariableFontHoverByRandomLetter
            label="TEBONSMA"
            className="text-6xl font-bold text-teb-green mb-4 block"
            fromFontVariationSettings="'wght' 400"
            toFontVariationSettings="'wght' 900"
            staggerDuration={0.05}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 20,
            }}
          />

          <MediaBetweenText
            firstText="that's a nice"
            secondText=" jarritos"
            mediaUrl={myImage}
            mediaType="image"
            alt="jarritos"
            triggerType="hover"
            className="text-4xl font-bold text-white my-8 justify-center items-center"
            animationVariants={{
              initial: { width: '1%', opacity: 0},
              animate: { width: '5%', opacity: 1 },
            }}
            leftTextClassName="text-white mr-2"
            rightTextClassName="text-teb-orange"
            mediaContainerClassName="mx-2 h-20 overflow-hidden rounded-lg"
            mediaLink="https://www.jarritos.com/"
            mediaLinkTarget="_blank"
          />
          
          <Letter3DSwap
            as="p"
            mainClassName="text-2xl text-white/80 mt-8"
            frontFaceClassName="text-teb-orange"
            secondFaceClassName="text-teb-orange"
            staggerDuration={0.03}
            staggerFrom="last"
            rotateDirection="top"
          >
            Nettstedet er under konstant utvikling
          </Letter3DSwap>

          <TextRotate
            as="p"
            mainClassName="text-2xl text-white/80 mt-4"
            elementLevelClassName="text-teb-orange"
            texts={['Kom tilbake snart!', 'Vi jobber med noe kult!', 'Takk for tålmodigheten!']}
            rotationInterval={3000}
            staggerDuration={0.02}
          />
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default App
