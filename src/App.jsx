import Header from "./components/Header";
import Trending from "./components/Trending";
function App() {
  return (
    <>
      <section className="w-full min-h-screen bg-black">
        <Header />
        <Trending />
      </section>
    </>
  );
}

export default App;
