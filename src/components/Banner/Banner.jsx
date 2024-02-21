const Banner = () => {
  return (
    <div className="containerB overflow-hidden ">
      <div className="overlyB">
        <div className="text-white"></div>
        <div>
          <div className="hero min-h-screen text-white">
            <div className="">
              <div className="px-5">
                <h1
                  className="text-3xl lg:text-7xl text-center font-rope pl-5 "
                  data-aos="fade-down"
                >
                  <span className="" data-aos="fade-down">
                    Your Trusted Tailoring <br />{" "}
                  </span>{" "}
                  <span className="text-white" data-aos="fade-left">
                    Made Simple{" "}
                  </span>
                </h1>
                <div className="mt-10 ml-5">

                <p  className=" px-10 py-2 block mx-auto bg-yellow-600 text-center text-white max-w-max hover:bg-yellow-700  cursor-pointer" data-aos="fade-up"
     data-aos-duration="1000">Learn More </p>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
