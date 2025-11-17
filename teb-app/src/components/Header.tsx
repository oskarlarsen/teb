import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header className="fixed top-0 left-0 right-0 bg-teb-green/20 backdrop-blur-md text-white py-4 w-full z-50 border-b border-white/10">
            <div className="max-w-7xl mx-auto px-6">
                <div className="flex justify-between items-center">
                    <Link to="/" className="text-xl font-bold hover:opacity-80 transition-opacity">
                        TEBONSMA
                    </Link>
                    <nav>
                        <ul className="flex gap-6 md:gap-8">
                            <li>
                                <Link to="/" className="hover:text-teb-orange transition-colors text-sm md:text-base">
                                    Hjem
                                </Link>
                            </li>
                            <li>
                                <Link to="/avis" className="hover:text-teb-orange transition-colors text-sm md:text-base">
                                    Avis
                                </Link>
                            </li>
                            <li>
                                <Link to="/kontakt" className="hover:text-teb-orange transition-colors text-sm md:text-base">
                                    Kontakt
                                </Link>
                            </li>
                            <li>
                                <Link to="/persons" className="hover:text-teb-orange transition-colors text-sm md:text-base">
                                    Om oss
                                </Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    );
};

export default Header;