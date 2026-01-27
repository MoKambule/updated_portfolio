import React from 'react';
import moPicture from './luaghingMo2.JPG';

function Home() {
  return (
    <section
      id="home"
      className="flex flex-col md:flex-row items-center justify-center min-h-screen px-6 py-12 text-white"
    >
      <div className="flex flex-col md:flex-row items-center md:items-start gap-6 md:gap-4">
        {/* About Me Text */}
        <div className="text-center md:text-left">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-700 animate-typing overflow-hidden whitespace-nowrap border-r-4 border-r-black pr-5 text-black">
            Hi, I'm Mokgethwa Kambule
            </h1>

          <p className="text-gray-800 text-lg md:text-xl leading-relaxed max-w-md">
            I am a front-end developer with experience in Java, Python, JavaScript, React, HTML, CSS, and Node.js.
            I have also looked into MongoDB for backend integration. My current interests include learning C# and
            expanding my knowledge of software quality assurance (QA). I've been a student at WeThinkCode for almost
            a year, and my projects at the institution have mostly focused on object-oriented programming (OOP) and
            Java client-server architecture.
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
  );
}

export default Home;
