/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import cottonMan from "../../../assets/cottonMan.png";

const HomeContact = () => {
  return (
    <div className="bg-[#F5F0EA] flex items-center justify-center min-h-[90vh] overflow-hidden">
      <div className="max-w-[1250px] md:flex p-3 gap-14 mx-auto">
        <div className="flex-[1] w-3/4 md:w-full" data-aos="fade-up-right">
          <Image
            src={cottonMan}
            alt="cottonMan"
            height={800}
            weight={600}
          ></Image>
        </div>
        <div className="flex-[1] px-3 text-gray-500 space-y-9 mt-16 md:mt-36" data-aos="fade-up-left">
          <div>
            <p className="uppercase mb-5">Personal Tailor</p>
            <h1 className="text-3xl md:text-6xl drop-shadow-md ">
              We'll Create Your <br /> Perfect Suit
            </h1>
          </div>

          <div>
            <p>
              We appreciate your trust greatly. Our clients choose us and our
              products because they know we are the best.
            </p>
          </div>
          <div>
            <p>MON-FRI: 9 AM – 22 PM</p>
            <p>SATURDAY: 9 AM – 20 PM</p>
          </div>

          <div>
            <button className="px-10 bg-yellow-600 py-3 hover:bg-yellow-700 drop-shadow-md text-white"  data-aos="fade-up"
     data-aos-duration="1000">
              About Us
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeContact;
