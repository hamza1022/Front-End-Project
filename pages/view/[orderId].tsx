import Link from 'next/dist/client/link';
import { useRouter } from 'next/dist/client/router';
import React from 'react'
import { useSelector } from 'react-redux';
import Layout from '../../Components/layout'
import { RootState } from '../../Store/Store';
import Image from 'next/image';


const OrderHistory = () => {
    interface itemObject  {
        id : number,
        name : string ,
        slug : string,
        img : string,
        quantity : number,
        InStock : number ,
        price : number

    }

    const router = useRouter();
    const {orderId} = router.query
    const id = orderId?.toString();

   


    // const id = type orderId + ""

    const OrderId = id + "";
    console.log(typeof(OrderId))

    const Orders =  useSelector((state:RootState)=>state.userCart.confirmOrders)
    console.log(Orders)

    const viewOrder = Orders.find((a)=>a.orderID == OrderId)
    console.log(viewOrder)

    // if(viewOrder?.payment =="Stripe"){
    //     setPayment("PAID")
        
    // }else{
    //     setPayment("NOT PAID")

    // }

  return (
    <Layout title='Details'>
           <>
    
        <div className='grid md:grid-cols-4 md:gap-5'>
    
    <div className='overflow-x-auto md:col-span-3'>
            <h2 className='mb-2 text-lg font-bold'>1.Shipping Addreess </h2>
        <div className='card p-5'>
            <div>
                {viewOrder?.Address.fullName},{viewOrder?.Address.address},{""}
                {viewOrder?.Address.city},{viewOrder?.Address.postalCode},{""}
                {viewOrder?.Address.phoneNumber},{viewOrder?.Address.country}
    
            </div>
            <div className={viewOrder?.status == "Delivered" ? "text-green-500" : "text-red-500"}>{viewOrder?.status}</div>
    
    
        </div>
        <h2 className='mb-2 text-lg font-bold'>2.Payment Method</h2>
    
        <div className='card p-5'>
            
            <div>{viewOrder?.payment == "Stripe" ? "Stripe" : "CashOnDeleivery"}</div>
            {/* <div className={viewOrder?.payment == "Stripe" ? "Paid" : "Not Paid"}>{payment}</div> */}
    
        </div>
        <h2 className='mb-2 text-lg font-bold'>3.Cart Items</h2>
        <div className='card overflow-x-auto p-5'>
            
            <table className='min-w-full'>
                <thead className='bviewOrder-b'>
                    <tr>
                        <th className='px-[4rem] text-start mr-3'>Item</th>
                        <th className='px-[5rem] text-center'>Quantity</th>
                        <th className='px-[5rem] text-center'>Price</th>
                        <th className='px-[5rem]'>SubTotal</th>
                    </tr>
    
                </thead>
                <tbody>
                                                {viewOrder && viewOrder?.purchaseItems?.map((item:itemObject) => (
                                                    <tr key={item.id} className="bviewOrder-b">
                                                        <td>
                                                            <Link href='/' legacyBehavior>
                                                                <a className='flex items-center'>
    
                                                                    <Image
                                                                        src={item.img}
                                                                        alt={item.name}
                                                                        height={50}
    
                                                                        width={50} >
                                                                    </Image>
                                                                    &nbsp;
                                                                    {item.name}
    
    
                                                                </a>
                                                            </Link>
    
                                                        </td>
                                                        <td className='p-5 text-center'>{item.quantity}</td>
                                                        <td className='p-5 mr-[3rem] text-center'>${item.price}</td>
                                                        <td className='p-5 text-center'>${item.price*item.quantity}</td>
                                                    </tr>
                                                ))}
                                            </tbody>
                
            </table>
    
        </div>
    
    </div>
    <div className='card p-5'>
        <h2 className='mb-2 text-xl text-center font-bold'>Order Summary</h2>
        <ul>
            <li>
            <div className='mb-2 flex justify-between'>
            <div className='font-semibold'>Total Price</div>
            <div>
                ${viewOrder?.purchaseItems.reduce((a, c) => a + c.quantity * c.price, 0)}
                </div>
    
            </div>
    
            </li>
            <li>
            <div className='mb-2 flex justify-between'>
            <div  className='font-semibold'>Amount Paid</div>
            <div>${viewOrder?.payment == "Stripe" ? viewOrder?.purchaseItems.reduce((a, c) => a + c.quantity * c.price, 0) : 0 }</div>
    
            </div>
    
            </li>
            <li>
            <div className='mb-2 flex justify-between'>
            <div  className='font-semibold'>Balance</div>
            <div>${viewOrder?.payment == "Payment was paid on Deleivery" ? viewOrder?.purchaseItems.reduce((a, c) => a + c.quantity * c.price, 0) : 0 }</div>
    
            </div>
    
            </li>
            <li>
           
    
            </li>
            
          {/* {
            viewOrder?.paymentMethod === "CashOnDeleivery" ? 
            <button className='primary-button w-full mt-3' onClick={()=>confirmOrder()}>
                    Confirm Order Now
                </button> 
                :
                <button className='primary-button w-full mt-3 cursor-pointer'  disabled={loading} onClick={createCheckoutSession}>
                   Pay Now
                </button> 
    
                // <button
                //                                 disabled={loading}
                //                                 onClick={checkOutSession}
                //                                 className='primary-button w-full'>
                                              
    
                //                             </button>
    
    
          } */}
              
           
           
        </ul>
    </div>
    
    
    </div>
    </> 

    </Layout>
  )
}

export default OrderHistory