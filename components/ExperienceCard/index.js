import React, { useState, useEffect } from "react";
import { useTheme } from "next-themes";

const ExperienceCard = ({ logo, companyName, role, experienceInfo}) => {
  console.log(experienceInfo)
  const { theme } = useTheme();
  const [mounted, setMounted] = useState();
  useEffect(() => {
    setMounted(true);
  }, []);
  return (
    <div className={`overflow-hidden rounded-lg p-2 laptop:p-4 first:ml-0 link ${mounted && theme === "dark" ? "bg-slate-900" : "bg-slate-50"}`} >
      <h1 className="mt-5 text-3xl font-medium">
        {companyName ? companyName : "Company Name"}
      </h1>
      <h2 className="m-2 text-2xl font-thin">{role ? role : "role"}</h2>
      <ul className="list-disc pl-4">
        { experienceInfo ? experienceInfo.map((info,index) => (<li key={index} className="text-xl pb-2">{info}</li>)) : "Info"}
      </ul> 
    </div>
  );
};

export default ExperienceCard;
