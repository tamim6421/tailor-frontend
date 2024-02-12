"use client";
import { FaArrowRightLong } from "react-icons/fa6";
import { FaFacebookSquare, FaTwitterSquare, FaInstagram } from "react-icons/fa";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
// import 'swiper/css/pagination';

// import required modules
import { Pagination, Autoplay } from "swiper/modules";
import Image from "next/image";
import image1 from "../../../assets/cort2.jpg"
import image2 from "../../../assets/cort1.jpg"
import image3 from "../../../assets/cutting.jpg"
import image4 from "../../../assets/button.jpg"

const HomeOurService = () => {
    return (
        <div className="my-36">
            <div className="flex w-3/4 mx-auto items-start justify-between">
                <div>
                    <p className='uppercase'>all you need</p>
                    <p className="text-4xl ">Our Services</p>
                </div>
                <div>
                    <p>Adipiscing elit, sed do euismod tempor incidunt ut <br /> labore et dolore magna aliqua. Ut enim ad minim veniam, <br /> quis nostrud exercitacion ullamco.</p>
                </div>
                <div>
                    <button className="flex gap-3 items-center ">View More <FaArrowRightLong className="text-orange-500" /> </button>
                </div>


            </div>

            <div className="w-3/4 mt-36 mx-auto">
            <Swiper
        slidesPerView={1}
        breakpoints={{
          640: { slidesPerView: 2, spaceBetween: 10 },
          1024: {
            slidesPerView: 2,
          },
          1080: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
        }}
        autoplay={{
          delay: 4500,
          disableOnInteraction: false,
        }}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination, Autoplay]}
        className="mySwiper"
      >
    
     
 
        <SwiperSlide>
        <div
            className="relative p-2 w-full  group transition-all duration-500 flex flex-col text-gray-700  bg-white  rounded-xl "
            data-aos="zoom-in-up"
          >
            <div className="group-hover:blur-none transition-all duration-500">
              <div className="relative mt-4 max-h-[500px]   overflow-hidden text-gray-700 bg-white w-full rounded-xl bg-clip-border object-cover">
                <Image
                className="object-cover "
                  src={image1}
                  alt="image"
                  width={400}
                  height={200}
                />
              </div>

              <div className="p-2 text-center">
                <h4
                  className="block mb-2 font-sans text-2xl antialiased font-semibold leading-snug tracking-normal text-gray-500"
                  data-aos="fade-up"
                >
                  Wedding Services
                </h4>
                <p className="block text-gray-500" data-aos="fade-down">
                The Height of Handmade Luxury
                </p>
              </div>
            </div>
            <div className="flex justify-center p-2 pt-2 gap-7 ">
              <div className=" absolute gap-4 scale-0 transition-all duration-500 group-hover:scale-100 top-1/2">
                <p className="text-2xl text-white font-semibold">All You Need</p>
                <p className="text-white font-semibold flex gap-4 items-center">View Details <FaArrowRightLong className="" /> </p>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
        <div
            className="relative p-2 w-full  group transition-all duration-500 flex flex-col text-gray-700  bg-white  rounded-xl "
            data-aos="zoom-in-up"
          >
            <div className="group-hover:blur-none transition-all duration-500">
              <div className="relative mt-4 max-h-[500px]  overflow-hidden text-gray-700 bg-white w-full rounded-xl bg-clip-border object-cover">
                <Image
                className="object-cover "
                  src={image2}
                  alt="image"
                  width={400}
                  height={200}
                />
              </div>

              <div className="p-2 text-center">
                <h4
                  className="block mb-2 font-sans text-2xl antialiased font-semibold leading-snug tracking-normal text-gray-500"
                  data-aos="fade-up"
                >
                  Suit Resizing
                </h4>
                <p className="block text-gray-500" data-aos="fade-down">
                The Height of Handmade Luxury
                </p>
              </div>
            </div>
            <div className="flex justify-center p-2 pt-2 gap-7 ">
              <div className=" absolute gap-4 scale-0 transition-all duration-500 group-hover:scale-100 top-1/2">
                <p className="text-2xl text-white font-semibold">All You Need</p>
                <p className="text-white font-semibold flex gap-4 items-center">View Details <FaArrowRightLong className="" /> </p>
              </div>
            </div>
          </div>
        </SwiperSlide>


        <SwiperSlide>
        <div
            className="relative p-2 w-full  group transition-all duration-500 flex flex-col text-gray-700  bg-white  rounded-xl "
            data-aos="zoom-in-up"
          >
            <div className="group-hover:blur-none transition-all duration-500">
              <div className="relative mt-4 max-h-[500px] overflow-hidden text-gray-700 bg-white w-full rounded-xl bg-clip-border object-cover">
                <Image
                className="object-cover "
                  src={image3}
                  alt="image"
                  width={400}
                  height={200}
                />
              </div>

              <div className="p-2 text-center">
                <h4
                  className="block mb-2 font-sans text-2xl antialiased font-semibold leading-snug tracking-normal text-gray-500"
                  data-aos="fade-up"
                >
                  Individual Tailoring
                </h4>
                <p className="block text-gray-500" data-aos="fade-down">
                The Height of Handmade Luxury
                </p>
              </div>
            </div>
            <div className="flex justify-center p-2 pt-2 gap-7 ">
              <div className=" absolute gap-4 scale-0 transition-all duration-500 group-hover:scale-100 top-1/2">
                <p className="text-2xl text-white font-semibold">All You Need</p>
                <p className="text-white font-semibold flex gap-4 items-center">View Details <FaArrowRightLong className="" /> </p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        
        <SwiperSlide>
        <div
            className="relative p-2 w-full  group transition-all duration-500 flex flex-col text-gray-700  bg-white  rounded-xl "
            data-aos="zoom-in-up"
          >
            <div className="group-hover:blur-none transition-all duration-500">
              <div className="relative mt-4 max-h-[500px] overflow-hidden text-gray-700 bg-white w-full rounded-xl bg-clip-border object-cover">
                <Image
                className="object-cover "
                  src={image4}
                  alt="image"
                  width={400}
                  height={200}
                />
              </div>

              <div className="p-2 text-center">
                <h4
                  className="block mb-2 font-sans text-2xl antialiased font-semibold leading-snug tracking-normal text-gray-500"
                  data-aos="fade-up"
                >
                 Custom Accessories
                </h4>
                <p className="block text-gray-500" data-aos="fade-down">
                The Height of Handmade Luxury
                </p>
              </div>
            </div>
            <div className="flex justify-center p-2 pt-2 gap-7 ">
              <div className=" absolute gap-4 scale-0 transition-all duration-500 group-hover:scale-100 top-1/2">
                <p className="text-2xl text-white font-semibold">All You Need</p>
                <p className="text-white font-semibold flex gap-4 items-center">View Details <FaArrowRightLong className="" /> </p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div
            className="relative p-2 w-full  group transition-all duration-500 flex flex-col text-gray-700  bg-white  rounded-xl "
            data-aos="zoom-in-up"
          >
            <div className="group-hover:blur-none transition-all duration-500">
              <div className="relative mt-4 max-h-[500px] overflow-hidden text-gray-700 bg-white w-full rounded-xl bg-clip-border object-cover">
                <Image
                className="object-cover "
                  src={image4}
                  alt="image"
                  width={400}
                  height={200}
                />
              </div>

              <div className="p-2 text-center">
                <h4
                  className="block mb-2 font-sans text-2xl antialiased font-semibold leading-snug tracking-normal text-gray-500"
                  data-aos="fade-up"
                >
                 Custom Accessories
                </h4>
                <p className="block text-gray-500" data-aos="fade-down">
                The Height of Handmade Luxury
                </p>
              </div>
            </div>
            <div className="flex justify-center p-2 pt-2 gap-7 ">
              <div className=" absolute gap-4 scale-0 transition-all duration-500 group-hover:scale-100 top-1/2">
                <p className="text-2xl text-white font-semibold">All You Need</p>
                <p className="text-white font-semibold flex gap-4 items-center">View Details <FaArrowRightLong className="" /> </p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        
  
     
        
      </Swiper>
            </div>
        </div>
    );
};

export default HomeOurService;