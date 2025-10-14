import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Screenshots } from "./components/Screenshots";
import { Footer } from "./components/Footer";
import {CarouselImages} from "@/components/CarouselImages.tsx";

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Screenshots />
        <CarouselImages />
      </main>
      <Footer />
    </div>
  );
}

export default App;
