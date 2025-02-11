
import React from "react";
import image1 from "../assets/21b77c8b2cbf25541fc9e8cca7bff85eba4c0c82.png";
import logo2 from "../assets/office.png";
import logo1 from "../assets/email.png";
import logo3 from "../assets/phone.png";
export default function Main() {
  return (
    <div className="main-container h-auto bg-[#fafafa] rounded-[10px] relative overflow-hidden mx-auto my-0">

      <div className="title-container mt-[40px] text-center px-6">
        <h1 className="font-bold text-[20px] text-[#333]">Get in Touch</h1>
        <p className="text-[12px] text-[#999] mt-3">
          Contact us to publish your content and show ads to our website and get a good reach.
        </p>
      </div>

      <div className="contact-info-container flex justify-center mt-[30px] px-6">
        <div className="info-box w-[200px] h-[150px] bg-white rounded-[10px] p-4 shadow-md mx-4">
        <div className="flex items-center justify-center"><img src={logo2} alt="Logo 1" className="w-[30px] h-[30px] bg-[#7c4ee4] rounded-full " /></div>
          <h2 className="font-semibold text-[#7c4ee4] text-[14px] flex justify-center" >Office</h2>
          <a href="https://www.google.com/maps/place/Victoria+St,+London,+UK/data=!4m2!3m1!1s0x487604dec3af41af:0xc2f08cf2ee9a6589?sa=X&ved=1t:242&ictx=111" className="text-[#7a7a7a] text-[12px] mt-2 flex justify-center">Victoria Street, London, UK</a>
        </div>
        <div className="info-box w-[200px] bg-white rounded-[10px] p-4 shadow-md mx-4">
        <div className="flex items-center justify-center"><img src={logo1} alt="Logo 1" className="w-[30px] h-[30px] bg-[#7c4ee4] rounded-full " /></div>
          <h2 className="font-semibold text-[#7c4ee4] text-[14px] flex justify-center">Email</h2>
          <a href="mailto:hellow@zarrin.com"className="text-[#7a7a7a] text-[12px] mt-2 flex justify-center">hello@zarrin.com</a>
        </div>
        <div className="info-box w-[200px] bg-white rounded-[10px] p-4 shadow-md mx-4">
        <div className="flex items-center justify-center"><img src={logo3} alt="Logo 1" className="w-[30px] h-[30px] bg-[#7c4ee4] rounded-full " /></div>
          <h2 className="font-semibold text-[#7c4ee4] text-[14px] flex justify-center">Phone</h2>
          <a href="call:(001) 2342 3451" className="text-[#7a7a7a] text-[12px] mt-2 flex justify-center">(001) 2342 3451</a>
        </div>
      </div>
      <img src={image1}  alt="Logo" className="w-[90%] max-w-[712px] h-[400px] rounded-lg mx-auto mt-12 bg-cover bg-center" ></img>
      <div className="form-container bg-white rounded-[10px] shadow-lg p-6 mt-[40px] mb-[40px] mx-auto w-[90%] max-w-[500px] ">
        
        <h2 className="font-semibold text-[18px] text-[#333]">Contact Form</h2>
        <form className="mt-6">
          <div className="form-group mb-4">
            <label htmlFor="name" className="block text-[#333] text-[12px]">Name</label>
            <input
              type="text"
              id="name"
              className="w-full p-3 mt-2 border border-[#c4c4c4] rounded-[4px]"
              placeholder="Enter your name"
            />
          </div>
          <div className="form-group mb-4">
            <label htmlFor="email" className="block text-[#333] text-[12px]">Email</label>
            <input
              type="email"
              id="email"
              className="w-full p-3 mt-2 border border-[#c4c4c4] rounded-[4px]"
              placeholder="Enter your email"
            />
          </div>
          <div className="form-group mb-4">
            <label htmlFor="phone" className="block text-[#333] text-[12px]">Phone</label>
            <input
              type="tel"
              id="phone"
              className="w-full p-3 mt-2 border border-[#c4c4c4] rounded-[4px]"
              placeholder="Enter your phone number"
            />
          </div>
          <div className="form-group mb-4">
            <label htmlFor="subject" className="block text-[#333] text-[12px]">Subject</label>
            <input
              type="text"
              id="subject"
              className="w-full p-3 mt-2 border border-[#c4c4c4] rounded-[4px]"
              placeholder="Enter subject"
            />
          </div>
          <div className="form-group mb-4">
            <textarea
              id="message"
              className="w-full p-3 mt-2 border border-[#c4c4c4] rounded-[4px]"
              rows="4"
              placeholder="Enter your message"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-[#7c4ee4] text-[#fff] py-3 rounded-[10px] mt-4 font-semibold"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}
