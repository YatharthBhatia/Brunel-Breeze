import React from 'react';
import personImage from "../assets/person.png";
import sparkleImage from "../assets/sparkle.svg";
import rocketImage from "../assets/rocket.svg";

const Details = () => {
  return (
    <div className="relative">
      <div>
        <img src={personImage} alt="Person" />
      </div>

      <div className="absolute rounded-3xl shadow-lg bg-white px-8 pb-8 pt-10 top-[20%] left-[-8.5rem] hover:scale-105 transition-all">
        <img
          src={sparkleImage}
          alt=""
          className="absolute top-[-1.5rem] left-[-1rem]"
        />
        <h2 className="font-sans text-6xl font-semibold mb-4">40%</h2>
        <p className="max-w-[205px] text-lg leading-6 text-[#828282]">
          Achieved reduction in project execution time by optimising team
          availability
        </p>
      </div>

      <div className="absolute flex items-center gap-4 rounded-full p-4 bg-white shadow-lg bottom-10 left-[-4rem] hover:scale-105 transition-all">
        <div className="bg-green-200 bg-opacity-40 p-4 rounded-full">
          <img src={rocketImage} alt="Rocket Icon" />
        </div>
        <div className="mr-5">
          <h2 className="text-2xl font-semibold">10 DAYS</h2>
          <span className="text-lg text-[#828282]">Staff Deployment</span>
        </div>
      </div>

      <div className="absolute border border-[#3d3d3d] text-white rounded-3xl shadow-lg bg-[#002e18] px-8 pb-8 pt-10 bottom-[-3rem] right-[-4.5rem] hover:scale-105 transition-all">
        <h2 className="text-6xl font-semibold mb-4">
          $0.5 <span className="text-2xl font-medium text-[#a6a3a1]">MILLION</span>
        </h2>
        <p className="max-w-[225px] text-lg leading-6 text-[#cccccc]">
          Reduced client expenses by saving on hiring and employee costs.
        </p>
      </div>
    </div>
  );
};

export default Details;
