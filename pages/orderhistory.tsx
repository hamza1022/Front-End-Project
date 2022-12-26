import React from 'react'
import { useSelector } from 'react-redux'
import Layout from '../Components/layout'
import { RootState } from '../Store/Store'
import Link from 'next/link'


const orderHistorty = () => {
  const order = useSelector((state: RootState) => state.userCart.confirmOrders)
  console.log("confirm order", order)

  const user = useSelector((state: RootState) => state.userCart.UserInfo)
  console.log(user.userName)

  const userOrder = order.filter((a) => a.user == user.userName)
  console.log("userOrder", userOrder)


  // if(order.user === user.userName){
  //   console.log(true)
  // }
  // else {
  //   console.log(false)
  // }


  return (
    <Layout title='history'>
      <>

        {



          (
            userOrder[0]?.user == "" ?
              <div className='text-xl font-bold mt-10'>

                <Link href='/' className='text-red-800  flex items-center'>Please Sign In to buy Products </Link>
              </div> :

              userOrder?.length == 0 ?
                <div className='text-xl font-bold mt-10'>

                  <Link href='/' className='text-red-800  flex items-center'>You have no Order hisory Go and Buy some Prodcuts</Link>
                </div>


                :
                <div className="flex flex-col">
                  <div className="overflow-x-auto lg:mx-0.5 ">
                    <div className="py-2 inline-block min-w-full lg:px-6">
                      <div className="overflow-hidden">
                        <table className="min-w-full">
                          <thead className="bg-sky-400 border-b">
                            <tr>
                              <th scope="col" className="text-lg font-medium text-white px-6 py-4 text-left">
                                #id
                              </th>
                              <th scope="col" className="text-lg font-medium text-white px-6 py-4 text-left">
                                Total
                              </th>
                              <th scope="col" className="text-lg font-medium text-white px-6 py-4 text-left">
                                Payment
                              </th>
                              <th scope="col" className="text-lg font-medium text-white px-6 py-4 text-left">
                                Status
                              </th>
                              <th scope="col" className="text-lg font-medium text-white px-6 py-4 text-left">
                                Details
                              </th>
                            </tr>
                          </thead>
                          <tbody>
                            {userOrder.map((item) => {
                              return (

                                <tr className="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100">
                                  <td className="px-6 py-4 whitespace-nowrap text-lg font-medium text-gray-900">{item.orderID}</td>
                                  <td className="text-lg text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                    ${item.Total}
                                  </td>
                                  <td className={`${item.payment == "Stripe"? "text-white bg-green-500 px-6 py-4 whitespace-nowrap " : "text-white bg-red-500 px-6 py-4 whitespace-nowrap"}`}>
                                    {item.payment == "Stripe" ? "Paid"  : "Not Paid"}
                                  </td>
                                  <td className="text-lg text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                    {item.status}
                                  </td>
                                  <td className="text-lg text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                    <Link href={`/view/${item.orderID}`} className='hover:text-sky-400 text-lg'>view
                                    </Link>
                                  </td>

                                </tr>



                              )



                            })}






                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>

          )
        }
      </>
    </Layout>
  )
}

export default orderHistorty