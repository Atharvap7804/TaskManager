import React from 'react';

const CompleteTask=({data})=>{
  return(
    <div className='div flex-shrink-0 h-full w-[300px] bg-[#8338EC] rounded-xl p-5'>
        <div className='flex justify-between items-center'>
          <h3 className='complexity px-3 py-1 rounded-md '>{data.category}</h3>
          <h4>{data.date}</h4>
        </div>
        <h2 className='mt-5 text-2xl font-semibold'>{data.title}</h2>
        <p className='text-sm mt-2 '>{data.description}</p>
        <div className='mt-2'>
          <button className='btn w-full bg-[#5003bc] py-1 px-2 rounded-md'>Completed</button>
        </div>
      </div>
  )
}


export default CompleteTask