import React, { useState, useEffect } from 'react';

const NewTask = ({ data }) => {
  // Helper to create a unique key for a task
  const getTaskKey = (task) => `${task.title}|${task.date}|${task.category}`;

  // Load status from localStorage if exists
  const [status, setStatus] = useState('new');

  useEffect(() => {
    const tasks = JSON.parse(localStorage.getItem('tasks') || '[]');
    const key = getTaskKey(data);
    const found = tasks.find((t) => getTaskKey(t) === key);
    if (found && found.status) {
      setStatus(found.status);
    }
    // Log current tasks and active count on mount
    console.log('Loaded tasks from localStorage:', tasks);
    console.log('Loaded activeTaskCount from localStorage:', localStorage.getItem('activeTaskCount'));
  }, [data]);

  // Helper to update task and active count in localStorage
  const updateTaskStatus = (newStatus) => {
    let tasks = JSON.parse(localStorage.getItem('tasks') || '[]');
    const key = getTaskKey(data);
    const idx = tasks.findIndex((t) => getTaskKey(t) === key);
    // Set flags based on status
    let statusFlags = {
      active: false,
      completed: false,
      failed: false
    };
    if (newStatus === 'active') {
      statusFlags.active = true;
    } else if (newStatus === 'completed') {
      statusFlags.completed = true;
    } else if (newStatus === 'failed') {
      statusFlags.failed = true;
    }
    if (idx !== -1) {
      tasks[idx].status = newStatus;
      tasks[idx].active = statusFlags.active;
      tasks[idx].completed = statusFlags.completed;
      tasks[idx].failed = statusFlags.failed;
      // Set newTask to false if accepted or after any status change
      if (newStatus !== 'new') {
        tasks[idx].newTask = false;
      }
    } else {
      tasks.push({
        ...data,
        status: newStatus,
        active: statusFlags.active,
        completed: statusFlags.completed,
        failed: statusFlags.failed,
        newTask: newStatus === 'new'
      });
    }
    localStorage.setItem('tasks', JSON.stringify(tasks));
    // Update active count
    const activeCount = tasks.filter((t) => t.status === 'active').length;
    localStorage.setItem('activeTaskCount', activeCount);
    // Log changes after update
    console.log('Updated tasks in localStorage:', tasks);
    console.log('Updated activeTaskCount in localStorage:', activeCount);
  };

  const handleAccept = () => {
    setStatus('active');
    updateTaskStatus('active');
  };
  const handleComplete = () => {
    setStatus('completed');
    updateTaskStatus('completed');
  };
  const handleFail = () => {
    setStatus('failed');
    updateTaskStatus('failed');
  };

  return (
    <div className='div flex-shrink-0 h-full w-[300px] bg-[#FB5607] rounded-xl p-5'>
        <div className='flex justify-between items-center'>
          <h3 className='complexity px-3 py-1 rounded-md '>{data.category}</h3>
          <h4>{data.date}</h4>
        </div>
        <h2 className='mt-5 text-2xl font-semibold'>{data.title}</h2>
        <p className='text-sm mt-2 '>{data.description}</p>
        <div className='mt-4'>
          {status === 'new' && (
            <button className='btn bg-[#c43e00] py-1 px-2 rounded-md' onClick={handleAccept}>Accept Task</button>
          )}
          <div className='flex text-sm justify-between'>
            {status === 'active' && (
              <>
                <button className='btn bg-[#005eed] py-1 px-2 rounded-md' onClick={handleComplete}>Mark as completed</button>
                <button className='btn bg-red-700 py-1 px-2 rounded-md' onClick={handleFail}>Mark as failed</button>
              </>
            )}
          </div>
          {status === 'completed' && <h4 className='text-green-600 bg-[#C50010] text-center px-2 py-1 rounded-md'>Completed</h4>}
          {status === 'failed' && <h4 className='text-red-600'>Failed</h4>}
        </div>
      </div>
  )
}

export default NewTask