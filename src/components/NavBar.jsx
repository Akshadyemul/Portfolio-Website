import React from 'react'

function NavBar() {
  return (
    <div className='flex items-center py-1.5 pb-5 justify-between'>
      <div>
        <h1 className='text-2xl font-semibold'>Akshad Yemul</h1>
      </div>
      <ul className='flex gap-6 p-3 cursor-pointer'>
        <li className='hover:text-purple-500'>Home</li>
        <li className='hover:text-purple-500'>Project</li>
        <li className='hover:text-purple-500'>Experience</li>
        <li className='hover:text-purple-500'>Skills</li>
        <li className='hover:text-purple-500'>Contact</li>
      </ul>
    </div>
  )
}

export default NavBar
