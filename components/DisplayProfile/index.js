import React, { useState, useEffect } from "react";
const DisplayProfile = ({ img}) => {
  return (
    <div
      className="overflow-hidden rounded-full 
      mob:h-80 mob:w-80 mob:m-7
      laptop:h-96 laptop:w-96 laptop: mt-24"
    >
      <div
        className="relative rounded-full overflow-hidden transition-all ease-out sm:duration-10
        mob:h-80 mob:w-80 
        laptop:h-96 laptop:w-96"
      >
        <img
          className="h-full w-full object-cover hover:scale-110 transition-all ease-out duration-300"
          src= {img}
        />
      </div>
    </div>
  );
};

export default DisplayProfile;
