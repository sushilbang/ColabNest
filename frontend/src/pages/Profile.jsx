import { Sidebar } from 'lucide-react'
import React from 'react'
import {authStore} from '@/stores/auth.store.js'


const Profile = () => {
    const user = authStore((state) => state.user);
  return (
    <div className='flex'>
      <Sidebar/>
        <div className='flex-1 p-8'>
            <h1 className='text-2xl font-bold'>Profile</h1>
            <div className='mt-4'>
            <p><span className='font-bold'>Username:</span> {user.username}</p>
            <p><span className='font-bold'>Email:</span> {user.email}</p>
            </div>
        </div>
    </div>
  )
}

export default Profile
