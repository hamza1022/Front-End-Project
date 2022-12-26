import React, { useEffect, useState } from 'react'
import { AiFillCheckCircle } from 'react-icons/ai'
import Layout from '../../Components/layout'
import { useRouter } from 'next/dist/client/router'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../Store/Store'
import { saveConfirmOrders } from '../../Store/CartSlice'

const Success = () => {
    const router = useRouter();
    const dispatch = useDispatch();
    console.log("query" , router.query)

    const {orderid} = router.query;

    console.log("id",orderid)


    
    // const [myorders, setMyorders] = useState('')

    const items = useSelector((state:RootState)=>state.userCart.cartItems)
    const shippingAddress = useSelector((state:RootState)=>state.userCart.Address)
    const user = useSelector((state :RootState)=> state.userCart.UserInfo)
    const userName = user.userName;
    const Orders = useSelector((state:RootState)=>state.userCart.orderDetails)
   
     useEffect(() => {
        const myorders   = Orders.find((a)=>a.orderId == orderid)
        console.log("myorders" , myorders);

        if(myorders){
            
            dispatch(saveConfirmOrders({purchaseItems: [...items], status :"Delivered", payment:myorders.paymentMethod , Address : shippingAddress, user :userName, orderID:orderid, Total:myorders.totalPrice }))
        }
        

        
     },[orderid])
     

    // const myorders   = Orders.find((a)=>a.orderId == Orderid)
    // console.log(myorders);

    // if(myorders?.paymentMethod === "CashOnDeleivery"){
    //     setPayment("Payment was paid on Deleivery")
    // }else {
    //     setPayment("Not Paid")
    // }


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
                    <button onClick={()=> {router.push('/orderhistory')}} className='primary-button mt-8 w-[20%] items-center ml-[22rem]'>Go to my Orders</button>

                </div>

            </main>

        </div>

      

       
    </Layout>
  )
}

export default Success