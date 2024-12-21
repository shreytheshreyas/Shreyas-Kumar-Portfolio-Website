import React, { useState, useEffect } from "react";
const WorkCard = ({ img, name, description, onClick }) => {
  return (
    <div
      className="overflow-hidden hover:scale-110 hover:bg-slate-500 transition-all duration-300 ease-out rounded-lg m-3 p-2 laptop:p-4 first:ml-0 link"
      onClick={onClick}
    >
      <div
        className="relative rounded-xl overflow-hidden transition-all ease-out duration-300 h-96 w-full"
      >
        <img
          alt={name}
          className="h-full w-full object-cover transition-all ease-out duration-300"
          src= {img}
        ></img>
      </div>
      <h1 className="mt-5 text-3xl font-medium">
        {name ? name : "Project Name"}
      </h1>
      <h2 className="text-xl opacity-50">
        {description ? description : "Description"}
      </h2>
    </div>
  );
};

export default WorkCard;
