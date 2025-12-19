import { useLocation } from 'react-router-dom';
import PillNav from './reactbits/PillNav';

const Header = () => {
    const location = useLocation();

    return (
        <header className="fixed top-0 left-0 right-0 z-50 py-4 w-full">
            <div className="w-full pl-4 flex justify-start">
                <PillNav
                    logo="/images/Jarritos-PNG-Pic.png"
                    logoAlt="TEBONSMA"
                    items={[
                        { label: 'Hjem', href: '/' },
                        { label: 'Flappy', href: '/flappy' },
                        { label: 'Kontakt', href: '/contact' },
                        { label: 'Om oss', href: '/about' }
                    ]}
                    activeHref={location.pathname}
                    className="bg-transparent"
                    ease="power3.out"
                    baseColor="teb-green"
                    pillColor="#ff8c42"
                    hoveredPillTextColor="#ffffff"
                    pillTextColor="#1f2937"
                />
            </div>
        </header>
    );
};

export default Header;