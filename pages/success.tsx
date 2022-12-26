import React from 'react'
import { AiFillCheckCircle } from 'react-icons/ai'
import Layout from '../Components/layout'
import Link from 'next/link'



const Success = () => {



  return (
    <Layout title="success">


    <div className=' h-screen'>
        <main className='max-w-screen-lg mx-auto'>
            <div className='flex flex-col p-10 bg-white'>
                <div className='flex items-center space-x-2 mb-5'>

        <AiFillCheckCircle className='text-green-500 h-[5rem]'/>
        <h1 className='text-3xl'> Thank You! Your Order has been confirmed</h1>
                </div>
                <p>Thank you for shooping with us Thank You for Choosing Our Product. We Appreciate Your Trust If you would like to check the status of your order please click the link below</p>
                <Link href='/orderhistory'>
                <button className='primary-button mt-8 w-[20%] items-center ml-[22rem]'>Go to my Orders</button>

                </Link>
            </div>

        </main>

    </div>

  

   
</Layout>
  )
}

export default Success