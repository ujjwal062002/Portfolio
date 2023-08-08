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
            About me
          </p>
        </div>

        <p className="text-xl mt-20">
        I am a proactive third-year student enrolled in the Electronics and Communication Engineering program at Dayananda Sagar College of Engineering. 
        Driven by a passion for front-end development, I specialize in harnessing the capabilities of React to construct immersive and user-friendly interfaces.
        My skill set extends further as a problem solver, equipped with the ability to address challenges creatively. Moreover, 
        I possess a firm grasp of Database Management Systems (DBMS).
        </p>

        <br />

        <p className="text-xl">
        Apart from my technical pursuits, I'm an avid sports enthusiast with a deep interest in cricket and football. I find joy in following and playing these games.
         Music also holds a special place in my life, as I appreciate different genres and often find inspiration and relaxation through melodies.
        </p>
      </div>
    </div>
  );
};

export default About;
