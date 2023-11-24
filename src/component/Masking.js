import React from "react";
import { NavLink } from "react-router-dom";

const maskinImg = [
  {
    src: "/helping1.jpg",
    para: "Creating Streamlined Safeguarding Processes with OneRen",
  },
  {
    src: "/helping2.jpg",
    para: "What are your Safeguarding responsibilites and how can you manage them?",
  },
  {
    src: "/helping3.jpg",
    para: "Remaping the Membership Model with Triathlon Australia",
  },
];
function Masking() {
  return (
    <div className="my-16">
      <div className="mx-8">
        <div className="text-center">
          <h1 className="text-xl md:text-3xl font-bold py-4">
            Carting is the new marketing
          </h1>
          <p className="text-gray-500 px-10 py-4">
            Over the years, you might have customized the website design to
            align with your brand or business goals. This could include
            adjustments to layout, color schemes, typography, and other design
            elements.You may have integrated and utilized various features and
            functionalities offered by Pixelgrade, enhancing the user experience
            on your website. This could involve adding plugins, widgets, or
            other tools. Managing content over three years likely involves
            regularly updating and adding new content, ensuring that your
            website stays relevant and informative.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-24">
          {maskinImg.map((ele, index) => (
            <div
              key={index}
              style={{ backgroundImage: `url(${ele.src})` }}
              className="rounded-md"
            >
              <div className="h-80 bg-cover pt-64 text-center">
                <div className="bg-white text-center mx-11 sm:mx-8 lg:mx-10 p-3 rounded-md shadow-lg">
                  <p>{ele.para}</p>
                  <NavLink
                    to="/about"
                    className="text-green-600 text-xs font-bold"
                  >
                    Meet aii customers..
                  </NavLink>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Masking;
