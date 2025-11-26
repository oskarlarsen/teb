import Header from '../components/Header'
import DarkVeil from '../components/reactbits/DarkVeil'
import VariableFontHoverByRandomLetter from '../components/fancy/text/variable-font-hover-by-random-letter'

const Contact = () => {
  return (
    <div className="flex flex-col min-h-screen relative">
      {/* Custom Background */}
      <div className="fixed inset-0 z-0">
        <DarkVeil />
      </div>

      <Header />
      <main className="flex-1 flex items-center justify-center p-8 relative z-10">
        <div className="text-center space-y-6">
          <VariableFontHoverByRandomLetter
            label="KONTAKT OSS PÅ:"
            className="text-4xl md:text-6xl font-black text-teb-orange tracking-wider mb-8"
            fromFontVariationSettings="'wght' 400"
            toFontVariationSettings="'wght' 900"
            staggerDuration={0.03}
            transition={{
              type: "spring",
              stiffness: 500,
              damping: 20,
            }}
          />
          
          <a
            href="mailto:post@tebonsa.no"
            className="group relative inline-block"
          >
            <div className="bg-gradient-to-r from-teb-green via-teb-orange to-teb-green bg-clip-text">
              <VariableFontHoverByRandomLetter
                label="post@tebonsa.no"
                className="text-3xl md:text-5xl font-bold text-transparent animate-pulse hover:animate-none transition-all duration-300 hover:scale-110"
                fromFontVariationSettings="'wght' 500"
                toFontVariationSettings="'wght' 900"
                staggerDuration={0.02}
                transition={{
                  type: "spring",
                  stiffness: 600,
                  damping: 15,
                }}
              />
            </div>
            <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-teb-green via-teb-orange to-teb-green transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
          </a>
        </div>
      </main>
    </div>
  )
}

export default Contact