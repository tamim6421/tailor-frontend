import { FaSquareFacebook } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="min-h-[50vh] bg-slate-900 text-white">
      <div className="md:flex ">
        <div className="md:flex-[1] pt-10 md:min-h-[40vh] flex  items-center md:justify-center px-20">
          <p className="md:text-center text-2xl md:text-5xl font-semibold ">
            We develop & create <br /> modern textiles
          </p>
        </div>
        <div className="md:flex-[1] px-20 min-h-[40vh] md:flex gap-40 mt-20  justify-center">
          <div className="mb-10 ">
            <div className="">
              <p className="font-semibold">Address </p>
              <hr />
              <p className="mt-3">Dhaka, Bangladesh </p>
              <p className="mt-3">Berlin, De 81566</p>
              <p className="mt-3">785 15h Street, Office 478</p>
            </div>
            <div className="flex gap-4 mt-5">
              <div className="border p-2 rounded-full">
                <FaSquareFacebook className=" text-lg hover:text-blue-500  transition hover:-translate-y-1 " />
              </div>
              <div className="border p-2 rounded-full">
                <FaLinkedin  className="text-lg hover:text-blue-500  transition hover:-translate-y-1 " />
              </div>
              <div className="border p-2 rounded-full">
                <FaTwitter className="text-lg hover:text-blue-500  transition hover:-translate-y-1 " />
              </div>
              <div className="border p-2 rounded-full">
                <FaYoutube className="text-lg hover:text-red-500  transition hover:-translate-y-1 " />
              </div>
            </div>
          </div>
          <div className="">
            <p className="font-semibold">Stay Connected </p>
            <p className="mt-5">info@email.com </p>
            <hr className="border-b-2 w-32" />
            <p className="my-5">+1 840 841 25 69</p>
          </div>
        </div>
   
      </div>
      <hr className="mb-5" />
      <div className="px-20 md:flex justify-between">
        <div className="">
          <ul className="flex  gap-6">
            <li>Home</li>
            <li>Services</li>
            <li>Contact</li>
          </ul>
        </div>
        <div className="pb-5">
          <p>ANCOVA © 2024. All Rights Reserved.</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
