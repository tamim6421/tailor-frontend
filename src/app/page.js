"use client"

import Banner from '@/components/Banner/Banner';
import Footer from '@/components/Footer/Footer';
import HomeContact from '@/components/HomeSections/HomeContact/HomeContact';
import HomeOurService from '@/components/HomeSections/HomeOurService/HomeOurService';
import Testimonials from '@/components/HomeSections/Testimonials/Testimonials';
import Navbar from '@/components/Navbar/Navbar';
import React from 'react';


// for aos animations 
import {useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';

const HomeLayout = () => {

  useEffect(() => {
    AOS.init({
         duration: 800,
         once: false,
       })
 }, [])

  return (
    <div>
      <Navbar></Navbar>
      <div className="">
        <Banner></Banner>
        <HomeContact></HomeContact>
        <HomeOurService></HomeOurService>
        <Testimonials></Testimonials>
        <Footer></Footer>
      </div>
    </div>
  );
};

export default HomeLayout;