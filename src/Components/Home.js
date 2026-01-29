import React from 'react';
import moPicture from './luaghingMo2.JPG';
import { IconLinkButton } from "./LinkButton";
import Contact from "./Contact";



function Home() {
  return (
    <>
    <section
    
      id="home"
      className=" flex flex-col md:flex-row items-center justify-center min-h-screen px-6 py-12 text-white"
    >
      <div className="flex flex-col md:flex-row items-center md:items-start gap-6 md:gap-4">
        {/* About Me Text */}
        <div className="text-center md:text-left">
         <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white    pr-5 text-black">
  Hi, I'm Mokgethwa Kambule
</h1>

          <p className="text-gray-800 text-lg md:text-xl leading-relaxed max-w-md text-white">
         I am a creative at heart, especially passionate about anything that involves 
         being behind a lens and telling stories through images. Working with people and
          collaborating in team environments is something I truly enjoy. Most recently,
           I completed a Software Engineering Occupational Certificate in a peer-to-peer 
           learning environment, which strengthened my communication, teamwork, and problem-solving skills.
          </p>
        </div>

        {/* Picture */}
        <div className="flex justify-center md:justify-start">
          <img
            src={moPicture}
            alt="APictureOfMo"
            className="w-64 h-64 md:w-80 md:h-80 rounded-full object-cover shadow-2xl transform transition-transform duration-300 hover:scale-105"
          />
        </div>
      </div>
     
    </section>
     <Contact/>
</>
    
  );
}

export default Home;
