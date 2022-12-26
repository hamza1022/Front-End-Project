import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import Layout from '../../Components/layout'
import { useSelector } from 'react-redux'
import Link from 'next/link'
import Image from 'next/image'
import { loadStripe } from '@stripe/stripe-js';
import { fetchPostJSON } from '../../utils/api-helpers'
import Stripe from 'stripe';
import getStripe from '../../utils/get-stripejs'
import { useDispatch } from 'react-redux'
import { saveConfirmOrders } from '../../Store/CartSlice'
import { RootState } from '../../Store/Store'


// const  stripePromise = loadStripe(process.env.stripe_public_key);


const OrderScreen = () => {

    interface itemObject  {
        id : number,
        name : string ,
        slug : string,
        img : string,
        quantity : number,
        InStock : number ,
        price : number

    }

    const dispatch = useDispatch()

    const router = useRouter();

    const {id} = router.query;
    console.log(router.query)

    // const b = parseInt(id)
    // console.log(typeof b)

    const [myorders, setMyorders] = useState('')
    const [status, setStatus] = useState("Not Deleivered")
    const [payment, setPayment] = useState("Payment was Required")
    const [loading, setLoading ] =useState(false)

 // ****** Fetch Id from the URL ************** 

    const Orders = useSelector((state:RootState)=>state.userCart.orderDetails)
    console.log('orders',Orders);

    const shippingAddress = useSelector((state:RootState)=>state.userCart.Address)
    

    const items = useSelector((state :RootState)=> state.userCart.cartItems)
   

    const user = useSelector((state :RootState)=> state.userCart.UserInfo)
    const userName = user.userName
    console.log("username", userName)

 useEffect(() => {
    console.log(id);
    const myorders   = Orders.find((a)=>a.orderId == id)
    console.log(myorders);
    if(myorders?.paymentMethod === "CashOnDeleivery"){
        setPayment("Payment was paid on Deleivery")
    }else {
        setPayment("Not Paid")
    }
    setMyorders(myorders)
 },[id])

 
  console.log('myorders',myorders);
  const orderid  = myorders.orderId
  console.log(orderid)



  const confirmOrder =()=>{

    dispatch(saveConfirmOrders({purchaseItems: [...items], status :"Delivered", payment:payment , Address : shippingAddress, user :userName, orderID: orderid, Total:myorders.totalPrice }))
        router.push('/success')
    
  }

  const createCheckoutSession = async ()=>{
    console.log(myorders)
    setLoading(true)
    const stripe = await getStripe;
    const response = await fetch("/api/checkout", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(myorders)
    });
    console.log(response)


    // if(response.status === 200){
    //     dispatch(saveConfirmOrders({purchaseItems: [...items], status :"Delivered", payment:"Paid" ,Address : shippingAddress  , user :userName, orderID:myorders.orderId, Total:myorders.totalPrice }))
    //     router.push('/success')
        
    // }

    if (response.status === 500) return;

    const data = await response.json()
    console.log("data", data)
    router.push(data.url)
    alert("messgae")
    console.log("hello")

    // if(data.url == "http://localhost:3000/success"){
    //     dispatch(saveConfirmOrders({purchaseItems: [...items], status :"Delivered", payment:"Paid" ,Address : shippingAddress  , user :userName, orderID:myorders.orderId, Total:myorders.totalPrice }))
    // }
    
  
    }
 
  return (
    <div>
    <Layout title='myorders'>
        <>
        
      
    <h2 className='mb-2 text-lg font-bold'>Order # {id} </h2>

    <div className='grid md:grid-cols-4 md:gap-5'>

<div className='overflow-x-auto md:col-span-3'>
    <div className='card p-5'>
        <h2 className='mb-2 text-lg font-bold'>1.Shipping Addreess </h2>
        <div>
            {myorders?.fullName},{myorders?.address},{""}
            {myorders?.city},{myorders?.postalCode},{""}
            {myorders?.phoneNumber},{myorders?.country}

        </div>
        <div className={status == "Delivered" ? "text-green-500" : "text-red-500"}>{status}</div>


    </div>
    <h2 className='mb-2 text-lg font-bold'>2.Payment Method</h2>

    <div className='card p-5'>
        
        <div>{myorders?.paymentMethod}</div>
        <div className='text-red-500 status'>{payment}</div>

    </div>
    <h2 className='mb-2 text-lg font-bold'>3.Cart Items</h2>
    <div className='card overflow-x-auto p-5'>
        
        <table className='min-w-full'>
            <thead className='bmyorders-b'>
                <tr>
                    <th className='px-[4rem] text-start mr-3'>Item</th>
                    <th className='px-[5rem] text-center'>Quantity</th>
                    <th className='px-[5rem] text-center'>Price</th>
                    <th className='px-[5rem]'>SubTotal</th>
                </tr>

            </thead>
            <tbody>
                                            {myorders && myorders?.orderItems?.map((item:itemObject) => (
                                                <tr key={item.id} className="bmyorders-b">
                                                    <td>
                                                        <Link href={`/products/${item.slug}`} legacyBehavior>
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
        <div className='font-semibold'>Items</div>
        <div>${myorders?.itemPrice}</div>

        </div>

        </li>
        <li>
        <div className='mb-2 flex justify-between'>
        <div  className='font-semibold'>Tax</div>
        <div>${myorders?.taxPrice}</div>

        </div>

        </li>
        <li>
        <div className='mb-2 flex justify-between'>
        <div  className='font-semibold'>Shipping Price</div>
        <div>${myorders?.shippingPrice}</div>

        </div>

        </li>
        <li>
        <div className='mb-2 flex justify-between'>
        <div  className='font-semibold'>Total Price</div>
        <div>${myorders?.totalPrice}</div>

        </div>

        </li>
        
      {
        myorders?.paymentMethod === "CashOnDeleivery" ? 
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


      }
          
       
       
    </ul>
</div>


</div>
</>    

    </Layout>
    </div>
  )
}

export default OrderScreen