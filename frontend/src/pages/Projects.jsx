import { Sidebar } from 'lucide-react'
import React from 'react'
import {authStore} from '@/stores/auth.store.js'

const Projects = () => {
    const user = authStore((state) => state.user);
    const projects = user.projects || [];

return (
    <div>
        <Sidebar/>
        <div className='flex-1 p-8'>
            <h1 className='text-2xl font-bold'>Projects</h1>
            <div className='mt-4'>
                {projects.length > 0 ? (
                    projects.map((project, index) => (
                        <div key={index} className='mb-4'>
                            <p><span className='font-bold'>Project Name:</span> {project.name}</p>
                            <p><span className='font-bold'>Description:</span> {project.description}</p>
                        </div>
                    ))
                ) : (
                    <p>No projects available</p>
                )}
            </div>
        </div>
    </div>
)
}

export default Projects
