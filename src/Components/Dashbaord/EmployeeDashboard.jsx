import React from 'react'
import Header from '../Others/Header'
import TaskListNumbet from '../Others/TaskListNumbet'
import TaskList from '../TaskList/TaskList'
export default function EmployeeDashboard({ data }) {
  console.log(data)
  return (
    <div>
      <div className='p-10 bg-[#1C1C1C] h-screen'>
        <Header data={data} />
        <TaskListNumbet  data={data} />
        <TaskList  data={data} />
      </div>
    </div>
  )
}
