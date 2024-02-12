import Banner from '@/components/Banner/Banner';
import Footer from '@/components/Footer/Footer';
import HomeContact from '@/components/HomeSections/HomeContact/HomeContact';
import HomeOurService from '@/components/HomeSections/HomeOurService/HomeOurService';
import Navbar from '@/components/Navbar/Navbar';
import React from 'react';

const HomeLayout = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div className="">
        <Banner></Banner>
        <HomeContact></HomeContact>
        <HomeOurService></HomeOurService>
        <Footer></Footer>
      </div>
    </div>
  );
};

export default HomeLayout;