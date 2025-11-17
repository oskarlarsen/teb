import Header from './Header';
import Footer from './Footer';
import ChromaGrid from './../components/reactbits/ChromaGrid';

const Persons =() => {
  return (
    <div className="flex flex-col min-h-screen relative">
        <Header />
        <main className='flex-1 flex items-center justify-center p-8 relative z-10'>
            <ChromaGrid />
        </main>
        <Footer />
    </div>
  );
};

export default Persons;