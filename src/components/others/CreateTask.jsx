import React, { useContext, useState } from 'react';
import { AuthContext } from '../../context/AuthProvider';

const CreateTask=()=>{
  const [userData,setUserData]=useContext(AuthContext);

  const[title,setTaskTitle]=useState('')
  const[description,setTaskDescription]=useState('')
  const[date,setTaskDate]=useState('')
  const[taskAssignTo,setAssignTo]=useState('')
  const[category,setTaskCategory]=useState('')
  
 const deleteTask = (employeeName, taskIndex) => {
  const data = [...userData]; // make a copy
  data.forEach((employee) => {
    if (employee.name === employeeName) {
      // Remove the task at the given index
      employee.tasks.splice(taskIndex, 1);
      // Optionally, update taskNumber counts here
    }
  });
  setUserData(data);
  localStorage.setItem('employees', JSON.stringify(data));
};
  const submitHandler = (e) => {
    e.preventDefault();
    const newTask = {
      title,
      description,
      date,
      category,
      active: false,
      newTask: true,
      completed: false,
      failed: false
    };
    // Deep copy userData to avoid mutating state directly
    const data = JSON.parse(JSON.stringify(userData));
    data.forEach((element) => {
      if (taskAssignTo === element.name) {
        element.tasks.push(newTask);
        element.taskNumber.newTask = element.taskNumber.newTask + 1;
      }
      if (element.name === 'Sneha Patel' && element.tasks.length > 3) {
        element.tasks.splice(3, 1); // Remove the 4th task
      }
    });
    setUserData(data);
    localStorage.setItem('employees', JSON.stringify(data));
    console.log(data);

    setAssignTo('');
    setTaskCategory('');
    setTaskDate('');
    setTaskDescription('');
   
} 
  
  return(
    <div className='p-5 border-2  mt-7 rounded'>
        <form 
        onSubmit={(e)=>{
          submitHandler(e)
        }}
        action="" className='flex flex-wrap w-full items-start justify-between'>
          <div className='w-1/2'>
            <div>
              <h3 className='text-sm text-gray-300 mb-2'>Task Title</h3>
              <input
              value={title}
              onChange={(e)=>{
                setTaskTitle(e.target.value)
              }}
             
             className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-2  mb-2' type="text" placeholder='Enter a task' />
            </div>
            <div>
              <h3 className='text-sm text-gray-300 mb-2'>Date</h3>
              <input 
               value={date}
              onChange={(e)=>{
                setTaskDate(e.target.value)
              }}
              className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-2  mb-2' type="date" />
            </div>
            <div>
              <h3 className='text-sm text-gray-300 mb-2'>Assign to</h3>
              <input
               value={taskAssignTo}
              onChange={(e)=>{
                setAssignTo(e.target.value)
              }}
              className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-2  mb-2' type="text" placeholder='Employee Name' />
            </div>
            <div>
              <h3 className='text-sm text-gray-300 mb-2'>Category</h3>
              <input 
               value={category}
              onChange={(e)=>{
                setTaskCategory(e.target.value)
              }}
              
              className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-2  mb-2'  type="text" placeholder='design,dev, etc.' />
            </div>
          </div>

          <div className='w-2/5 flex-col items-start'>
            <h3 className='text-sm text-gray-300 mb-2'>Description</h3>
            <textarea 
             value={description}
              onChange={(e)=>{
                setTaskDescription(e.target.value)
              }}
            className='w-full h-44 text-sm py-2 px-4 rounded outline-none bg-transparent border-2 ' name="" placeholder='Description of task' ></textarea>
            <button className='bg-[#030730] py-3 hover:bg-[#030740] px-5 rounded text-sm mt-4 w-full'>Create Task</button>
          </div>

          
        </form>
      </div>
  )
}

export default CreateTask