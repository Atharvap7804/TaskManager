import React from 'react';

const FailedTask=({data})=>{
  return(
    <div className=' div flex-shrink-0 h-full w-[300px] bg-[#FF006E] rounded-xl p-5'>
        <div className='flex justify-between items-center'>
          <h3 className='complexity px-3 py-1 rounded-md '>{data.category}</h3>
          <h4>{data.date}</h4>
        </div>
        <h2 className='mt-5 text-2xl font-semibold'>{data.title}</h2>
        <p className='text-sm mt-2 '>{data.description}</p>
        <div className='mt-2'>
          <button className='btn w-full bg-[#C50010] py-1 px-2 rounded-md'>Failed</button>
        </div>
      </div>
  )
}


export default FailedTask