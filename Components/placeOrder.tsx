import React, { useEffect, useState } from 'react'
import Layout from './layout'
import { useSelector } from 'react-redux'
import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { useDispatch } from 'react-redux'
import { saveOrderDetails } from '../Store/CartSlice'
import Routes from '../Routes'
import { RootState } from '../Store/Store'
import { toast, ToastContainer } from 'react-toastify'



const PlacedOrder = () => {

    const [loading, setLoading] = useState(false);


    const cartItems :Array<cartType> = useSelector((state :RootState) => state.userCart.cartItems)

    const totalQuantity = cartItems.length
    console.log("total" , totalQuantity)
       
    const shippingAddress:addressType  = useSelector((state :RootState) => state.userCart.Address)  
    const payment = useSelector((state :RootState) => state.userCart.paymentMethod)
    const user = useSelector((state :RootState)=> state.userCart.UserInfo)
    const userName = user.userName;
    console.log(userName)


    interface cartType {
        id : number,
        name : string ,
        slug : string,
        img : string,
        quantity : number,
        InStock : number ,
        price : number
    }

    interface addressType {
        fullName : string,
        address :string ,
        city :string ,
        postalCode : string ,
        phoneNumber : string ,
        country : string

    }


    // const orderDetails = useSelector((state)=>state.userCart.orderDetails)
    const router = useRouter();
    const dispatch = useDispatch();



    const round2 = (num : number)=>Math.round(num*100 + Number.EPSILON ) / 100 ;
    //123.4567 = 123.46
    const itemPrice = round2(cartItems.reduce((a,c)=>a + c.quantity * c.price, 0 ));
    const shippingPrice = itemPrice > 500 ? 15 : 0 ;
    const taxPrice = round2(itemPrice * 0.15);
    const totalPrice = round2(shippingPrice + taxPrice + itemPrice) ;
    const orderId = Date.now();



    useEffect(() => {
        if(!payment){
            router.push('/payment')
        }
      
    }, [payment])

   
     const placeOrderHandler = async()=>{
        try {
            setLoading(true)
            toast.success('🦄 Order is Placed Successfully!', {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                });
            dispatch(saveOrderDetails({...shippingAddress, orderId : orderId + "" ,  totalAmount:itemPrice, shippingPrice:shippingPrice , taxPrice:taxPrice , totalPrice:totalPrice,orderItems:cartItems, paymentMethod:payment, totalQuantity :totalQuantity }))
            setLoading(false)
            // dispatch(clearCart())
            router.push(`/orders/${orderId}`)
        } catch (error) {
            setLoading(false)
            console.log(error)
            
        }

     }
    
    return (
        <div>

        <Layout title="Place Order">
            <>
                <h1 className='mb-4 text-xl text-purple-900 font-bold '>1.Shipping Address</h1>

                {
                    cartItems.length === 0 ?
                        (
                            <div>
                                Cart is Empty , <Link href='/'>Go to Shopping</Link>
                            </div>
                        ) :
                        (
                            <div className='grid md:grid-cols-4 md:gap-5'>

                                <div className='overflow-x-auto md:col-span-3'>
                                    <div className='card p-5'>
                                    
                                        <div className='text-xl'>
                                            {shippingAddress.fullName },{shippingAddress.address},{""}
                                            {shippingAddress.city},{shippingAddress.postalCode},{""}
                                            {shippingAddress.phoneNumber},{shippingAddress.country}

                                        </div>
                                        <div className='text-purple-800 mt-2'>
                                            <Link href='/shipping'>Edit</Link>
                                        </div>


                                    </div>
                                    <h1 className='mb-4 text-xl text-purple-900 font-bold '>2.Payment Method</h1>

                                    <div className='card p-5'>
                                
                                        <div className='list-disc text-xl'>{payment}</div>
                                        <div className='text-purple-800 mt-2' >
                                            <Link href='/payment'>Edit</Link>
                                        </div>

                                    </div>
                                    <h1 className='mb-4 text-xl text-purple-900 font-bold '>3.Review Cart Items</h1>
                                    <div className='card overflow-x-auto p-5'>
                                    
                                        <table className='min-w-full'>
                                            <thead className='border-b'>
                                                <tr>
                                                    <th className='px-[4rem] text-start mr-3'>Item</th>
                                                    <th className='px-[5rem] text-center'>Quantity</th>
                                                    <th className='px-[5rem] text-center'>Price</th>
                                                    <th className='px-[5rem]'>SubTotal</th>
                                                </tr>

                                            </thead>
                                            <tbody>
                                                {cartItems.map((item : cartType) => (
                                                    <tr key={item.id} className="border-b">
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
                                            <div className='text-purple-800 mt-2'>
                                            <Link href='/cart'>Edit</Link>
                                        </div>
                                        </table>

                                    </div>

                                </div>
                                <div className='card p-5'>
                                    <h2 className='mb-2 text-xl text-center font-bold'>Order Summary</h2>
                                    <ul>
                                        <li>
                                        <div className='mb-2 flex justify-between'>
                                        <div className='font-semibold'>Items</div>
                                        <div>${itemPrice}</div>

                                        </div>

                                        </li>
                                        <li>
                                        <div className='mb-2 flex justify-between'>
                                        <div  className='font-semibold'>Tax</div>
                                        <div>${taxPrice}</div>

                                        </div>

                                        </li>
                                        <li>
                                        <div className='mb-2 flex justify-between'>
                                        <div  className='font-semibold'>shippingAddress Price</div>
                                        <div>${shippingPrice}</div>

                                        </div>

                                        </li>
                                        <li>
                                        <div className='mb-2 flex justify-between'>
                                        <div  className='font-semibold'>Total Price</div>
                                        <div>${totalPrice}</div>

                                        </div>

                                        </li>
                                        <li>
                                            <button
                                                disabled={loading}
                                                onClick={placeOrderHandler}
                                                className='primary-button w-full'>
                                                {loading ? 'Loading...' : 'Place Order'}

                                            </button>
                                        </li>
                                    </ul>
                                </div>

                            </div>



                        )

                }
                    <ToastContainer/>
            </>


        </Layout>
        </div>
    )
}

export default Routes(PlacedOrder)