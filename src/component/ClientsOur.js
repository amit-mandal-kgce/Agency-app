import React from 'react'

const companyImg = [
    {
        src: "/company1.svg",
    },
    {
        src: "/company2.svg",
    },
    {
        src: "/company3.svg",
    },
    {
        src: "/company4.svg",
    },
    {
        src: "/company5.svg",
    },
    {
        src: "/company6.svg",
    },
    {
        src: "/company7.svg",
    },
]

function ClientsOur() {
  return (
    <div className='my-8'>
      <div className=" text-center px-4">
        <h1 className='text-xl md:text-3xl font-bold py-2'>Our Clients</h1>
        <h2 className='text-gray-500 py-2'>We have been workink width some fortune 500+ clients</h2>
        <div className="grid grid-cols-4 sm:grid-cols-7 py-4 px-4">
          {companyImg.map((ele) => (
            <img src={ele.src} alt="company" className=" w-[40%]" />
          ))}
        </div>
      </div>
    </div>
  );
}

export default ClientsOur
