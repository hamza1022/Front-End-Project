import React, { useState } from 'react'
import Layout from './layout'
import { useRouter } from 'next/router'
import { savePayment } from '../Store/CartSlice'
import { useDispatch } from 'react-redux'

const Payment = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const [selectedPaymentMethod ,setSelectedPaymentMethod]= useState('');

  const submitHandler=(e:any)=>{
    e.preventDefault();
    if(!selectedPaymentMethod){
      alert("payment method is required")
    }
    if(selectedPaymentMethod){
      console.log(selectedPaymentMethod);
      dispatch(savePayment(selectedPaymentMethod))
      router.push('/placeorder')

    }
  }

  return (
    <div>
    <Layout title="Payment Method">
    <form className='mx-auto max-w-screen-md' onSubmit= {submitHandler}>
    <h1 className='mb-4 text-xl'>Payment Method</h1>
    {
      ['Paypal','Stripe','CashOnDeleivery'].map((payment)=>(
        <div key={payment} className='mb-4'>
        <input
        name="paymentMethod"
        className='p-2 outline-none '
        id={payment}
        value ={selectedPaymentMethod}
        type="radio"
        checked={selectedPaymentMethod === payment }
        onChange={()=>setSelectedPaymentMethod(payment)}

        />
        <label className='p-2' htmlFor={payment}>{payment}</label>

        
          </div>
      ))
    }
    <div className='mb-4 flex justify-between'>
    <button 
    onClick={()=>router.push('/shipping')}
    type="button"
    className='default-button'
    
    >Back</button>
     <button 
    type="submit"
    className='primary-button'
    
    >Next</button>


    </div>


    </form>

    </Layout>
    </div>
  )
}

export default Payment