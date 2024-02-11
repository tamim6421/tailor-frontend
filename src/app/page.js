import Banner from '@/components/Banner/Banner';
import Navbar from '@/components/Navbar/Navbar';
import React from 'react';

const HomeLayout = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div className="">
        <Banner></Banner>
      <p>this is home </p>
      </div>
    </div>
  );
};

export default HomeLayout;