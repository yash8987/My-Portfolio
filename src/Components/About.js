import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-[120vh] bg-gradient-to-b from bg-gray-800 to-black text-white md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>
        <p className="text-xl mt-10">
          Hello! I’m Yash Sharma, a passionate and driven Full Stack Developer
          recently graduated from ABES Engineering College with a degree in
          Computer Science & Engineering(CSE). I specialize in both front-end
          and back-end technologies, aiming to deliver seamless and efficient
          web solutions.
        </p>

        <br />

        <p className="text-xl">
          My interest in web development ignited during my time at College,
          where I was exposed to the fundamentals of programming and web design.
          I quickly grew fascinated by the ability to turn lines of code into
          fully functional and visually appealing applications. Throughout my
          academic career, I engaged in various projects that equipped me with
          hands-on experience in technologies such as HTML, CSS, JavaScript,
          React, Node.js, etc.
        </p>
      </div>
    </div>
  );
};

export default About;
