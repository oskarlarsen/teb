import Header from './components/Header'
import Footer from './components/Footer'
import Letter3DSwap from './components/fancy/text/letter-3d-swap'
import TextRotate from './components/fancy/text/text-rotate'
import './App.css'

function App() {

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 flex items-center justify-center p-8">
        <div className="text-center max-w-4xl mx-auto">
          <Letter3DSwap
            as="h1"
            mainClassName="text-6xl font-bold text-white mb-4"
            frontFaceClassName="text-teb-green"
            secondFaceClassName="text-teb-green"
            staggerDuration={0.08}
            staggerFrom="first"
            rotateDirection="bottom"
          >
            TEBONSMA
          </Letter3DSwap>
          
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
