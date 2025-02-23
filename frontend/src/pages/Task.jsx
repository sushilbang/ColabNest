import { Sidebar } from 'lucide-react'
import React from 'react'
import {authStore} from '@/stores/auth.store.js'

const Task = () => {
    const user = authStore((state) => state.user);
    const tasks = user.tasks || [];
  return (
    <div>
      <Sidebar/>
        <div className='flex-1 p-8'>
            <h1 className='text-2xl font-bold'>Tasks</h1>
            <div className='mt-4'>
                {tasks.length > 0 ? (
                    tasks.map((t, index) => (
                        <div key={index} className='mb-4'>
                            <p><span className='font-bold'>Project Name:</span> {t.project.title}</p>
                            <p><span className='font-bold'>Description:</span> {t.task}</p>
                            <p><span className='font-bold'>Deadline:</span> {t.deadline}</p>
                        </div>
                    ))
                ) : (
                    <p>No tasks available</p>
                )}
            </div>
        </div>
    </div>
  )
}

export default Task
