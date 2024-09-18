"use client"
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";
import BannerAbout from '../components/layouts/about/BannerAbout';
import CompanyDescription from '../components/layouts/about/CompanyDescription';
import StatisticsAbout from '../components/layouts/about/StatisticsAbout';
import Partners from '../components/layouts/about/Partners';

export default function About() {

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });



  }, []);



  return (
    <main>
      <BannerAbout />
      <CompanyDescription />
      <StatisticsAbout />
      <Partners />
    </main>
  );
}
