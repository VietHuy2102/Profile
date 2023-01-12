import React, { useEffect, useState } from "react";

export default function Navbar() {
  const [sticky, setSticky] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);
  const menuLinks = [
    { name: "HOME", link: "#home" },
    { name: "ABOUT", link: "#about" },
    { name: "SKILLS", link: "#skills" },
    { name: "PROJECTS", link: "#projects" },
    { name: "CONTACT", link: "#contact" },
  ];

  useEffect(() => {
    window.addEventListener("scroll", () => {
      const nav = document.querySelector("nav");
      window.scrollY > 0 ? setSticky(true) : setSticky(false);
    });
  }, []); // sự kiện scroll để thay đổi giao diện nav

  return (
    <nav
      className={`fixed w-full top-0 left-0 z-[999] ${
        sticky ? "md:bg-white/60 text-gray-900" : "text-white"
      }`}
    >
      <div className="flex justify-between items-center ">
        <div className="mx-7">
          <h1 className="text-5xl uppercase font-bold">
            <marquee scrollamount={3} direction="down">
              <span className="text-cyan-400">Việt</span>
              <span className="text-pink-400"> Huy</span>
            </marquee>
          </h1>
        </div>

        <div
          className={`${
            sticky ? "md:bg-white/0 text-gray-900 " : "bg-white"
          } text-gray-900 md:block hidden px-7 py-2 font-medium rounded-bl-full absolute right-0
           `}
        >
          <ul className="flex gap-1 justify-center items-center">
            {menuLinks?.map((menu, index) => (
              <li key={index} className="px-6 text-2xl hover:text-cyan-400">
                <a href={menu?.link}>{menu?.name}</a>
              </li>
            ))}
          </ul>
        </div>
        <div
          className={`text-4xl md:hidden z-[999] absolute right-2 top-2 ${
            openMenu ? "text-gray-900" : "text-gray-100"
          } m-5 `}
          onClick={() => setOpenMenu(!openMenu)}
        >
          <ion-icon name="menu-outline"></ion-icon>
        </div>
        <div>
          <div
            className={`md:hidden text-gray-900 absolute h-screen w-2/3 px-7 py-2 bg-white font-medium top-0 duration-1000 ${
              openMenu ? "right-0" : "right-[-100%]"
            }`}
          >
            <ul className="flex flex-col justify-center  h-full p-2 gap-10 text-lg">
              {menuLinks?.map((menu, index) => (
                <li key={index} className={"p-2 hover:text-cyan-400"}>
                  <a href={menu?.link}>{menu?.name}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}
