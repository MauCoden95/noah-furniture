"use client"
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";
import { TheBanner } from "./components/layouts/TheBanner";
import { TheProductsTrend } from "./components/layouts/TheProductsTrend";
import { AllProducts } from "./components/layouts/AllProducts";
import { TheOffer } from "./components/layouts/TheOffer";
import { OurBlog } from "./components/layouts/OurBlog";




export default function Home() {

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });


    
  }, []);

  
 
  return (
    <main>
      <TheBanner />
      <TheProductsTrend />
      <AllProducts />
      <TheOffer />
      <OurBlog />   
    </main>
  );
}
