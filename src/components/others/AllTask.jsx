import React, { useContext } from 'react';
import { AuthContext } from '../../context/AuthProvider';

const AllTask=()=>{
  const [userData,setUserData]=useContext(AuthContext);
  
  return(
    <div className='alltasks border-2 rounded p-5 mt-5'>
      <div className='bg-[#030710] border-2 mb-2 py-2 px-4 flex justify-between rounded'>
        <h2 className='w-1/5 '>Employee Name</h2>
        <h3 className='w-1/5 ' >New Task</h3>
        <h5 className='w-1/5 '>Active Task</h5>
        <h5 className='w-1/5 '>Completed</h5>
        <h5 className='w-1/5 '>Failed</h5>
      </div>
      <div className='border-2'>
        {userData.map((elem,idx)=>{
        return  <div key={idx} className='bg-[#030730] mb-2 py-2 px-4 flex justify-between rounded'>
        <h2 className='w-1/5 '>{elem.name}</h2>
        <h3 className='w-1/5 text-[#FB5607]' >{elem.taskNumber.newTask}</h3>
        <h5 className='w-1/5 text-indigo-600'>{elem.taskNumber.active}</h5>
        <h5 className='w-1/5 text-green-600'>{elem.taskNumber.completed}</h5>
        <h5 className='w-1/5 text-red-800'>{elem.taskNumber.failed}</h5>
      </div>
      })}
      </div>
    </div>
  )
}

export default AllTask