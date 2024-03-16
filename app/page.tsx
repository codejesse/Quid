import About from "./components/About";
import Banner from "./components/Banner";
import Companies from "./components/Companies";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";

// this will be the home page
export default function Home() {
  return (
    <main className="flex flex-col">
      <Navbar />
      <Hero />
      <About />
      <Companies />
      <Banner />
    </main>
  );
}
