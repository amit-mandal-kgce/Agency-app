import React from 'react'

const memberImg = [
  {
    src: "/member1.svg",
    heading: "Membership Orginations",
    headDetails:
      "Membership organizations focus on building a community around a shared interest or profession. Agencies associated with these organizations often contribute to the engagement of members.",
  },
  {
    src: "/member2.svg",
    heading: "National Associations",
    headDetails:
      "National associations often advocate for the interests of their industry or profession at the national level, representing concerns, needs, and priorities to government bodies and policymakers.",
  },
  {
    src: "/member3.svg",
    heading: "Club and groups",
    headDetails:
      "Clearly define the purpose and goals of the club or group within the agency. Knowing the objectives will help in attracting members who share similar interests or professional goals.",
  },
  {
    src: "/member4.svg",
    heading: "Education and Resources",
    headDetails:
      "Education and resources are essential components for agencies aiming to provide value to their members and stakeholders. Here are key considerations and strategies related to education and resources.",
  },
];

function ManageCom() {
  return (
    <div className="my-10">
      <div className="text-center">
        <h3 className="text-xl md:text-3xl font-bold py-4">
          Manage your entier community in a signal system
        </h3>
        <h4 className="text-gray-500 py-4">
          We have been workink width some fortune 500+ clients
        </h4>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 px-4 py-4 md:px-16 gap-14">
            {memberImg.map((ele, index) => (
              <div key={index} className='border shadow-lg p-2'>
                <div className="pl-[40%]">
                <img src={ele.src} alt="member" width={60} />
                </div>
                <h3 className='text-lg sm:text-3xl font-bold'>{ele.heading}</h3>
                <h4 className='text-gray-500 text-md'>{ele.headDetails}</h4>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}

export default ManageCom
