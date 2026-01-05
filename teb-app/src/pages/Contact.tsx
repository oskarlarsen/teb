import { useEffect } from 'react'
import Header from '../components/Header'
import DarkVeil from '../components/reactbits/DarkVeil'
import VariableFontHoverByRandomLetter from '../components/fancy/text/variable-font-hover-by-random-letter'
import SpotlightCard from '../components/reactbits/SpotlightCard'
import Calendar from '../components/Calendar'

const Contact = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}, []);
  return (
    <div className="flex flex-col min-h-screen relative">
      {/* Custom Background */}
      <div className="fixed inset-0 z-0">
        <DarkVeil />
      </div>

      <Header />
      <main className="flex-1 flex flex-col items-center justify-center p-8 relative z-10 space-y-16">
        {/*<div className="text-center space-y-6">
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
        </div> */}

        {/* Hero Section */}
        <div className="text-center max-w-4xl mx-auto space-y-12 mb-4">
          <VariableFontHoverByRandomLetter
            label="KONTAKT"
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
        </div>

        {/* Doctor Appointment Booking Section */}
        <div className="w-full max-w-4xl mt-8">
          <h2 className="text-3xl md:text-5xl font-bold text-center text-white mb-12">
            Book din legetime
          </h2>
          
          <SpotlightCard 
            className="hover:border-teb-orange transition-colors duration-300"
            spotlightColor="rgba(255, 140, 66, 0.25)"
          >
            <div className="space-y-6">
              {/* Doctor Info with Image */}
              <div className="flex flex-col md:flex-row gap-6 items-start">
                <img 
                  src="images/contact/dreivind.jpg" 
                  alt="Doctor"
                  className="w-full md:w-48 h-48 object-cover rounded-lg border-2 border-teb-orange/30"
                />
                <div className="flex-1 space-y-3">
                  <div className="flex items-center justify-between">
                    <h3 className="text-2xl font-bold text-teb-orange">Dr. Eivind </h3>
                    <span className="text-sm text-gray-400">(Tann)Lege</span>
                  </div>
                  <p className="text-gray-300">Spesialist i problemer med mage og tarmutleggelse</p>
                  <div className="space-y-2 text-sm text-gray-400">
                    <p>📅 Tilgjengelig: Man-Søn</p>
                    <p>🕐 Tidspunkt: 09:00 - 17:00</p>
                    <p>📍 Lokasjon: Jeg kommer til deg</p>
                  </div>
                </div>
              </div>

              {/* Calendar */}
              <Calendar />
            </div>
          </SpotlightCard>
        </div>

        {/* Cybersecurity Phone Section */}
        <div className="w-full max-w-4xl">
          <h2 className="text-3xl md:text-5xl font-bold text-center text-white mb-12">
            Cybersikkerhetstelefonen
          </h2>
          
          <SpotlightCard 
            className="hover:border-teb-green transition-colors duration-300"
            spotlightColor="rgba(140, 255, 66, 0.25)"
          >
            <div className="space-y-6">
              {/* Cybersecurity Info with Image */}
              <div className="flex flex-col md:flex-row gap-6 items-start">
                <img 
                  src="images/contact/hacker.png" 
                  alt="Cybersecurity"
                  className="w-full md:w-48 h-48 object-cover rounded-lg border-2 border-teb-green/30"
                />
                <div className="flex-1 space-y-3">
                  <div className="flex items-center gap-3">
                    <h3 className="text-2xl font-bold text-teb-green">24/7 Cybersikkerhet</h3>
                  </div>
                  <p className="text-gray-300">Trenger du hjelp med cybersikkerhet? Ring vår dedikerte hotline for øyeblikkelig assistanse.</p>
                  <div className="space-y-2 text-sm text-gray-400">
                    <p>📞 Tilgjengelig: 24/7</p>
                    <p>🛡️ Tjenester: Sikkerhetsrådgivning, Incident Response</p>
                    <p>⚡ Responstid: Umiddelbar</p>
                  </div>
                </div>
              </div>

              {/* Call to Action */}
              <div className="space-y-4 pt-4 border-t border-white/10">
                <div className="text-center space-y-2">
                  <p className="text-teb-green font-semibold text-lg">🔒 Beskyttelse hele døgnet</p>
                  <p className="text-gray-400 text-sm">Ring oss nå for profesjonell cybersikkerhetshjelp</p>
                </div>
                <a 
                  href="tel:+6767676967"
                  className="w-full bg-gradient-to-r from-teb-green to-green-600 hover:from-green-600 hover:to-teb-green text-white font-bold py-4 px-6 rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-teb-green/50 flex items-center justify-center gap-2 group"
                >
                  <svg className="w-6 h-6 group-hover:animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  Ring +67 67 67 69 67
                </a>
              </div>
            </div>
          </SpotlightCard>
        </div>

        {/* DJ Booking Section */}
        <div className="w-full max-w-4xl">
          <h2 className="text-3xl md:text-5xl font-bold text-center text-white mb-12">
            Book en DJ
          </h2>
          
          <SpotlightCard 
            className="hover:border-teb-orange transition-colors duration-300"
            spotlightColor="rgba(255, 140, 66, 0.25)"
          >
            <div className="space-y-6">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-teb-orange mb-2">Våre DJs</h3>
                <p className="text-gray-300">Book en av våre profesjonelle DJs til ditt arrangement:</p>
              </div>

              {/* DJs Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Oskar */}
                <div className="bg-white/5 rounded-lg p-4 hover:bg-white/10 transition-colors">
                  <div className="flex items-center gap-4">
                    <img 
                      src="images/contact/DJGjøran.png" 
                      alt="DJ Gjøran"
                      className="w-20 h-20 rounded-full object-cover border-2 border-teb-orange"
                    />
                    <div className="flex-1">
                      <h4 className="text-xl font-bold text-white">DJ Gjøran</h4>
                      <p className="text-sm text-gray-400">Techno & Algdat</p>
                      <div className="flex gap-2 mt-2">
                        <span className="text-xs bg-teb-orange/20 text-teb-orange px-2 py-1 rounded">Erfaren</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Anders */}
                <div className="bg-white/5 rounded-lg p-4 hover:bg-white/10 transition-colors">
                  <div className="flex items-center gap-4">
                    <img 
                      src="images/contact/DJJohann.png" 
                      alt="DJ Johann"
                      className="w-20 h-20 rounded-full object-cover border-2 border-teb-green"
                    />
                    <div className="flex-1">
                      <h4 className="text-xl font-bold text-white">DJ Johann</h4>
                      <p className="text-sm text-gray-400">House & mer House</p>
                      <div className="flex gap-2 mt-2">
                        <span className="text-xs bg-teb-green/20 text-teb-green px-2 py-1 rounded">Energisk</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Claus */}
                <div className="bg-white/5 rounded-lg p-4 hover:bg-white/10 transition-colors">
                  <div className="flex items-center gap-4">
                    <img 
                      src="images/contact/DJRemi.png" 
                      alt="DJ Remi"
                      className="w-20 h-20 rounded-full object-cover border-2 border-pink-500"
                    />
                    <div className="flex-1">
                      <h4 className="text-xl font-bold text-white">DJ Remi</h4>
                      <p className="text-sm text-gray-400">UKG & stutter House</p>
                      <div className="flex gap-2 mt-2">
                        <span className="text-xs bg-pink-500/20 text-pink-400 px-2 py-1 rounded">Smooth</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Eivind */}
                <div className="bg-white/5 rounded-lg p-4 hover:bg-white/10 transition-colors">
                  <div className="flex items-center gap-4">
                    <img 
                      src="images/contact/DJKris.png" 
                      alt="DJ Kris"
                      className="w-20 h-20 rounded-full object-cover border-2 border-cyan-500"
                    />
                    <div className="flex-1">
                      <h4 className="text-xl font-bold text-white">DJ Kris</h4>
                      <p className="text-sm text-gray-400">Pop-musikk og danseband</p>
                      <div className="flex gap-2 mt-2">
                        <span className="text-xs bg-cyan-500/20 text-cyan-400 px-2 py-1 rounded">Festlig</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Booking Info */}
              <div className="space-y-4 pt-4 border-t border-white/10">
                <div className="text-center space-y-2">
                  <p className="text-teb-orange font-semibold text-lg">🎵 Profesjonell DJ-service</p>
                  <p className="text-gray-400 text-sm">Kontakt oss for tilgjengelighet og priser</p>
                </div>
                <a 
                  href="mailto:post@tebonsma.no?subject=DJ Booking TEBONSMA"
                  className="w-full bg-gradient-to-r from-teb-orange to-orange-600 hover:from-orange-600 hover:to-teb-orange text-white font-bold py-4 px-6 rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-teb-orange/50 flex items-center justify-center gap-2 group"
                >
                  <svg className="w-6 h-6 group-hover:animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  Send forespørsel
                </a>
              </div>
            </div>
          </SpotlightCard>
        </div>
      </main>
    </div>
  )
}

export default Contact