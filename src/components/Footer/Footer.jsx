import { FaSquareFacebook } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="min-h-[50vh] bg-slate-900 text-white">
      <div className="md:flex ">
        <div className="md:flex-[1] min-h-[40vh] flex  items-center md:justify-center px-20">
          <p className="md:text-center text-2xl md:text-4xl font-semibold ">
            We develop & create <br /> modern textiles
          </p>
        </div>
        <div className="flex-[1] px-20 min-h-[40vh] md:flex gap-8 items-center justify-center">
          <div className="mb-10 ">
            <div>
              <p>Address </p>
              <p>Dhaka, Bangladesh </p>
              <p>Berlin, De 81566</p>
              <p>785 15h Street, Office 478</p>
            </div>
            <div className="flex gap-4">
              <div>
                <FaSquareFacebook />
              </div>
              <div>
                <FaSquareFacebook />
              </div>
              <div>
                <FaSquareFacebook />
              </div>
              <div>
                <FaSquareFacebook />
              </div>
            </div>
          </div>
          <div>
            <p>Stay Connected </p>
            <p>info@email.com</p>
            <p>+1 840 841 25 69</p>
          </div>
        </div>
      </div>

      <div className="px-20 md:flex justify-between">
        <div className="">
          <ul className="flex gap-6">
            <li>Home</li>
            <li>Services</li>
            <li>Contact</li>
          </ul>
        </div>
        <div>
          <p>ANCOVA © 2024. All Rights Reserved.</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
