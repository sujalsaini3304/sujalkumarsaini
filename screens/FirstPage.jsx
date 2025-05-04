import React from "react";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import Footer from "../components/Footer";
import Card from "../components/Card";
import SkillCard from "../components/SkillCard";
import useStore from "../store";

const FirstPage = () => {
  const { isThemeChangedToDark} = useStore();

  return (
    <>
      <div className="w-full">
        <Navbar />
        <HeroSection />
        <div>
          <div className="text-center text-5xl  font-light mt-10">Services</div>
          <div className="flex flex-wrap justify-center gap-10 mt-10 mb-10 ">
            <Card
              text="Web Developer specializing in responsive, high-performance websites using the MERN stack."
              name="Website"
              imgURL={
                isThemeChangedToDark
                  ? "https://res.cloudinary.com/dep5qlowr/image/upload/v1746369109/websiteWhiteTheme_gkoyeh.png"
                  : "https://res.cloudinary.com/dep5qlowr/image/upload/v1746359111/website_yhwjw6.png"
              }
            />
            <Card
              text="iOS App Developer building fast, cross-platform apps with React Native and a focus on smooth user experience."
              name="iOS App"
              imgURL={
                isThemeChangedToDark
                  ? "https://res.cloudinary.com/dep5qlowr/image/upload/v1746368998/appleImageWhite_ocmkjq.png"
                  : "https://res.cloudinary.com/dep5qlowr/image/upload/v1746358678/apple_sswdwd.png"
              }
            />
            <Card
              text="Android App Developer crafting cross-platform apps with React Native, optimized for performance and user experience."
              name="Android App"
              imgURL={
                isThemeChangedToDark
                  ? "https://res.cloudinary.com/dep5qlowr/image/upload/v1746368873/androidWhiteTheme_pyblwe.png"
                  : "https://res.cloudinary.com/dep5qlowr/image/upload/v1746358960/androidImage_zpkeka.png"
              }
            />
          </div>
        </div>

        <div>
          <div className="text-center text-5xl  font-light mt-10">Skills</div>
          <div className="flex flex-wrap justify-center gap-10 mt-10 mb-5 ">
            <SkillCard
              imgURL="https://res.cloudinary.com/dep5qlowr/image/upload/v1737268298/html_hgouzo.jpg"
              name="HTML"
              percent="98"
            />
            <SkillCard
              imgURL="https://res.cloudinary.com/dep5qlowr/image/upload/v1737268480/css_upliyi.jpg"
              name="CSS"
              percent="80"
            />
            <SkillCard
              imgURL="https://res.cloudinary.com/dep5qlowr/image/upload/v1737208486/Node_JS_hvggxf.jpg"
              name="NODE JS"
              percent="90"
            />
            <SkillCard
              imgURL="https://res.cloudinary.com/dep5qlowr/image/upload/v1737208475/JS_Image_gyzwaa.jpg"
              name="JS"
              percent="98"
            />
            <SkillCard
              imgURL="https://res.cloudinary.com/dep5qlowr/image/upload/v1737208463/ExpressJS_tgqhu3.jpg"
              name="EXPRESS JS"
              percent="98"
            />
            <SkillCard
              imgURL="https://res.cloudinary.com/dep5qlowr/image/upload/v1737262925/ReactNative2_fghbcr.jpg"
              name="REACT NATIVE"
              percent="95"
            />
          </div>
          <div className="flex justify-center mb-10">
            <details>
              <summary className="text-xl font-bold cursor-pointer">
                More
              </summary>
              <div className="flex flex-wrap justify-center gap-10 mt-10 mb-5 ">
                <SkillCard
                  imgURL="https://res.cloudinary.com/dep5qlowr/image/upload/v1737208500/MongoDB_wkclfc.jpg"
                  name="MONGODB"
                  percent="80"
                />
                <SkillCard
                  imgURL="https://res.cloudinary.com/dep5qlowr/image/upload/v1737208512/MySQL_plnxwi.jpg"
                  name="MYSQL"
                  percent="90"
                />
                <SkillCard
                  imgURL="https://res.cloudinary.com/dep5qlowr/image/upload/v1746357016/reactjs_spjsaq.jpg"
                  name="REACT JS"
                  percent="90"
                />
              </div>
            </details>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default FirstPage;
