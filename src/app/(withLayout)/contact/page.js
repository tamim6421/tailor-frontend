import { IoIosArrowDown } from "react-icons/io";
import { ImLocation2 } from "react-icons/im";
import { MdEmail } from "react-icons/md";
import { FaPhone } from "react-icons/fa6";

const Contact = () => {
  return (
    <div className="min-h-[100vh] bg-[#F6F5ED] overflow-hidden">
      <div className="pt-20 max-w-[1200px] mx-auto ">

        {/* title sections  */}
        <div>
          <p className="text-center mt-20 text-3xl font-semibold">Contact</p>
          <p className="flex mt-10  items-center justify-center" data-aos="fade-up"
     data-aos-duration="1000">
            <IoIosArrowDown className="text-2xl text-orange-500" />
          </p>
        </div>

        {/* details sections  */}

        <div className="md:flex gap-10" data-aos="fade-up-right">
            <div className="flex-[1] md:w-3/4 mx-auto px-8">

            <div className="space-y-6">
                <p>CONTACT US</p>
                <p className="text-4xl">Have Questions <span className="text-orange-600">?</span> </p>
                <p className="text-4xl">Get in Touch  <span className="text-orange-600">!</span></p>
                <p>Adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim.</p>
            </div>

            <div className="space-y-4 mt-7">
                <div className="flex gap-3 items-center ">
                    <p>
                    <ImLocation2 />
                    </p>
                    <p>785 15h Street, Office 478 Berlin</p>
                </div>
                <div className="flex gap-3 items-center ">
                    <p>
                    <FaPhone />
                    </p>
                    <p>+1 840 841 25 69</p>
                </div>
                <div className="flex gap-3 items-center ">
                    <p>
                    <MdEmail />
                    </p>
                    <p>info@email.com</p>
                </div>
            </div>


            </div>
            <div className="flex-[1]">


            </div>

        </div>

      </div>
    </div>
  );
};

export default Contact;
