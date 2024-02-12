import Banner from '@/components/Banner/Banner';
import Footer from '@/components/Footer/Footer';
import Navbar from '@/components/Navbar/Navbar';
import React from 'react';

const HomeLayout = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div className="">
        <Banner></Banner>
        <Footer></Footer>
      </div>
    </div>
  );
};

export default HomeLayout;