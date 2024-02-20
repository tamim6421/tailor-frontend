"use client";

/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import React from "react";
import image from "../../../assets/size.jpg";

import "swiper/swiper-bundle.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { createContext } from "react";

const Testimonials = () => {
  return (
    <div className="min-h-[80vh] py-10 bg-[#F5F0EA]">
   
        <div className="">
          <div className=" ">
            {/* Static Background Image */}
            {/* <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1606185540834-d6e7483ee1a4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")' }}
            ></div> */}

            {/* <div className="absolute inset-0 bg-black opacity-60"></div> */}

            <div className="pt-10">

                <p className="text-center">
TESTIMONIALS</p>
            <p className="text-center text-5xl">What They Say</p>
            </div>

            {/* Testimonials Swiper */}
            <Swiper
              className=""
              spaceBetween={10}
              slidesPerView={1}
              pagination={{
                dynamicBullets: true,
              }}
              modules={[Pagination]}
            >
              <SwiperSlide>
                <div className="p-4 m-4 bg-gray-600 text-black bg-transparent rounded-lg overflow-hidden md:pt-4">
                  <div className="relative max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
                    <section className="lg:py-14">
                      <div className="md:flex-col md:items-center md:justify-center">
                        <div>
                          <Image width={100} height={200} alt="Taylor" loading="lazy" className="mx-auto rounded-full border-4 border-amber-500 mb-2" src="https://images.unsplash.com/photo-1527980965255-d3b416303d12?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
                        </div>
                        <div className="my-3 text-center md:mt-0 md:ml-4 md:flex-col md:items-center">
                          <div className="text-base leading-6 font-medium text-black">
                            Taylor Otwell
                          </div>
                          <div className="text-base leading-6 font-medium text-black">
                            Creator of Laravel
                          </div>
                        </div>
                        <div className="max-w-3xl mx-auto text-center text-lg text-black">
                          <p>
                            "Swift, reliable, and stress-free! My go-to for
                            seamless deliveries. Exceptional service that
                            exceeds expectations every time. Highly
                            recommended!"
                          </p>
                        </div>
                      </div>
                    </section>
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="p-4 m-4 bg-gray-600 bg-transparent rounded-lg overflow-hidden md:pt-4">
                  <div className="relative max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
                    <section className="lg:py-14">
                      <div className="md:flex-col md:items-center md:justify-center">
                      <div>
                          <Image width={100} height={200} alt="Taylor" loading="lazy" className="mx-auto rounded-full border-4 border-amber-500 mb-2" src="https://images.unsplash.com/photo-1527980965255-d3b416303d12?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
                        </div>
                        <div className="my-3 text-center md:mt-0 md:ml-4 md:flex-col md:items-center">
                          <div className="text-base leading-6 font-medium text-black">
                            John Doe
                          </div>
                          <div className="text-base leading-6 font-medium text-black">
                            CEO of Raj IT
                          </div>
                        </div>
                        <div className="max-w-3xl mx-auto text-center text-lg text-black">
                          <p>
                            "Exceptional delivery service! Swift, reliable, and
                            stress-free, they redefine efficiency. Seamless
                            deliveries that exceed expectations every time. From
                            prompt arrivals to secure handling, their service
                            ensures peace of mind. Highly recommended for a
                            superior and dependable shipping experience."
                          </p>
                        </div>
                      </div>
                    </section>
                  </div>
                </div>
              </SwiperSlide>

              {/* Add more SwiperSlide components for additional testimonials */}
            </Swiper>
          </div>

        {/* <div className="flex-[1]">
          <Image src={image} alt="image" height={700} weight={700}></Image>
        </div> */}
      </div>
    </div>
  );
};

export default Testimonials;
