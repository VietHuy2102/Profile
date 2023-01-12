import React from "react";
import Hire from "../images/Hire.jpg";

export default function Hireme() {
  return (
    <section id="hireme" className="py-10 px-3 text-white">
      <div className="text-center">
        <h3 className="text-4xl font-semibold">
          Hire <span className="text-cyan-600">Me</span>
        </h3>
        <p className="text-gray-300 text-lg mt-3">Do you have any work</p>
      </div>
      <div className="bg-gray-700 relative px-8 rounded-2xl py-5 lg:max-w-4xl mx-auto min-h-[24rem] mt-24 flex gap-6 lg:flex-row flex-col-reverse items-center">
        <div>
          <h2 className="text-2xl font-semibold">
            Do you want any work from me
          </h2>
          <p className="lg:text-left text-justify max-w-lg text-gray-200 leading-6 mt-4 text-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus at accusantium nostrum tenetur cum voluptas alias voluptatem temporibus, quis voluptatum dignissimos neque, deleniti consectetur fugiat qui porro ad, perferendis vero!
          </p>
          <button className="btn-primary mt-10 text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">
            Say Hello
          </button>
        </div>
        <img
          src={Hire}
          alt=""
          className="h-80 lg:h-[32rem] object-cover rounded-full  "
        />
      </div>
    </section>
  );
}
