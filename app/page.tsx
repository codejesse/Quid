import Hero from "./components/Hero";
import Navbar from "./components/Navbar"

// this will be the home page
export default function Home() {
  return (
    <main className="flex flex-col">
      <Navbar />
      <Hero />
    </main>
  );
}
