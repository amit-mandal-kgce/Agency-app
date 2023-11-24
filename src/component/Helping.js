import React from 'react'


const helpImg = [
    {
        src: '/helping1.svg',
        helpNum: '2,245,356',
        helpDet: 'Members'
    },
    {
        src: '/helping2.svg',
        helpNum: '865,987',
        helpDet: 'Event Booking'
    },
    {
        src: '/helping3.svg',
        helpNum: '67,984',
        helpDet: 'Clubs'
    },
    {
        src: '/helping4.svg',
        helpNum: '2,657.126',
        helpDet: 'Payments'
    },
]
function Helping() {
  return (
    <div className="pt-6 bg-slate-200 p-6">
      <div className="grid md:grid-cols-2 gap-4 items-center sm:mx-24">
        <div className="grid gap-y-1">
          <h1 className="text-xl md:text-3xl font-bold">Helping a Local</h1>
          <h2 className="text-xl md:text-3xl font-bold text-green-600">
            Business reinvent itself
          </h2>
          <h3 className='text-gray-500'>We reached here with our hard work and dedication</h3>
        </div>
        <div className="grid sm:grid-cols-2 gap-10 mx-16">
            {helpImg.map((ele, index) => (
                <div key={index} className='grid grid-cols-2 items-center'>
                <img src={ele.src} alt="Helping" width={100}/>
                <div className="">
                    <h3 className='font-bold text-xl'>{ele.helpNum}</h3>
                    <h2 className='text-gray-500'>{ele.helpDet}</h2>
                </div>
                </div>
            ))}
        </div>
      </div>
    </div>
  );
}

export default Helping
