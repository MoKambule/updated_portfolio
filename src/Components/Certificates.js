import React, { useState } from "react";
import GenAi from '../Assets/Certificates/GenAi.png';
import IntroSelenium from '../Assets/Certificates/IntroToSelenium.png';
import IntroCoding from '../Assets/Certificates/introductionToCoding.png';
import Responsive from '../Assets/Certificates/ResponviWebDev.png';
import VA from '../Assets/Certificates/virtualAssistance.png';
import WebDev from '../Assets/Certificates/WebDev.png';



function Certificates() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const certifications = [
    { title: "Gen AI Certificate", image: GenAi },
    { title: "Intro to Selenium", image: IntroSelenium },
    { title: "Introduction to Coding", image: IntroCoding },
    { title: "Responsive Web Dev", image: Responsive },
    { title: "Virtual Assistance", image: VA },
    { title: "Web Development", image: WebDev },
  ];

  const prevCard = () => setCurrentIndex(prev => Math.max(prev - 1, 0));
  const nextCard = () => setCurrentIndex(prev => Math.min(prev + 1, certifications.length - 1));


  return (
    <section
      id="certifications"
      className="h-screen flex flex-col items-center justify-center p-4 bg-black"
    >
      <h1 className="text-3xl font-bold mb-6 text-white">My Certifications</h1>

      <div className="relative w-72 h-80 flex items-center justify-center">
        
        {/* Left button */}
        <button
          onClick={prevCard}
className="absolute -left-80 top-1/2 transform -translate-y-1/2 bg-black text-white px-3 py-1 rounded-full shadow hover:bg-gray-800 disabled:opacity-50"
          disabled={currentIndex === 0}
        >
          ◀
        </button>

        {/* Carousel container */}
<div className="absolute top-0 left-1/2 -translate-x-1/2 w-100 h-full overflow-hidden rounded-lg bg-white/10 backdrop-blur-sm shadow-md flex items-center justify-center">
          <div
            className="flex h-full transition-transform duration-500"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="flex-shrink-0 flex flex-col items-center justify-center w-full h-full p-2"
              >
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="max-h-64 object-contain opacity-90"
                />
                <h3 className="text-sm font-medium mt-2 text-white">{cert.title}</h3>
              </div>
            ))}
          </div>
        </div>

        {/* Right button */}
        <button
          onClick={nextCard}
className="absolute -right-80 top-1/2 transform -translate-y-1/2 bg-black text-white px-3 py-1 rounded-full shadow hover:bg-gray-800 disabled:opacity-50"
          disabled={currentIndex === certifications.length - 1}
        >
          ▶
        </button>

      </div>

      {/* Dots indicator */}
      <div className="flex justify-center mt-4 space-x-2">
        {certifications.map((_, index) => (
          <span
            key={index}
            className={`h-2 w-2 rounded-full ${
              index === currentIndex ? "bg-green-500" : "bg-gray-500"
            }`}
          />
        ))}
      </div>
    </section>
  );
}




export default Certificates;

