import CarouselComponent from "./components/carousel";
import Navbar from "./components/navbar";

export default function Home() {
  return (
    <div className="relative">
      <Navbar />
      <div className="pt-20">
        <CarouselComponent />
      </div>
    </div>
  );
}