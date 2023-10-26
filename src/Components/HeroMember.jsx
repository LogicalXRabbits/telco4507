import React from "react";

const HeroMember = () => {
    return (
        <div className="flex justify-center">
        <div className="card w-8/12 bg-base-100 shadow-xl md:w-4/12">
        <figure>
          <img
            src="/jos.jpg"
            alt="Movie"
            className="h-52"
          />
        </figure>
        <div className="card-body items-center text-center h-22 ">
          <h2 className="card-title text-[17px]">Josua Kevin Aritonang</h2>
          <p>Gak tau bionnya apa.</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Watch</button>
          </div>
        </div>
      </div>

        </div>
    )
}

export default HeroMember