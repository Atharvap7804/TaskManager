import React from 'react';

const AcceptTask=({data})=>{
  console.log()
  return(
    <div className='div flex-col flex-shrink-0 h-full w-[300px] bg-[#3A86FF] rounded-xl p-5'>
        <div className='flex justify-between items-center'>
          <h3 className='complexity px-3 py-1 rounded-md '>{data.category}</h3>
          <h4>{data.date}</h4>
        </div>
        <h2 className='mt-5 text-2xl font-semibold'>{data.title}</h2>
        <p className='text-sm mt-2 '>{data.description}</p>
        <div className='flex justify-between mt-4'>
          <button className='btn bg-[#005eed] py-1 px-2 text-sm rounded-md'>Mark as completed</button>
          <button className='btn bg-red-700 py-1 px-2 text-sm rounded-md'> Mark as failed</button>
        </div>
      </div>
  )
}


export default AcceptTask