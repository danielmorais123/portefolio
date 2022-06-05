import React from "react";
import Img from "gatsby-image";

const AboutMeCard = ({ fluid, icons }) => {
  return (
    <div className=" xs:h-68 md:w-1/2  bg-bgcolor  rounded-md flex xs:flex-row xs:m-3 text-center items-center md:flex-col sm:p-3 md:content-end hover:scale-110 transition-all">
      <Img
        fluid={fluid}
        className=" xs:w-60 xs:ml-2  md:w-32 md:h-32 md:rounded-full  "
      />
      <div>
        
       
        <h3 className="text-white">
          " Hey, my name is Daniel, I'm almost a Software Engineer,I'm currently
          doing an internship at Build Up Labs, in Lisbon and finishing my
          course in Instituto Politécnico de Setúbal. "
        </h3>

        <div className="flex justify-center items-center mt-2">
          <h5 className="  self-end text-white hover:scale-125 mr-2 duration-200 cursor-pointer">
            Daniel Morais
          </h5>
          <div className="flex items-center ml-1">
            <a href="https://www.facebook.com/daniel.morais.18659041/">
              <Img className="h-6 w-6 " fluid={icons[1]} />
            </a>
            <a href="https://twitter.com/TheLoriii" className="ml-1">
              <Img className="h-5 w-5" fluid={icons[2]} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMeCard;
