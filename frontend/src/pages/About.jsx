import React from "react";
import image from "../assets/7bad27932f1305ffef0b24888d97a095d198ef10.png"
import "./About.css";
export default function About() {
    return (
      <div className="main-container mx-auto bg-[#fafafa] relative overflow-hidden pb-24">
        {/* About Us Section */}
        <div className="text-center mt-16">
          <h2 className="text-lg font-bold text-[#666] tracking-widest">ABOUT US</h2>
          <h1 className="text-4xl font-bold text-[#333] mt-4">Creative Blog Writing and Publishing Site</h1>
          <p className="text-lg text-[#666] max-w-3xl mx-auto mt-4">
            Leverage agile frameworks to provide a robust synopsis for high-level overviews.
            Iterative approaches to corporate strategy foster collaborative thinking.
          </p>
        </div>
  
        {/* Image Section */}
        <div>
            <img src={image} alt="Logo" className="w-[90%] max-w-[1232px] h-[400px] bg-blue-100 rounded-lg mx-auto mt-12 bg-cover bg-center" />
        </div>
  
        {/* How We Work Section */}
        <div className="mt-16 px-16">
          <h2 className="text-lg font-bold text-[#666] tracking-widest">HOW WE WORK</h2>
          <div className="flex justify-between items-start mt-8">
            <h1 className="text-4xl font-bold text-[#333] max-w-[500px]">I will show you how our team works</h1>
            <p className="text-lg text-[#666] max-w-[400px] opacity-70">
              Bring to the table win-win market strategies to ensure perfect articles.
            </p>
          </div>
        </div>
  
        {/* Work Process Boxes */}
        <div className="flex justify-center items-center gap-8 mt-16 ">
          {/* Box 1 - Brainstorming */}
          <div className="w-[300px] h-[300px] bg-white border border-gray-300 text-black rounded-lg p-6 
            transition-all duration-300 hover:bg-[#7c4ee4] hover:text-white">
            <h3 className="text-5xl font-bold text-gray-400 transition-all duration-300hover:text-white ">01</h3>
            <h4 className="text-xl font-bold text-[#7c4ee4] transition-all duration-300 hover:text-white  mt-2">
              Brainstorming
            </h4>
            <p className="mt-4 text-black transition-all duration-300 hover:text-white">
              Bring to the table win-win survival strategies to ensure proactive domination.
            </p>
            <a href="#" className="text-sm font-bold mt-6 inline-block hover:text-white">Learn More</a>
            <div className="w-16 h-1 bg-[#7c4ee4] mt-2 transition-all duration-300 hover:bg-white hover:text-white"></div>
          </div>
  
          {/* Box 2 - Analyzing */}
          <div className="w-[300px] h-[300px] bg-white border border-gray-300 text-black rounded-lg p-6 
            transition-all duration-300 hover:bg-[#7c4ee4] hover:text-white">
            <h3 className="text-5xl font-bold text-gray-400 transition-all duration-300 hover:text-white">02</h3>
            <h4 className="text-xl font-bold text-[#7c4ee4] transition-all duration-300 hover:text-white mt-2">
              Analyzing
            </h4>
            <p className="mt-4 text-black transition-all duration-300 hover:text-white">
              Capitalize on low-hanging fruit to identify a ballpark value-added activity.
            </p>
            <a href="#" className="text-sm font-bold mt-6 inline-block hover:text-white">Learn More</a>
            <div className="w-16 h-1 bg-[#7c4ee4] mt-2 transition-all duration-300 hover:bg-white"></div>
          </div>
  
          {/* Box 3 - Execution */}
          <div className="w-[300px] h-[300px] bg-white border border-gray-300 text-black rounded-lg p-6 
            transition-all duration-300 hover:bg-[#7c4ee4] hover:text-white">
            <h3 className="text-5xl font-bold text-gray-400 transition-all duration-300 hover:text-white">03</h3>
            <h4 className="text-xl font-bold text-[#7c4ee4] transition-all duration-300 hover:text-white mt-2">
              Execution
            </h4>
            <p className="mt-4 text-black transition-all duration-300 hover:text-white">
              Taking an agile approach to ensure seamless execution of our strategy.
            </p>
            <a href="#" className="text-sm font-bold mt-6 inline-block hover:text-white">Learn More</a>
            <div className="w-16 h-1 bg-[#7c4ee4] mt-2 transition-all duration-300 hover:bg-white"></div>
          </div>
        </div>
      </div>
    );
  }