
import React from 'react'
import Layout from './layout'
import { useSelector } from 'react-redux'
import Link from 'next/link'
import { GiCancel } from 'react-icons/gi'
import { useDispatch } from 'react-redux'
import { removetocart } from '../Store/CartSlice'
import { parseCookies } from 'nookies'
import { RootState } from '../Store/Store'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Image from 'next/image'





const CartScreen = () => {

    interface itemObject  {
        id : number,
        name : string ,
        slug : string,
        img : string,
        quantity : number,
        InStock : number ,
        price : number

    }
    const {token } = parseCookies();
    console.log(token)
    let user = false;
    if(token){
        user= true
    }else {
        user= false
    }
    console.log(token);

   const items:Array<itemObject> = useSelector((state :RootState ) => state.userCart.cartItems)

   console.log(items)

   const dispatch = useDispatch();

//   ******** Remove item from the cart ******* 

    const removeItem = (item : itemObject) => {
        toast.error(`${item.name} was Removed `, {
            position: "top-center",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
            });

        console.log(item)

        dispatch(removetocart(item))
    }
   


    return (
        <div className='text-center'>
            <Layout title="Shopping Cart">
                <>
                
               
                <h1 className='mb-8 text-xl font-bold'>Shopping Cart</h1>
                {
                    items.length === 0 ?
                        <div className='text-xl font-bold mt-10'>

                            <Link href='/' className='text-red-800'>Your Cart is currently empty</Link>
                        </div> :
                        (
                            <div className='grid md:grid-cols-4 md:gap-5 mt-4'>
                                <div className='overflow-x-auto md:col-span-3'>
                                    <table className='min-w-ful '>
                                        <thead className='border-b'>
                                            <tr>
                                                <th className='px-[4rem] text-start mr-3'>Item</th>
                                                <th className='px-[5rem] text-center'>Quantity</th>
                                                <th className='px-[5rem] text-left' >Price</th>

                                                <th className='px-[5rem]'>Action</th>
                                            </tr>

                                        </thead>
                                        <tbody>
                                            {items.map((item : itemObject ) => {
                                                return (
                                                    <tr key={item.id} className='border-b'>
                                                        <td>
                                                            <Link href={`/products/${item.slug}`} legacyBehavior>
                                                                <a className='flex items-center'>

                                                                    <Image
                                                                        src={item.img}
                                                                        alt={item.name}
                                                                        height={50}

                                                                        width={50} 
                                                                    />
                                                                    &nbsp;
                                                                    {item.name}


                                                                </a>
                                                            </Link>

                                                        </td>



                                                        <td className='p-5 text-center'>{item.quantity > item.InStock ? item.InStock : item.quantity} </td>
                                                        <td className='p-5 text-center'>{item.price * item.quantity}</td>
                                                        <td>
                                                         <button className='primary-button' onClick={() => removeItem(item)}>
                                                        <GiCancel className='h-5 w-5'></GiCancel>
                                                        </button>
                                                        </td>
                                                    </tr>
                                                )

                                            })}
                                        </tbody>

                                    </table>

                                </div>
                                
                                <div className="card p-5 float-left">
                                    <h1 className='text-xl font-bold mb-6 text-center'> Order Summary</h1>

                                    <div className='mb-2 flex justify-between'>
                                        <div className=''>Total Items :</div>
                                        <div className='mr-9'>

                                            {items.reduce((a, c) => a + c.quantity , 0)}

                                        </div>


                                    </div>
                                    <div className='mb-[50px] flex justify-between'>
                                        <div>Total Amount:</div>
                                        <div className='mr-6'>
                                            {items.reduce((a, c) => a + c.quantity * c.price, 0)}
                                        </div>
                                    </div>

                                    {
                                        user ? 
                                        <Link href='/shipping'>
                                        <div>
                                            <button className='primary-button w-full'>CheckOut</button>
                                        </div>
                                    </Link> 
                                    :
                                    <Link href='/login'>
                                        <div>
                                            <button className='primary-button w-full'>CheckOut</button>
                                        </div>
                                    </Link>
                                    }

                                    
                                   
                                    <div className='mt-2'>

                                  
                                    <Link href ='/'>
                                         <button className='primary-button w-full' type='button'>
                                            Continue Shooping
                        
                                              </button>
                                                </Link>
                                                </div>
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


export default CartScreen