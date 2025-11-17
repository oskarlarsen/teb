import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';

export interface ChromaItem {
  image: string;
  title: string;
  subtitle: string;
  handle?: string;
  location?: string;
  borderColor?: string;
  gradient?: string;
  url?: string;
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

  const demo: ChromaItem[] = [
    {
      image: '/images/Gummert.jpg',
      title: 'Eirik "Peter" Engum',
      subtitle: 'Generalkommisær',
      handle: '@eirik.engum',
      borderColor: '#4F46E5',
      gradient: 'linear-gradient(145deg,#4F46E5,#000)',
      url: ''
    },
    {
      image: '/images/Gøran.jpg',
      title: 'Oskar "Gjøran" Larsen',
      subtitle: 'Generalsuperintendant',
      handle: '@larsen_oskar',
      borderColor: '#10B981',
      gradient: 'linear-gradient(210deg,#10B981,#000)',
      url: ''
    },
    {
      image: '/images/Garbae.jpg',
      title: 'Anders "Johan" Garberg',
      subtitle: 'Buran Baddie',
      handle: '@andersmgar',
      borderColor: '#F59E0B',
      gradient: 'linear-gradient(165deg,#F59E0B,#000)',
      url: ''
    },
    {
      image: '/images/Smid.jpg',
      title: 'Fredrik "Magne" Bjørge',
      subtitle: 'Mann med hatt',
      handle: '@fredrikschmidbjorge',
      borderColor: '#EF4444',
      gradient: 'linear-gradient(195deg,#EF4444,#000)',
      url: ''
    },
    {
      image: '/images/Pete.jpg',
      title: 'Petter "Abraham" Lona',
      subtitle: 'Promillepoliti',
      handle: '@petterlona',
      borderColor: '#8B5CF6',
      gradient: 'linear-gradient(225deg,#8B5CF6,#000)',
      url: ''
    },
    {
      image: '/images/Bingo.jpg',
      title: 'Eivind "Kris" Sundet',
      subtitle: 'Meksikaner',
      handle: '@eivind.f.sundet',
      borderColor: '#06B6D4',
      gradient: 'linear-gradient(135deg,#06B6D4,#000)',
      url: ''
    },
    {
      image: '/images/Remi.jpg',
      title: 'Claus "Remi" Brøttem',
      subtitle: 'Blitzkrieger',
      handle: '@clausloge',
      borderColor: '#EC4899',
      gradient: 'linear-gradient(195deg,#EC4899,#000)',
      url: ''
    },
    {
      image: '/images/Slangen.jpg',
      title: 'August "Knut" Rø',
      subtitle: 'Enøyd pirat',
      handle: '@august.dyrendal',
      borderColor: '#F59E0B',
      gradient: 'linear-gradient(225deg,#F59E0B,#000)',
      url: ''
    },
    {
      image: '/images/Adam.jpg',
      title: 'Theo "Adam" Holgersen',
      subtitle: 'Narkomann',
      handle: '@theoholgersen',
      borderColor: '#14B8A6',
      gradient: 'linear-gradient(135deg,#14B8A6,#000)',
      url: ''
    }
  ];

  const data = items?.length ? items : demo;

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

  const handleCardClick = (url?: string) => {
    if (url) window.open(url, '_blank', 'noopener,noreferrer');
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
        onClick={() => handleCardClick(c.url)}
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
    </div>
  );
};

export default ChromaGrid;
