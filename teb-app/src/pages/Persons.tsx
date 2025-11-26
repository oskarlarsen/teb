import Header from '../components/Header';
import ChromaGrid from './../components/reactbits/ChromaGrid';
import DarkVeil from '../components/reactbits/DarkVeil';

const Persons =() => {
  return (
    <div className="flex flex-col min-h-screen relative">
      <Header />
      <div className="fixed inset-0 z-0">
        <DarkVeil />
      </div>
      <main className='flex-1 flex items-center justify-center p-8 relative z-10'>
        <ChromaGrid />
      </main>
    </div>
  );
};

export default Persons;