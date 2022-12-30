import React from 'react'
import Link from 'next/link'


const Unauthorized = () => {
  return (
    <div>
        <div className='text-lg font-bold items-center p-2 mt-5 px-4 py-9'>
            <h1>You are not an Admin you are not Authorized for this Action</h1>
            <Link href='/' className='primary-button'> Home</Link>

        </div>
     
        </div>
  )
}

export default Unauthorized