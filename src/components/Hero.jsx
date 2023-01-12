import React from "react";
import hero from "../images/hero1.jpg";

export default function Hero() {
  const social_media = [
    "logo-instagram",
    "logo-facebook",
    "logo-linkedin",
    "logo-twitter",
  ];

  return (
    <section
      id="home"
      className="min-h-screen flex flex-col py-10 items-center md:flex-row"
    >
      <div className="flex-1 flex justify-center items-center h-full ">
        <img
          src={hero}
          alt=""
          className="md:w-6/12 h-full object-cover rounded-full"
        />
      </div>
      <div className="flex-1">
        <div className="md:text-left text-center">
          <h1 className="md:text-5xl text-2xl md:leading-normal leading-10 text-white font-bold">
            <span className="text-cyan-600 text-5xl md:text-6xl">Hello!</span>
            <br />
            My Name is <span>Việt Huy</span>
          </h1>
          <h4 className="md:text-2xl text-lg md:leading-normal leading-5 font-bold text-gray-600">
            Front End Developer
          </h4>
          <button className="btn-primary mt-8 text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">
            Contact Me
          </button>
          <div className="mt-8 flex justify-center items-center text-3xl md:justify-start gap-5">
            {social_media?.map((icon, index) => (
              <div
                key={index}
                className="text-gray-600 hover:text-white cursor-pointer"
              >
                <ion-icon name={icon}></ion-icon>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
