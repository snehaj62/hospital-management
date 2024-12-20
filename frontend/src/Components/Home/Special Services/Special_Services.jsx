
import React from "react";
import 'animate.css';
import Doctor_Special_Services from "../../../Assets/Doctor_Special_Services.png";
import {
  FaCalculator,
  FaFlask,
  FaHospital,
} from "react-icons/fa6";
import { SlCalender } from "react-icons/sl";
import { Link } from "react-router-dom";
import useScrollAnimation from "./useScrollAnimation";


const Special_Services = () => {
  const [containerRef, isVisible] = useScrollAnimation();

  return (
    <div ref={containerRef}>
      <div className={`flex h-[100vh] mx-[5rem] gap-[10%] transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
        <div className={`mt-[8rem] mb-[14rem] relative w-[25%] h-[65%] bg-gradient-to-b from-teal-300 via-cyan-700 to-sky-700 rounded-tl-full rounded-tr-full border-8 border-white shadow-xl transition-transform duration-1000 ${isVisible ? 'animate__animated animate__fadeInLeft' : ''}`}>
          <img
            src={Doctor_Special_Services}
            alt="Doctor"
            className="absolute top-[-32%] left-0 h-[600px] transform transition duration-1000 ease-in-out hover:scale-110"
          />
        </div>
        <div className={`bg-gradient-to-r from-teal-200 to-teal-500 w-[70%] h-[80vh] rounded-full ${isVisible ? 'animate__animated animate__fadeInRight' : ''}`}>
          <div className="flex mt-[7rem] mb-[4rem]">
            <div className={`text-indigo-950 text-6xl font-bold font-['Poppins'] mr-4 ml-40 ${isVisible ? 'animate__animated animate__fadeInRight' : ''}`}>
              Our
            </div>
            <div className="text-white text-6xl font-bold font-['Poppins']">
              Special Services
            </div>
          </div>
          <div className="mx-9 flex justify-between">
            <div className="flex flex-col space-y-24">
              <ServiceItem icon={<FaCalculator size={48} color="white" />} text="BMI Calculator" marginClasses="ml-40" />
              <ServiceItem icon={<FaFlask size={48} color="white" />} text="Lab Reports" marginClasses="ml-40" />
            </div>
            <div className="flex flex-col space-y-24">
              <ServiceItem icon={<SlCalender size={48} color="white" />} text="Period Tracker" marginClasses="mr-40" />
              <ServiceItem icon={<FaHospital size={48} color="white" />} text="Hospital Near Me" isLink marginClasses="mr-40" />
            </div>
          </div>
        </div>
      </div>
      <div className="text-5xl ml-[5rem] font-semibold text-sky-700">
        Latest News
      </div>
    </div>
  );
};



const ServiceItem = ({ icon, text, isLink = false, marginClasses = '' }) => {
  const content = (
    <>
      <div className="w-full h-full bg-gradient-to-b from-teal-300 to-sky-700 rounded-[25%] flex justify-center items-center mb-4">
        {icon}
      </div>
      <div>{text}</div>
    </>
  );

  return (
    <div className={`hover:scale-105 transition-all ${marginClasses}`}>
      {isLink ? <Link to="/Hospital_Near_Me">{content}</Link> : content}
    </div>
  );
};


export default Special_Services;