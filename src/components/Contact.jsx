import React from "react";

export default function Contact() {

  const Contacts = [
    {text:"nguyenviethuy1002@gmail.com",icon:"mail-outline"},
    {text:"0979 412 859",icon:"call-outline"},
    {text:"Location",icon:"location-outline"},
  ]

  return (
    <section id="contact" className="py-10 px-3 text-white">
      <div className="text-center mt-8">
        <h3 className="text-4xl font-semibold">
          Contact <span className="text-cyan-600">Me</span>
        </h3>
        <p className="text-gray-400 my-3 text-lg">Get it Touch</p>
        <div className="mt-16 md:flex-row flex flex-col gap-6 max-w-5xl bg-gray-800 md:p-6 p-2 rounded-lg mx-auto">
          <form className="flex flex-col flex-1 gap-5">
            <input type="text" placeholder="Your Name..." />
            <input type="Email" placeholder="Your Email..." />
            <textarea
              name=""
              id=""
              cols="30"
              rows="10"
              placeholder="Your Message"
            ></textarea>
            <button className="w-fit btn-primary mt-10 text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">
              Send Message
            </button>
          </form>
          <div className="flex flex-col gap-4">
            {
              Contacts.map((contact,index)=>(
                <div key={index} className="flex gap-4 w-fit items-center">
                <div className="min-w-[3.5rem] text-3xl min-h-[3.5rem] flex justify-center items-center text-white bg-cyan-600 rounded-full">
                  <ion-icon name={contact.icon}></ion-icon>
                </div>
                <p className="text-lg">{contact.text}</p>
              </div>
              ))
            }
            <div>
            map
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
