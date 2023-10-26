import React from "react";

const HeroMain = () => {
  return (
    <div className="min-w-screen">
      <img
        src="./PeakyBlinders.jpg"
        alt="Peaky Blinders"
        className="grayscale opacity-80 -mb-64 md:-mb-72 lg:-mb-80"
      />
      <div className="hero min-h-screen">
        <div className="hero-content -mt-28 bg-opacity-30 bg-gray-600 rounded-2xl grayscale- w-9/12 h-46 md:h-64 text-center md:-mt-80 lg:w-7/12 lg:h-96 lg:-mt-72">
          <div className="max-w-xl space-y-5 md:space-y-10 lg:space-y-16" style={{color:"#f4f4f4"}}>
            <h1 className="text-3xl font-bold md:text-5xl lg:text-[100px]" >Hello there</h1>
            <p className="text-[13px] md:text-[20px] lg:text-[28px]">
              perkenalkan kami adalah Family TT-45-07, web ini kami
              mempersembahkan buat kalian jadi silahkan menikmati.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroMain;
