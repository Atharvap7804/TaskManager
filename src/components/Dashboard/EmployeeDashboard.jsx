
import React from 'react';
import Header from '../others/header';
import TaskListNumbers from '../others/TaskListNumbers';
import TaskList from '../Tasklist/TaskList'


const EmployeeDashboard = ({ data, changeUser }) => {
  console.log(data);

  return (
    <div className='p-10 bg-[#1b263b] h-screen '>
      <Header changeUser={changeUser} data={data} />  
      <TaskListNumbers data={data}/>
      <TaskList data={data}/>
    </div>
  );
}

export default EmployeeDashboard;