import React from 'react';

const TaskListNumbers=({data})=>{
  return(
    <div className='flex mt-10 screen justify-between gap-5'>
      <div className='px-10 py-5 rounded-xl w-[45%] bg-[#fb5607]'>
        <h2 className='text-3xl font-medium'>{data.taskNumber.newTask}</h2>
        <h3 className='text-xl font-semibold'>New Task</h3>
      </div>
      <div className='px-10 py-5 rounded-xl w-[45%] bg-[#3a86ff]'>
        <h2 className='text-3xl font-medium'>{data.taskNumber.active}</h2>
        <h3 className='text-xl font-semibold'>Active Task</h3>
      </div>
      <div className='px-10 py-5 rounded-xl w-[45%] bg-[#8338ec]'>
        <h2 className='text-3xl font-medium'>{data.taskNumber.completed}</h2>
        <h3 className='text-xl font-semibold'>Completed Task</h3>
      </div>
      <div className='px-10 py-5 rounded-xl w-[45%] bg-[#ff006e]'>
        <h2 className='text-3xl font-medium'>{data.taskNumber.failed}</h2>
        <h3 className='text-xl font-semibold'>Failed Task</h3>
      </div>
    </div>
  )
}

export default TaskListNumbers