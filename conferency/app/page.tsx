import CarouselComponent from "./components/carousel";
import Categories from "./components/categories";
import Navbar from "./components/navbar";

export default function Home() {
  return (
    <div className="relative">
      <Navbar />
      <div className="pt-20">
        <CarouselComponent />
        <Categories />
      </div>
      <div className="px-4 md:px-8 lg:px-16">
      </div>
    </div>
  );
}