import React from "react";
import aboutImg from "../images/about.jpg";

export default function About() {
  const info = [
    { text: "Years experience", count: "01" },
    { text: "Completed Projects", count: "05" },
    { text: "Companies Work", count: "04" },
  ];

  return (
    <section id="about" className="py-10 text-white">
      <div className="text-center mt-8">
        <h3 className="text-4xl font-semibold">
          About <span className="text-cyan-600">Me</span>
        </h3>
        <p className="text-gray-400 my-3 text-lg">My introduction</p>
        <div className="flex flex-col-reverse items-center gap-12 px-10 max-w-6xl mx-auto md:flex-row md:gap-6 ">
          <div className="p-2">
            <div className="text-gray-300 my-3">
              <p className="text-justify leading-7 w-11/12 mx-auto">
              Mong muốn được làm việc trong môi
              trường chuyên nghiệp, nhiều cơ hội học
              hỏi, phát triển bản thân. Với niềm yêu
              thích,
              đam mê CNTT tôi mong muốn trở
              thành chuyên gia trong lĩnh vực phát
              triển ứng dụng Web.
              Áp dụng những kinh nghiệm, kỹ năng
              và kiến thức chuyên môn cộng với thái
              độ cầu thị để phấn đấu trở thành một
              nhà quản lý điều hành các dự án quan
              trọng giúp doanh nghiệp phát triển bền
              vững mạnh.
              </p>
              <div className="flex items-center mt-10 gap-12">
                {info.map((content, index) => (
                  <div key={index}>
                    <h3 className="text-2xl md:text-4xl font-semibold text-white">
                      {content.count}
                      <span className="text-cyan-600">+</span>
                    </h3>
                    <span className="md:text-base text-xs">{content.text}</span>
                  </div>
                ))}
              </div>
              <br />
              <br />
              <a href="./../images/Nguyen-Viet-Huy.pdf" download>
                <button className="btn-primary text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">
                  Download MyCv
                </button>
              </a>
            </div>
          </div>
          <div className="flex-1 flex md:mt-0 mt-6 justify-center items-center ">
            <div className="lg:w-96 h-full relative w-11/12 max-w-sm sm:w-10/12">
              <img
                src={aboutImg}
                alt=""
                className="w-full object-cover hover:scale-110 transition duration-300 ease-in-out rounded-xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
