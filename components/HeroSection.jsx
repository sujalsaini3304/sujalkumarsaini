import React from "react";
import Typewriter from "typewriter-effect";
import LetterGlitch from "../src/blocks/TextAnimations/LetterGlitch/LetterGlitch.jsx";
import SplitText from "../src/blocks/TextAnimations/SplitText/SplitText.jsx";

const HeroSection = () => {
  const handleAnimationComplete = () => {
    console.log("All letters have animated!");
  };

  return (
    <>
      <div className="flex h-40 relative justify-center items-center ">
        <LetterGlitch
          glitchSpeed={50}
          centerVignette={false}
          outerVignette={false}
          smooth={true}
        />
        <div className="absolute flex gap-5 items-center ">
          <span className=" text-white font-bold text-5xl border pl-4 pr-4 pt-2 pb-2 ">
            .Portfolio
          </span>
          <span>
            <img
              src="https://res.cloudinary.com/dep5qlowr/image/upload/v1746638579/anonymous__ybzusg.png"
              style={{
                height: "80px",
              }}
            />
          </span>
        </div>
      </div>
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
            <h1 className=" text-4xl sm:text-5xl font-bold flex gap-2">
              I'm
              <Typewriter
                options={{
                  strings: [
                    " Sujal Kumar Saini",
                    "a Developer",
                    "a Designer",
                    "a Creator",
                  ],
                  autoStart: true,
                  loop: true,
                }}
              />
            </h1>
            <div className="py-6 text-lg sm:text-2xl font-normal">
              {/* I'm a Web & App Developer with a focus on the MERN stack and React
              Native. I create fast, scalable websites and cross-platform mobile
              apps that blend clean code with great user experience. From
              frontend polish to backend logic — I love building things that
              work beautifully. */}

              <SplitText
                text="I'm a Web & App Developer with a focus on the MERN stack and React Native. I create fast, scalable websites and cross-platform mobile apps that blend clean code with great user experience. From frontend polish to backend logic — I love building things that work beautifully."
                className="text-2xl font-semibold text-center "
                delay={20}
                animationFrom={{
                  opacity: 0,
                  transform: "translate3d(0,50px,0)",
                }}
                animationTo={{ opacity: 1, transform: "translate3d(0,0,0)" }}
                easing="easeOutCubic"
                threshold={0.2}
                rootMargin="-50px"
                onLetterAnimationComplete={handleAnimationComplete}
              />
            </div>

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
