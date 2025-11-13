const Header = () => {
    return (
        <header className="bg-teb-green text-white py-6 w-full">
            <div className="">
                <div className="flex justify-between items-center">
                    <h1 className="text-2xl font-bold">TEBONSMA</h1>
                    <nav>
                        <ul className="flex gap-6 md:gap-8 lg:gap-10">
                            <li>
                                <a href="/" className="hover:opacity-80 transition-opacity text-lg">Hjem</a>
                            </li>
                            <li>
                                <a href="/avis" className="hover:opacity-80 transition-opacity text-lg">Avis</a>
                            </li>
                            <li>
                                <a href="/kontakt" className="hover:opacity-80 transition-opacity text-lg">Kontakt</a>
                            </li>
                            <li>
                                <a href="/om oss" className="hover:opacity-80 transition-opacity text-lg">Om oss</a>
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