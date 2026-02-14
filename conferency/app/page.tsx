"use client"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import CarouselComponent from "./components/carousel";
import Categories from "./components/categories";
import EventCard from "./components/event-card";
import Navbar from "./components/navbar";
import Footer from "./components/footer";

const queryClient = new QueryClient();

export default function Home() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="relative pb-10">
        <Navbar />
        <div className="pt-20">
          <CarouselComponent />
          <Categories />
        </div>
        <div className="px-4 md:px-8 lg:px-16">
          <EventCard />
        </div>
      </div>
      <Footer />
    </QueryClientProvider>
  );
}