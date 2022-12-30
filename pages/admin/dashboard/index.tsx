import React from 'react'
import { useSelector } from 'react-redux'
import Sidebar from '../../../Components/sidebar'
import { RootState } from '../../../Store/Store'

const AdminDashboard = () => {
  const totalOrders = useSelector((state:RootState)=>state.userCart.confirmOrders)
  const total = totalOrders.length

  const paidOrders = totalOrders.filter(order=>order.payment == "Stripe")
  console.log("paid", paidOrders)

  const allUsers = useSelector((state:RootState)=>state.Users.usersList)
  const totalUsers = allUsers.length

 



  return ( 
    <div className='w-full h-screen flex'>
        <Sidebar/>
        
        
<div className="flex flex-wrap mb-2">
    <div className="w-full mt-2 nmd:w-1/2 xl:w-1/3 pt-3 px-3 md:pr-2">
        <div className="bg-green-600 border rounded shadow p-[3rem]">
            <div className="flex flex-row items-center">
                <div className="flex-shrink pl-1 pr-4"><i className="fa fa-wallet fa-2x fa-fw fa-inverse"></i></div>
                <div className="flex-1 text-center">
                    <h5 className="text-white font-bold">Total Revenue</h5>
                    <h3 className="text-white text-3xl">
                    {
                     paidOrders.reduce((a,c)=>a + c.TotalAmount,0)

                     }&euro;
                        <span className="text-green-400"><i className="fas fa-caret-down"></i></span></h3>
                </div>
            </div>
        </div>
    </div>
    <div className="w-full mt-2  md:w-1/2 xl:w-1/3 pt-3 px-3 md:pl-2">
        <div className="bg-blue-600 border rounded shadow p-[3rem]">
            <div className="flex flex-row items-center">
                <div className="flex-shrink pl-1 pr-4"><i className="fas fa-users fa-2x fa-fw fa-inverse"></i></div>
                <div className="flex-1 text-center">
                    <h5 className="text-white font-bold">Total Users</h5>
                    <h3 className="text-white text-3xl">{totalUsers} <span className="text-blue-400"><i className="fas fa-caret-up"></i></span></h3>
                </div>
            </div>
        </div>
    </div>
    <div className="w-full mt-2 md:w-1/2 xl:w-1/3 pt-3 px-3 md:pr-2 xl:pr-3 xl:pl-1">
        <div className="bg-orange-600 border rounded shadow p-[3rem]">
            <div className="flex flex-row items-center">
                <div className="flex-shrink pl-1 pr-4"><i className="fas fa-user-plus fa-2x fa-fw fa-inverse"></i></div>
                <div className="flex-1 text-center pr-1">
                    <h5 className="text-white font-bold">Total Orders</h5>
                    <h3 className="text-white text-3xl">{total} <span className="text-orange-400"><i className="fas fa-caret-up"></i></span></h3>
                </div>
            </div>
        </div>
    </div>
    <div className="w-full md:w-1/2 xl:w-1/3 pt-3 px-3 md:pl-2 xl:pl-3 xl:pr-2">
        <div className="bg-purple-600 border rounded shadow p-[3rem]">
            <div className="flex flex-row items-center">
                <div className="flex-shrink pl-1 pr-4"><i className="fas fa-server fa-2x fa-fw fa-inverse"></i></div>
                <div className="flex-1 text-center">
                    <h5 className="text-white font-bold">Total Revenue </h5>
                    <h3 className="text-white text-3xl">
                     {
                     paidOrders.reduce((a,c)=>a + c.TotalAmount,0)

                     }
                      
                      </h3>
                </div>
            </div>
        </div>
    </div>
    <div className="w-full md:w-1/2 xl:w-1/3 pt-3 px-3 md:pr-2 xl:pl-2 xl:pr-3">
        <div className="bg-red-600 border rounded shadow p-[3rem]">
            <div className="flex flex-row items-center">
                <div className="flex-shrink pl-1 pr-4"><i className="fas fa-tasks fa-2x fa-fw fa-inverse"></i></div>
                <div className="flex-1 text-center">
                    <h5 className="text-white font-bold">To Do List</h5>
                    <h3 className="text-white text-3xl">7 tasks</h3>
                </div>
            </div>
        </div>
    </div>
    <div className="w-full md:w-1/2 xl:w-1/3 pt-3 px-3 md:pl-2 xl:pl-1">
        <div className="bg-pink-600 border rounded shadow p-[3rem]">
            <div className="flex flex-row items-center">
                <div className="flex-shrink pl-1 pr-4"><i className="fas fa-inbox fa-2x fa-fw fa-inverse"></i></div>
                <div className="flex-1 text-center">
                    <h5 className="text-white font-bold">Issues</h5>
                    <h3 className="text-white text-3xl">3 <span className="text-pink-400"><i className="fas fa-caret-up"></i></span></h3>
                </div>
            </div>
        </div>
    </div>
</div>
        

        
        </div>
  )
}

export default AdminDashboard