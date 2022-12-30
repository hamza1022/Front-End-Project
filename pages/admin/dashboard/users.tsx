import React from 'react'
import { useSelector } from 'react-redux'
import Sidebar from '../../../Components/sidebar'
import { RootState } from '../../../Store/Store'

const Users = () => {
  const allUsers = useSelector((state:RootState)=>state.Users.usersList)

  interface userObject {
    firstName : string,
    lastName : string,
    userName : string ,
    email : string ,
    phoneNumber : string,
  }
  


  return (
      <div className='w-full h-screen flex'>
        <Sidebar/>
        <div className='w-full'>
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-sky-500 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                
                <th scope="col" className="py-3 px-6">
                    First Name
                </th>
                <th scope="col" className="py-3 px-6">
                    Last Name
                </th>
                <th scope="col" className="py-3 px-6">
                    User Name
                </th>
                <th scope="col" className="py-3 px-6">
                    Email
                </th>
                <th scope="col" className="py-3 px-6">
                    Phone Number
                </th>
               
            </tr>
        </thead>
        <tbody>
            {
                allUsers.map((user:userObject)=>{

                    return (

                        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                        <td className="py-4 px-6 font-semibold text-gray-900 dark:text-white">
                            {user.firstName}
                        </td>
                        <td className="py-4 px-6 font-semibold text-gray-900 dark:text-white">
                            {user.lastName}
                        </td>
                        
                        <td className="py-4 px-6 font-semibold text-gray-900 dark:text-white">
                            {user.userName}
                        </td>
                        <td className="py-4 px-6 font-semibold text-gray-900 dark:text-white">
                            {user.email}
                        </td>
                        <td className="py-4 px-6 font-semibold text-gray-900 dark:text-white">
                            {user.phoneNumber}
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

export default Users