
import React from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../../../Store/Store'
import Sidebar from '../../../Components/sidebar'
import {FcCheckmark} from 'react-icons/fc'
import {ImCross} from 'react-icons/im'
import {BsCheckLg} from 'react-icons/bs'


const orders = () => {
  
    const allOrders = useSelector((state:RootState)=>state.userCart.confirmOrders)

  return (
    <div className='w-full h-screen flex'>
    <Sidebar/>
    <div className='w-full'>
    <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
    <thead className="text-gray-700 uppercase bg-sky-500 dark:bg-gray-700 dark:text-gray-400">
        <tr>
            
            <th scope="col" className="py-3 px-6">
                #Order Id
            </th>
            <th scope="col" className="py-3 px-6">
                Buyer Name
            </th>
            <th scope="col" className="py-3 px-6">
                City
            </th>
            <th scope="col" className="py-3 px-6">
                Phone Number
            </th>
            <th scope="col" className="py-3 px-6">
                Country
            </th>
            <th scope="col" className="py-3 px-6">
                Payment
            </th>
           
        </tr>
    </thead>
    <tbody>
        {
            allOrders.map((order)=>{

                return (

                    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                    <td className="py-4 px-6 font-semibold text-gray-900 dark:text-white">
                        {order.orderID}
                    </td>
                    <td className="py-4 px-6 font-semibold text-gray-900 dark:text-white">
                        {order.user}
                    </td>
                    
                    <td className="py-4 px-6 font-semibold text-gray-900 dark:text-white">
                        {order.Address.city}
                    </td>
                    <td className="py-4 px-6 font-semibold text-gray-900 dark:text-white">
                        {order.Address.phoneNumber}
                    </td>
                    <td className="py-4 px-6 font-semibold text-gray-900 dark:text-white">
                        {order.Address.country}
                    </td>
                    <td className="py-4 px-6 font-semibold text-gray-900 dark:text-white">
                        {
                        order.payment =="Stripe" ? 
                        <BsCheckLg className='h-5 w-5 fill-green-500'> </BsCheckLg>
                        : 
                        <ImCross className='h-5 w-5 fill-red-500'></ImCross>
                        }
                    </td>
                    

                    
                    
                   
                   
                   
                </tr>
                


                )
              

            })


        }
       
        
    </tbody>
</table>






    </div>
    
    </div>
  )
}

export default orders