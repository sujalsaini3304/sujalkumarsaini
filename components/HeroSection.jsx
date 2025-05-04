import React from "react";

const HeroSection = () => {
  return (
    <>
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img
            src="https://res.cloudinary.com/dep5qlowr/image/upload/v1746369421/boy_3_tqakte.png"
            // "https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
            // className="max-w-sm rounded-lg shadow-2xl"
            className="rounded-lg "
            height={800}
            width={400}
          />
          <div>
            <h1 className=" text-4xl sm:text-5xl font-bold">
              I'm Sujal Kumar Saini
            </h1>
            <p className="py-6 text-lg sm:text-2xl font-normal">
              I'm a Web & App Developer with a focus on the MERN stack and React
              Native. I create fast, scalable websites and cross-platform mobile
              apps that blend clean code with great user experience. From
              frontend polish to backend logic — I love building things that
              work beautifully.
            </p>
            <button className="btn btn-success text-white ">
              Download Resume
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
