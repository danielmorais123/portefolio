import React from "react";
import Img from "gatsby-image";

const Card = ({ post, githubIcon }) => {
  return (
    <div className=" sm:w-80 bg-bgcolor p-3 rounded-md flex flex-col xs:m-3 text-center ">
      <Img
        fluid={post.image}
        className=" h-auto sm:w-72 md:h-auto md:rounded-none mx-auto xs:mx-4 self-center "
      />

      <h3 className="text-white"> {post.description}</h3>
      <div>
        {post.tags.map((tag, index) => (
          <button
            className="bg-gray-200 p-1 rounded-full text-xs hover:opacity-75 m-1"
            key={index}
          >
            {tag}
          </button>
        ))}
      </div>

      <div className="flex justify-between items-center ">
        <a href={post.githubLink} className="cursor-pointer">
          <Img className="h-7 w-7" fluid={githubIcon} />
        </a>

        <h5 className=" mt-2 self-end text-white hover:scale-125 mr-2 duration-200 cursor-pointer">
          Daniel Morais
        </h5>
      </div>
    </div>
  );
};

export default Card;
