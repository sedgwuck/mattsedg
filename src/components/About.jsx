import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="text-xl mt-20">
            My interest in Computer Science came from playing video games on my first console the PS2. The PS2 gave me an outlet to express myself and once the Ps3 came out I began to take an interest in modding video games.
            Although, I was interested in coding, growing up in a small town made it difficult to explore this interest further. 
            I have a passion for cooking, playing video games, reading, and coding! 
            I recently took interests in Web Development with React but I do have experience in C, Python, and Java development.
        </p>

        <br />

        <p className="text-xl">
          
        </p>
      </div>
    </div>
  );
};

export default About;
