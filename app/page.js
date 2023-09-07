import Image from "next/image";
import Link from "next/link";
import React from "react";
import Nav from "./components/navbar";
import Showcase from "./components/showcase";


export default function Home() {
  return (
    <main className="text-black dark:text-white">
      {/* Navbar */}
      <div className="fixed w-full">
        <Nav className=""></Nav>
      </div>
      {/* Profile Picture */}
      <div className="flex-col justify-center pt-12 p-3">
        <div className="  flex m-5  bg-light-blue rounded-full">
          <p className=" p-10">Temporary Text</p>
        </div>
      </div>
      {/* About Segment */}
      <div className="bg-fig-blue flex justify-center p-1">
        <h1 className="text-center font-bold text-4xl">About</h1>
      </div>

      <div className="flex justify-center p-2">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>

    
      </div>

      {/* Projects Segment */}
      <div className="flex bg-fig-blue justify-center p-1">
        <h1 className="font-bold text-center text-4xl">Projects </h1>
      </div>
      <div className="flex justify-center p-2">
        <Showcase></Showcase>
       
      </div>

      {/* Technologies Segment */}
      <div className="flex bg-fig-blue justify-center p-1">
        <h1 className="font-bold text-center text-4xl">Technologies</h1>
      </div>
      <div className="flex justify-center p-2">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>
      {/* Contact Segment */}
      {/* Personal comment should ammend to be a footer */}
      <div className="flex bg-fig-blue justify-center p-1">
        <h1 className="font-bold text-center text-4xl">Contact</h1>
      </div>
      <div className="flex justify-center p-2">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>
    </main>
  );
}
