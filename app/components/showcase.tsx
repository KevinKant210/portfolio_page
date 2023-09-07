"use client";
import React, { useState, useEffect } from "react";
import { projectData } from "../assets/projectInfo";

export default function Showcase() {

  
  return (
    <div className="w-full">
      <div className=" grid grid-cols-2 md:grid-cols-3">
        {projectData.map((proj,index) => {
          return <>
            <div className="p-3" key={index}>
              <h3 key={index} className="text-xl">{proj.title}</h3>
              {/* <p>{proj.description}</p> */}
            </div>
          </>
        })}
        
      </div>
    </div>
  );
}
