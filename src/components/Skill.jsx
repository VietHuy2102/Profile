import React from "react";

export default function Skill() {
  const skills = [
    {
      logo: "logo-html5",
      level: "Beginner",
      count: 70,
    },
    {
      logo: "logo-css3",
      level: "Expect",
      count: 60,
    },
    {
      logo: "logo-react",
      level: "Beginner",
      count: 66,
    },
    {
      logo: "logo-javascript",
      level: "Beginner",
      count: 70,
    },
  ];

  return (
    <section id="skills" className="py-10 bg-gray-800 relative">
      <div className="mt-8 text-center text-gray-100">
        <h3 className="text-4xl font-semibold">
          My <span className="text-cyan-600">Skill</span>
        </h3>
        <p className="text-gray-400 text-lg mt-3">My knowledge</p>
      </div>
      <div className="flex justify-center items-center mt-12 gap-10 flex-wrap">
        {skills.map((skill, index) => (
          <div key={index} className="border-2 group border-cyan-600 relative min-w-[10rem] max-w-[16rem] bg-gray-900 p-10 rounded-xl">
            <div
              style={{
                background: `conic-gradient(rgb(8,145,170)${skill.count}%,#ddd ${skill.count}%)`,
              }}
              className="w-32 h-32 flex justify-center items-center rounded-full"
            >
              <div className="text-6xl w-28 h-28 group-hover:text-cyan-600  bg-gray-900 rounded-full flex justify-center items-center">
                <ion-icon name={skill.logo}></ion-icon>
              </div>
            </div>
            <p className="text-xl text-center mt-3">{skill.level}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
