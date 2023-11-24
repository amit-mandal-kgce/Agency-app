import React from "react";
import { NavLink } from "react-router-dom";

function Unseen() {
  return (
    <div className="my-4">
      <div
        className="grid lg:grid-cols-2 px-4 sm:px-16"
      >
        <img
          src="/unseen.svg"
          alt="unseen"
          className="lg:w-[500px] hidden lg:block"
        />
        <div className="pt-16">
          <h1 className="my-3 font-bold text-2xl">
            The Unseen of spending four years at Pixelgrade
          </h1>
          <p className="my-6">
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
          <NavLink
            to="/unseenpage"
            className="bg-green-600 text-white px-4 py-1 rounded-sm my-6"
          >
            Learn More
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default Unseen;
