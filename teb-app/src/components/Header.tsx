import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header className="bg-teb-green text-white py-6 w-full relative z-10">
            <div className="">
                <div className="flex justify-between items-center">
                    <h1 className="text-2xl font-bold">TEBONSMA</h1>
                    <nav>
                        <ul className="flex gap-6 md:gap-8 lg:gap-10">
                            <li>
                                <Link to="/" className="hover:opacity-80 transition-opacity text-lg">Hjem</Link>
                            </li>
                            <li>
                                <Link to="/avis" className="hover:opacity-80 transition-opacity text-lg">Avis</Link>
                            </li>
                            <li>
                                <Link to="/kontakt" className="hover:opacity-80 transition-opacity text-lg">Kontakt</Link>
                            </li>
                            <li>
                                <Link to="/persons" className="hover:opacity-80 transition-opacity text-lg">Om oss</Link>
                            </li>
                        </ul>
                    </nav>
                </div>
                {/* Add Logo here */}
            </div>
        </header>
    );
};

export default Header;