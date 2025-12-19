import React, { useRef, useEffect, useState } from 'react';
import { gsap } from 'gsap';
import { motion, AnimatePresence } from 'framer-motion';

export interface ChromaItem {
  image: string;
  title: string;
  subtitle: string;
  handle?: string;
  location?: string;
  borderColor?: string;
  gradient?: string;
  url?: string;
  bio?: string;
  age?: number;
  email?: string;
  phone?: string;
  skills?: string[];
  achievements?: string[];
}

export interface ChromaGridProps {
  items?: ChromaItem[];
  className?: string;
  radius?: number;
  damping?: number;
  fadeOut?: number;
  ease?: string;
}

type SetterFn = (v: number | string) => void;

const ChromaGrid: React.FC<ChromaGridProps> = ({
  items,
  className = '',
  radius = 300,
  damping = 0.35,
  fadeOut = 1,
  ease = 'power3.out'
}) => {
  const rootRef = useRef<HTMLDivElement>(null);
  const fadeRef = useRef<HTMLDivElement>(null);
  const setX = useRef<SetterFn | null>(null);
  const setY = useRef<SetterFn | null>(null);
  const pos = useRef({ x: 0, y: 0 });
  const [selectedPerson, setSelectedPerson] = useState<ChromaItem | null>(null);

  const demo: ChromaItem[] = [
    {
      image: '/images/Gummert.jpg',
      title: 'Eirik "Peter" Engum',
      subtitle: 'Generalkommisær',
      handle: '@eirik.engum',
      borderColor: '#4F46E5',
      gradient: 'linear-gradient(145deg,#4F46E5,#000)',
      url: 'https://www.instagram.com/eirik.engum/',
      bio: 'TEBONSMAs egen Josef Mengele. Det er hos Eirik, på toppen av sjetnemarka, de beste festene i Trondheim arrangeres.',
      age: 22,
      email: 'eirik@tebonsma.no',
      skills: ['Diagnosering', 'Kickflip', 'Tarmutleggelse'],
      achievements: ['Grunnlegger av TEBONSMA', 'Vinner av årets leder 2024']
    },
    {
      image: '/images/Gøran.jpg',
      title: 'Oskar "Gjøran" Larsen',
      subtitle: 'Generalsuperintendant',
      handle: '@larsen_oskar',
      borderColor: '#10B981',
      gradient: 'linear-gradient(210deg,#10B981,#000)',
      url: 'https://www.instagram.com/larsen_oskar/',
      bio: 'Oskar er udugelig. Han er kjent for sin evne til å skape kaos og forvirring hvor enn han går.',
      age: 22,
      email: 'oskar@tebonsma.no',
      skills: ['Webutvikling', 'Design', 'Prosjektledelse'],
      achievements: ['Utvikler av TEBONSMA nettside', 'Flappy-Teb skaperen']
    },
    {
      image: '/images/Garbae.jpg',
      title: 'Anders "Johan" Garberg',
      subtitle: 'Buran Baddie',
      handle: '@andersmgar',
      borderColor: '#F59E0B',
      gradient: 'linear-gradient(165deg,#F59E0B,#000)',
      url: 'https://www.instagram.com/andersmgar/',
      bio: 'Anders er helt håpløs. Han påstår han bor på Rosendal, men alle vet han bor på buran.',
      age: 22,
      skills: ['Lodding', 'Freak in the sheets', 'Økonomisk teft'],
      achievements: ['Beste Buran-beboer 2024']
    },
    {
      image: '/images/Smid.jpg',
      title: 'Fredrik "Magne" Bjørge',
      subtitle: 'Mann med hatt',
      handle: '@fredrikschmidbjorge',
      borderColor: '#EF4444',
      gradient: 'linear-gradient(195deg,#EF4444,#000)',
      url: 'https://www.instagram.com/fredrikschmidbjorge/',
      bio: 'Fredrik er kjent for sin elegante stil og profesjonalitet.',
      age: 22,
      skills: ['GitHub', 'Sikkerhetsproffen', 'Infrarød struktur'],
      achievements: ['Hatt-maestro', 'Stilikon 2024']
    },
    {
      image: '/images/Pete.jpg',
      title: 'Petter "Abraham" Lona',
      subtitle: 'Promillepoliti',
      handle: '@petterlona',
      borderColor: '#8B5CF6',
      gradient: 'linear-gradient(225deg,#8B5CF6,#000)',
      url: 'https://www.instagram.com/petterlona/',
      bio: 'Petter her vår egne Journalist. Grunnlegger av Tebonsma Times. Har alltid en avisartikkel på lur',
      age: 22,
      skills: ['Modig', 'Krøller', 'Anarkist'],
      achievements: ['Årets journalist 2024']
    },
    {
      image: '/images/Bingo.jpg',
      title: 'Eivind "Kris" Sundet',
      subtitle: 'Meksikaner',
      handle: '@eivind.f.sundet',
      borderColor: '#06B6D4',
      gradient: 'linear-gradient(135deg,#06B6D4,#000)',
      url: 'https://www.instagram.com/eivind.f.sundet/',
      bio: 'Eivind er gjengens "moroklump". Har alltid en vits på lur, men vi forstår dem aldri.',
      age: 22,
      skills: ['Dårlige vitser', 'Standup', 'Latino vibes'],
      achievements: ['Beste vits 2024']
    },
    {
      image: '/images/Remi.jpg',
      title: 'Claus "Remi" Brøttem',
      subtitle: 'Blitzkrieger',
      handle: '@clausloge',
      borderColor: '#EC4899',
      gradient: 'linear-gradient(195deg,#EC4899,#000)',
      url: 'https://www.instagram.com/clausloge/',
      bio: 'Claus er 7-ende Claus i huset. Kommer fra Brøttem og er kjent for sin gård.',
      age: 22,
      skills: ['Bonde', 'Traktor', 'Saus'],
      achievements: ['Beste bonde 2024']
    },
    {
      image: '/images/Slangen.jpg',
      title: 'August "Knut" Rø',
      subtitle: 'Militærmann',
      handle: '@august.dyrendal',
      borderColor: '#F59E0B',
      gradient: 'linear-gradient(225deg,#F59E0B,#000)',
      url: 'https://www.instagram.com/august.dyrendal/',
      bio: 'August er vår militant. Han er for tiden opp i nord og tjener fedrelandet.',
      age: 22,
      skills: ['', 'Mot', 'Disiplin', 'Lojalitet'],
      achievements: ['Beste soldat 2024']
    },
    {
      image: '/images/Adam.jpg',
      title: 'Theo "Adam" Holgersen',
      subtitle: 'Alkohol-liker',
      handle: '@theoholgersen',
      borderColor: '#14B8A6',
      gradient: 'linear-gradient(135deg,#14B8A6,#000)',
      url: 'https://www.instagram.com/theoholgersen/',
      bio: 'Theo er gutten som er mest alkohol-liker. Han kan et par ekstra ting om hver eneste vin på polet.',
      age: 22,
      skills: ['Vin', 'Adam', 'La vin'],
      achievements: ['Årets ansatt vinmonopolet 2024']
    }
  ];

  const data = items?.length ? items : demo;

  // Disable body scroll when modal is open - more robust version
  useEffect(() => {
    if (selectedPerson) {
      // Get current scroll position
      const scrollY = window.scrollY;
      
      // Lock both html and body
      document.documentElement.style.overflow = 'hidden';
      document.body.style.overflow = 'hidden';
      document.body.style.position = 'fixed';
      document.body.style.top = `-${scrollY}px`;
      document.body.style.width = '100%';
      
      // Restore on cleanup
      return () => {
        document.documentElement.style.overflow = '';
        document.body.style.overflow = '';
        document.body.style.position = '';
        document.body.style.top = '';
        document.body.style.width = '';
        window.scrollTo(0, scrollY);
      };
    }
  }, [selectedPerson]);

  useEffect(() => {
    const el = rootRef.current;
    if (!el) return;
    setX.current = gsap.quickSetter(el, '--x', 'px') as SetterFn;
    setY.current = gsap.quickSetter(el, '--y', 'px') as SetterFn;
    const { width, height } = el.getBoundingClientRect();
    pos.current = { x: width / 2, y: height / 2 };
    setX.current(pos.current.x);
    setY.current(pos.current.y);
  }, []);

  const moveTo = (x: number, y: number) => {
    gsap.to(pos.current, {
      x,
      y,
      duration: damping,
      ease,
      onUpdate: () => {
        setX.current?.(pos.current.x);
        setY.current?.(pos.current.y);
      },
      overwrite: true
    });
  };

  const handleMove = (e: React.PointerEvent) => {
    const r = rootRef.current!.getBoundingClientRect();
    moveTo(e.clientX - r.left, e.clientY - r.top);
    gsap.to(fadeRef.current, { opacity: 0, duration: 0.25, overwrite: true });
  };

  const handleLeave = () => {
    gsap.to(fadeRef.current, {
      opacity: 1,
      duration: fadeOut,
      overwrite: true
    });
  };

  const handleCardClick = (person: ChromaItem) => {
    setSelectedPerson(person);
  };

  const handleCardMove: React.MouseEventHandler<HTMLElement> = e => {
    const c = e.currentTarget as HTMLElement;
    const rect = c.getBoundingClientRect();
    c.style.setProperty('--mouse-x', `${e.clientX - rect.left}px`);
    c.style.setProperty('--mouse-y', `${e.clientY - rect.top}px`);
  };

return (
  <div
    ref={rootRef}
    onPointerMove={handleMove}
    onPointerLeave={handleLeave}
    className={`relative w-full h-full flex flex-wrap justify-center items-start gap-3 ${className}`}
    style={
      {
        '--r': `${radius}px`,
        '--x': '50%',
        '--y': '50%'
      } as React.CSSProperties
    }
  >
    {data.map((c, i) => (
      <article
        key={i}
        onMouseMove={handleCardMove}
        onClick={() => handleCardClick(c)}
        className="group relative flex flex-col h-[400px] w-[300px] p-1 rounded-[20px] border-transparent transition-colors duration-300 cursor-pointer will-change-transform"
        style={
          {
            '--card-border': c.borderColor || 'transparent',
            background: c.gradient,
            '--spotlight-color': 'rgba(255,255,255,0.1)'
          } as React.CSSProperties
        }
      >
        {/* Card-level grayscale overlays - only affect this card */}
        <div
          className="absolute inset-0 rounded-[20px] pointer-events-none z-10"
          style={{
            backdropFilter: 'grayscale(1) brightness(0.78)',
            WebkitBackdropFilter: 'grayscale(1) brightness(0.78)',
            maskImage: `radial-gradient(circle 300px at var(--mouse-x, 50%) var(--mouse-y, 50%), transparent 0%, transparent 15%, rgba(0,0,0,0.10) 30%, rgba(0,0,0,0.22) 45%, rgba(0,0,0,0.35) 60%, rgba(0,0,0,0.50) 75%, rgba(0,0,0,0.68) 88%, white 100%)`,
            WebkitMaskImage: `radial-gradient(circle 300px at var(--mouse-x, 50%) var(--mouse-y, 50%), transparent 0%, transparent 15%, rgba(0,0,0,0.10) 30%, rgba(0,0,0,0.22) 45%, rgba(0,0,0,0.35) 60%, rgba(0,0,0,0.50) 75%, rgba(0,0,0,0.68) 88%, white 100%)`
          }}
        />
        
        <div
          className="absolute rounded-[20px] inset-0 pointer-events-none transition-opacity duration-500 z-20 opacity-100 group-hover:opacity-100"
          style={{
            background:
              'radial-gradient(circle at var(--mouse-x) var(--mouse-y), var(--spotlight-color), transparent 70%)'
          }}
        />

        <div className="relative z-10 p-3 box-border" style={{ height: '300px' }}>
          <img src={c.image} alt={c.title} loading="lazy" className="w-full h-full object-cover rounded-[6px]" />
        </div>
        <footer className="relative z-10 p-1.5 text-white font-sans flex flex-col gap-0.5">
            <h3 className="text-[1.05rem] font-semibold truncate">{c.title}</h3>
            <p className="text-[0.85rem] opacity-85 truncate">{c.subtitle}</p>
            {c.handle && <span className="text-[0.70rem] opacity-80 truncate">{c.handle}</span>}
          </footer>
        </article>
      ))}

      {/* Person Detail Modal */}
      <AnimatePresence>
        {selectedPerson && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-8 bg-black/80 backdrop-blur-sm overflow-y-auto"
            onClick={() => setSelectedPerson(null)}
          >
            <motion.div 
              layoutId={`person-card-${selectedPerson.handle}`}
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ 
                type: "spring",
                damping: 25,
                stiffness: 300
              }}
              className="relative max-w-4xl w-full max-h-[90vh] bg-gradient-to-br from-gray-900 to-black rounded-2xl sm:rounded-3xl overflow-y-auto shadow-2xl my-auto"
              onClick={(e) => e.stopPropagation()}
              style={{
                background: selectedPerson.gradient || 'linear-gradient(145deg, #1a1a1a, #000)'
              }}
            >
            {/* Close button */}
            <button
              onClick={() => setSelectedPerson(null)}
              className="absolute top-4 right-4 sm:top-6 sm:right-6 z-50 w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition-colors backdrop-blur-sm"
            >
              <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <div className="flex flex-col items-center md:items-start md:flex-row gap-4 sm:gap-6 md:gap-8 p-4 sm:p-6 md:p-8">
              {/* Image Section */}
              <div className="w-full max-w-[200px] sm:max-w-[250px] md:w-1/3 md:max-w-none flex-shrink-0">
                <div className="relative aspect-[3/4] rounded-2xl overflow-hidden">
                  <img 
                    src={selectedPerson.image} 
                    alt={selectedPerson.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Info Section */}
              <div className="w-full md:w-2/3 flex flex-col gap-2 sm:gap-3 md:gap-2 text-white text-center md:text-left md:max-h-[500px] md:overflow-y-auto">
                <div>
                  <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-1">{selectedPerson.title}</h2>
                  <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/80 mb-1">{selectedPerson.subtitle}</p>
                  {selectedPerson.handle && (
                    <a 
                      href={selectedPerson.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-lg text-white/60 hover:text-white transition-colors inline-block"
                    >
                      {selectedPerson.handle}
                    </a>
                  )}
                </div>

                {selectedPerson.bio && (
                  <div>
                    <h3 className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-white/60 mb-1">Om</h3>
                    <p className="text-sm sm:text-base text-white/90 leading-relaxed">{selectedPerson.bio}</p>
                  </div>
                )}

                {selectedPerson.age && (
                  <div>
                    <h3 className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-white/60 mb-1">Alder</h3>
                    <p className="text-sm sm:text-base text-white/90">{selectedPerson.age} år</p>
                  </div>
                )}

                {selectedPerson.email && (
                  <div>
                    <h3 className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-white/60 mb-1">Kontakt</h3>
                    <a href={`mailto:${selectedPerson.email}`} className="text-sm sm:text-base text-white/90 hover:text-white transition-colors">
                      {selectedPerson.email}
                    </a>
                  </div>
                )}

                {selectedPerson.skills && selectedPerson.skills.length > 0 && (
                  <div>
                    <h3 className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-white/60 mb-1">Ferdigheter</h3>
                    <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                      {selectedPerson.skills.map((skill, i) => (
                        <span key={i} className="px-2 sm:px-3 py-1 bg-white/10 rounded-full text-xs sm:text-sm">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {selectedPerson.achievements && selectedPerson.achievements.length > 0 && (
                  <div>
                    <h3 className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-white/60 mb-1">Prestasjoner</h3>
                    <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                      {selectedPerson.achievements.map((achievement, i) => (
                        <span key={i} className="px-2 sm:px-3 py-1 bg-white/10 rounded-full text-xs sm:text-sm">
                          {achievement}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ChromaGrid;
