import './App.css';
import Categories from './components/Categories';
import ProductCard from './components/ProductCard';
import ViewPreference from './components/ViewPreference';

function App() {
  return (
    <div className="App w-[80vw] min-h-screen grid grid-cols-[.2fr_1fr] text-white">
      <div className='left-hand-side h-[90%] w-full grid grid-rows-[.2fr_1fr] justify-right mt-14'>
        <h1 className='flex text-4xl font-bold text-right items-center mr-4'>Makeup Catalogue</h1>
        <Categories/>
      </div>
      <div className='left-hand-side h-[90%] w-full grid grid-rows-[.1fr_1fr] justify-items-center mt-14 border-[1px] border-white overflow-y-scroll'>
        <ViewPreference />
        <ProductCard/>
      </div>
    </div>
  );
}

export default App;
