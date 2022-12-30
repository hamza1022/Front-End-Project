
import React from 'react'
import Layout from './layout'
import { SubmitHandler, useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'
import { saveShipping } from '../Store/CartSlice'
import { useRouter } from 'next/router'
import { useSelector } from 'react-redux'
import Link from 'next/link'
import { parseCookies } from 'nookies'
import Routes from '../Routes'
import { RootState } from '../Store/Store'
import { ToastContainer } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';


const Shipping = () => {
  interface dataType {
    fullName : string,
    address : string,
    city : string ,
    postalCode : string ,
    phoneNumber : string,
    country : string 
  }

const {token} =  parseCookies();
console.log(token);

const dispatch = useDispatch();
const router = useRouter();
const items = useSelector((state :RootState)=>state.userCart.cartItems)
console.log(items)

  const {register,handleSubmit,formState: { errors },} = useForm<dataType>();

  const ShippingForm : SubmitHandler<dataType>= (data : dataType) => {
    console.log(data)
    

    dispatch(saveShipping(data))
    router.push('/payment')

  }
  return (
    
      <Layout title="Shipping Address">
        <>
       

   <div className='flex justify-between items-center'>


<div className='ml-4'>
<form className=' w-[90rem] max-w-screen-md' onSubmit={handleSubmit(ShippingForm)} >
          <h1 className='mb-4 text-xl font-bold items-center ml-[19rem] py-2'>Address Details:</h1>
          <div className='mb-4'>
            <label htmlFor="fullName">Full Name</label>
            <input type="text" 
            autoComplete='on'
              {...register("fullName", {
                required: "Please Enter Your Full Name",
                maxLength: {
                  value: 15,
                        message: "must be max 15 chars",
                      },
              })}
              className='w-full bg-white' id="firstName" autoFocus />
            {errors.fullName && <div className='text-red-500'>{errors.fullName.message}</div>}

          </div>

          <div className='mb-4'>
            <label htmlFor="address">Address</label>
            <input type="text"
              {...register("address", {
                required: "Please Enter Your Address",
                maxLength: {
                  value: 15,
                        message: "must be max 15 chars",
                      },
              })}
              className='w-full bg-white' id="lastName" autoFocus />
            {errors.address && <div className='text-red-500'>{errors.address.message}</div>}

          </div>
          <div className='mb-4'>
            <label htmlFor="city">City</label>
            <input type="text"
              {...register("city", {
                required: "Please Enter Your City",
                maxLength: {
                  value: 15,
                        message: "must be max 15 chars",
                      },
              })}
              className='w-full bg-white' id="lastName" autoFocus />
            {errors.city && <div className='text-red-500'>{errors.city.message}</div>}

          </div>
          <div className='mb-4'>
            <label htmlFor="postalCode">Postal Code</label>
            <input type="text"
              {...register("postalCode", {
                required: "Please Enter Your Postal Code",
                maxLength: {
                  value: 15,
                        message: "must be max 15 chars",
                      },
              })}
              className='w-full bg-white' id="email" autoFocus />
            {errors.postalCode && <div className='text-red-500'>{errors.postalCode.message}</div>}

          </div>
          <div className='mb-4'>
            <label htmlFor="phoneNumber">Phone Number</label>
            <input type="text"
              {...register("phoneNumber", {
                required: "Please Enter Your Phone Number",
                maxLength: {
                  value: 15,
                        message: "must be max 15 chars",
                      },
              })}
              className='w-full bg-white' id="phoneNumber" autoFocus />
            {errors.phoneNumber && <div className='text-red-500'>{errors.phoneNumber.message}</div>}

          </div>
          <div className='mb-4'>
            <label htmlFor="country">Country</label>
            <input type="text"
              {...register("country", {
                required: "Please Enter Your Country ",
                maxLength: {
                  value: 15,
                        message: "must be max 15 chars",
                      },
              })}
              className='w-full bg-white' id="phoneNumber" autoFocus />
            {errors.country && <div className='text-red-500'>{errors.country.message}</div>}

          </div>
          <div className='mb-4'>
            <button className='primary-button' type="submit">Proceed to Payment</button>
          </div>


        </form>
</div>

        
        <div className=" card p-5  float-right w-[20%] h-[10%] mr-[7rem] shadow-lg" >
          <h1 className='text-xl font-bold mb-6 text-center'> Order Summary</h1>

          <div className='mb-2 flex justify-between'>
            <div className=''>Total Items :</div>
            <div className='mr-9'>

              {items.reduce((a, c) => a + c.quantity, 0)}

            </div>


          </div>
          <div className='mb-[50px] flex justify-between'>
            <div>Total Amount:</div>
            <div className='mr-6'>
              {items.reduce((a, c) => a + c.quantity * c.price, 0)}
            </div>
          </div>

          <Link href='/cart'>
            <div>
              <button className='primary-button w-full'>Back to Cart</button>
            </div>
          </Link>

          <div className='mt-2'>


            <Link href='/'>
              <button className='primary-button w-full' type='button'>
                Continue Shooping

              </button>
            </Link>
          </div>
        </div>
        </div>
        <ToastContainer/>
        </>
      </Layout>
    
  )
}



export default Routes(Shipping)