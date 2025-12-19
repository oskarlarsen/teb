import { useEffect } from 'react';
import Header from '../components/Header';
import ChromaGrid from '../components/reactbits/ChromaGrid';
import DarkVeil from '../components/reactbits/DarkVeil';
import VariableFontHoverByRandomLetter from '../components/fancy/text/variable-font-hover-by-random-letter';

const About =() => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}, []);
  return (
    <div className="flex flex-col min-h-screen relative">
      <Header />
      <div className="fixed inset-0 z-0">
        <DarkVeil />
      </div>
      <main className='flex-1 flex flex-col items-center justify-center p-8 relative z-10'>
        {/* About Section */}
        <div className="max-w-6xl w-full mb-16 mt-8">
          <div className="text-center space-y-6">
            <div className="text-center max-w-4xl mx-auto space-y-12 mb-4">
          <VariableFontHoverByRandomLetter
            label="HVEM ER VI?"
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
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mx-auto max-w-5xl">
              Vi bringer ærlighet og transparens til vennskap og sosiale arrangementer
            </h1>
            <p className="text-lg md:text-xl text-white/70 leading-relaxed max-w-3xl mx-auto">
              TEBONSMA ble grunnlagt i 2021 og har siden den gang vært en eksklusiv organisasjon dedikert til å skape uforglemmelige øyeblikk og sterke bånd mellom medlemmene våre.
            </p>
            
            <div className="pt-4 space-y-4 text-white/80">
              <p className="leading-relaxed">
                Vår historie startet med en gruppe venner som ønsket å formalisere vårt vennskap og skape tradisjon. Gjennom årene har vi bygget en unik kultur preget av humor, lojalitet og gode minner. Vi har etablert faste arrangementer som Pulebord, Nyttårsfeiring og den årlige Sommerfesten som samler medlemmer og venner.
              </p>
              <p className="leading-relaxed">
                TEBONSMA er mer enn bare en organisasjon - det er et fellesskap hvor hvert medlem bidrar med sin unike personlighet og sine talenter. Vi tar vare på hverandre, feirer livets store og små øyeblikk sammen, og skaper minner som varer livet ut.
              </p>
              <p className="leading-relaxed">
                Med ni dedikerte medlemmer har vi skapt et miljø hvor vennskap, humor og gode opplevelser står i sentrum. Våre arrangementer er nøye planlagt og gjennomført med stor oppmerksomhet på detaljer, fra den kulinariske opplevelsen til de sosiale aktivitetene. Vi er stolte ambassadører for Jarritos og setter alltid pris på gode drikkevarer og mat i godt selskap.
              </p>
              <p className="leading-relaxed">
                Organisasjonen holder medlemskapet eksklusivt for å sikre en tett og god atmosfære, men vi åpner dørene under Sommerfesten hvor venner og kjente er hjertelig velkommen til å bli med på feiringen. Dette er vår måte å dele gleden og kulturen vi har bygget opp med andre.
              </p>
            </div>
          </div>
        </div>

        {/* Members Section */}
        <div className="w-full">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
            Møt våre medlemmer
          </h2>
          <ChromaGrid />
        </div>
      </main>
    </div>
  );
};

export default About;