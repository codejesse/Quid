import React from "react";

const About = () => {
  return (
    <div className="justify-center m-4 border border-orange-400">
      <div className="w-5/12 border m-auto">
        <h1 className="text-center text-4xl font-semibold">
          Feel the best experience with our features
        </h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10 lg:m-12 p-4 border border-red-400">
        <div className="bg-gray-100 h-56 rounded-xl">Grid one</div>
        <div className="bg-gray-100 h-56 rounded-xl">Grid two</div>
      </div>
      <div className="p-4 lg:m-8">
        <div className="bg-gray-100 h-56 rounded-xl">Grid three</div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-10 lg:m-12 p-4 border border-red-400">
        <div className="bg-gray-100 h-56 rounded-xl">Grid four</div>
        <div className="bg-gray-100 h-56 rounded-xl">Grid five</div>
        <div className="bg-gray-100 h-56 rounded-xl">Grid six</div>
      </div>
    </div>
  );
};

export default About;
