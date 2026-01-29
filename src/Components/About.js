import React from "react";

function About() {
   const skillsAndLanguages = [
    "Java",
    "Python",
    "JavaScript",
    "React",
    "HTML",
    "CSS",
    "C#",
    "QA Testing",
  ];

  return (
  <div className="max-w-4xl mx-auto p-8">
  <h1 className="text-3xl font-bold mb-8 text-center">About Me & Skills</h1>

  <ul className="relative border-l-2 border-gray-300 ml-6">
    {/* About Me */}
    <li className="mb-8 pl-8 relative">
      {/* Bullet */}
      <span className="absolute left-0 top-8 w-4 h-4 bg-green-600 rounded-full -translate-x-1/2"></span>

      {/* Card */}
      <div className="bg-white/5 shadow-lg rounded-lg p-6 hover:shadow-xl transition duration-300">
        <h2 className="text-xl font-semibold mb-2 text-white">About Me</h2>
        <p className="text-white">
          I am a creative at heart, especially passionate about anything that involves being behind a lens and telling stories through images. 
          Working with people and collaborating in team environments is something I truly enjoy. 
          Most recently, I completed a Software Engineering Occupational Certificate in a peer-to-peer learning environment, 
          which strengthened my communication, teamwork, and problem-solving skills.
        </p>
      </div>
    </li>

    {/* Skills & Languages */}
    <li className="mb-8 pl-8 relative">
      <span className="absolute left-0 top-4 w-4 h-4 bg-green-600 rounded-full -translate-x-1/2"></span>
      <div className="bg-white/5 shadow-lg rounded-lg p-6 hover:shadow-xl transition duration-300">
        <h2 className="text-xl font-semibold mb-2 text-white">Skills & Languages</h2>
        <ul className="list-disc list-inside text-white grid grid-cols-2 gap-2">
          {["Java","Python","JavaScript","React","HTML","CSS","C#","QA Testing"].map((skill) => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>
      </div>
    </li>

    {/* Python */}
    <li className="mb-8 pl-8 relative">
      <span className="absolute left-0 top-4 w-4 h-4 bg-green-600 rounded-full -translate-x-1/2"></span>
      <div className="bg-white/5 shadow-lg rounded-lg p-6 hover:shadow-xl transition duration-300">
        <h2 className="text-xl font-semibold mb-2 text-white">Python</h2>
        <p className="text-white">
          I have a strong foundation in Python, working confidently with core data structures 
          such as lists, dictionaries, sets, and maps, as well as implementing algorithms for 
          sorting, searching, and graph-related problems. I understand object-oriented programming, 
          error handling, and file management, and I focus on writing clean, efficient code. 
          In addition, I place strong emphasis on Test-Driven Development (TDD), using tests to guide 
          implementation, improve code quality, and ensure reliable, predictable behaviour.
        </p>
      </div>
    </li>

    {/* Java */}
    <li className="mb-8 pl-8 relative">
      <span className="absolute left-0 top-4 w-4 h-4 bg-green-600 rounded-full -translate-x-1/2"></span>
      <div className="bg-white/5 shadow-lg rounded-lg p-6 hover:shadow-xl transition duration-300">
        <h2 className="text-xl font-semibold mb-2 text-white">Java</h2>
        <p className="text-white">
          I have a foundation in Java, focusing on object-oriented programming principles such as inheritance, 
          encapsulation, polymorphism, and abstraction. I design modular and reusable code, work with collections, 
          handle exceptions, and understand backend server-client flow.
        </p>
      </div>
    </li>

    {/* C# & .NET */}
    <li className="mb-8 pl-8 relative">
      <span className="absolute left-0 top-4 w-4 h-4 bg-green-600 rounded-full -translate-x-1/2"></span>
      <div className="bg-white/5 shadow-lg rounded-lg p-6 hover:shadow-xl transition duration-300">
        <h2 className="text-xl font-semibold mb-2 text-white">C# & .NET Testing</h2>
        <p className="text-white">
          I have experience in test automation using C# and .NET, including GUI and API testing. 
          I use Selenium WebDriver, ChromeDriver, and AI-assisted testing strategies to write reusable, 
          maintainable, and reliable test suites.
        </p>
      </div>
    </li>
  </ul>
</div>


  );
}


export default About;
