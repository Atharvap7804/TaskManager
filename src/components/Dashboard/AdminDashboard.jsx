import React from 'react';
import Header from '../others/header';
import CreateTask from '../others/CreateTask';
import AllTask from '../others/AllTask'
const AdminDashboard = (props) => {
  return (
    <div className='h-screen w-screen p-10 bg-[#030710]'>
      <Header changeUser={props.changeUser} />
      <CreateTask />
      <AllTask/>
    </div>
  )
}

export default AdminDashboard