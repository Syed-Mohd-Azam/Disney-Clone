import Header from "./components/Header";
import Trending from "./components/Trending";
import ProductionHouse from "./components/ProductionHouse";
function App() {
  return (
    <>
      <section className="w-full min-h-screen bg-[#1b2431]">
        <Header />
        <Trending />
        <ProductionHouse />
      </section>
    </>
  );
}

export default App;
