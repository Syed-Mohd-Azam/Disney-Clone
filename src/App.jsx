import Header from "./components/Header";
import Trending from "./components/Trending";
import ProductionHouse from "./components/ProductionHouse";
import Genre from "./components/Genre";
function App() {
  return (
    <>
      <section className="w-full min-h-screen bg-[#1b2431]">
        <Header />
        <Trending />
        <ProductionHouse />
        <Genre />
      </section>
    </>
  );
}

export default App;
