
import Link from 'next/link'
import React from 'react'
import Layout from './layout'
import { useForm } from 'react-hook-form'
import axios from 'axios'
import { useRouter } from 'next/router'
import { addUserInfo } from '../Store/UsersSlice'
import { useDispatch } from '../Store/Store'


const Signup = () => {
  const dispatch = useDispatch();



  interface dataType {
    firstName : string,
    lastName :string,
    email :string ,
    userName : string,
    password :string,
    phoneNumber:string,

  }
    const router = useRouter();   
    const { register,handleSubmit,formState: { errors },} = useForm<dataType>();

      const submitHandler = async  (data : dataType)=>{
        console.log(data)
    
        const firstName = data.firstName;
        const lastName= data.lastName;
        const userName = data.userName;
        const email = data.email;
        const phoneNumber = data.phoneNumber;
        const password = data.password;
         await axios.post('http://localhost:8999/users/signup',{
          firstName,
          lastName,
          userName,
          email,
          phoneNumber,
          password
         })
        .then(function (response){
          if(response.status === 200){
            dispatch(addUserInfo(data))
            router.push('/login')
          }
        })
        .catch(function (error){
          console.log(error.response.data.message)
        })
      }
  return (
    <div>
    <Layout title='Create Acoount'>
    <form className='mx-auto max-w-screen-md' onSubmit={handleSubmit(submitHandler)} >
    <h1 className='mb-4 text-xl'>Create Account</h1>
    <div className='mb-4'>
    <label htmlFor="email">First Name</label>
    <input type= "text"
    {...register("firstName", {required: "Please Enter Your First Name",
    maxLength: {
      value: 15,
            message: "must be max 15 chars",
          },
    })}
     className='w-full bg-white' id= "firstName" autoFocus /> 
     {errors.firstName && <div className='text-red-500'>{errors.firstName.message}</div>}

    </div>
    <div className='mb-4'>
    <label htmlFor="email">Last Name</label>
    <input  type= "text"
    {...register("lastName", {required: "Please Enter Your Last Name",
    maxLength: {
      value: 15,
            message: "must be max 15 chars",
          },
    })}
     className='w-full bg-white' id= "lastName" autoFocus /> 
     {errors.lastName && <div className='text-red-500'>{errors.lastName.message}</div>}

    </div>
    <div className='mb-4'>
    <label htmlFor="email">User Name</label>
    <input  type= "text"
    {...register("userName", {required: "Please Enter Your User Name",
    maxLength: {
      value: 15,
            message: "must be max 15 chars",
          },
    })}
     className='w-full bg-white' id= "lastName" autoFocus /> 
     {errors.userName && <div className='text-red-500'>{errors.userName.message}</div>}

    </div>
    <div className='mb-4'>
    <label htmlFor="email">Email</label>
    <input type= "email"
    {...register("email", {required: "Please Enter Your Email",
    maxLength: {
      value: 15,
            message: "must be max 15 chars",
          },
    })}
     className='w-full bg-white' id= "email" autoFocus /> 
     {errors.email && <div className='text-red-500'>{errors.email.message}</div>}

    </div>
    <div className='mb-4'>
    <label htmlFor="email">Phone Number</label>
    <input   type= "text"
    {...register("phoneNumber", {required: "Please Enter Your Phone Number",
    maxLength: {
      value: 12,
            message: "must be max 15 chars",
          },
    })}
     className='w-full bg-white' id= "phoneNumber" autoFocus /> 
     {errors.phoneNumber && <div className='text-red-500'>{errors.phoneNumber.message}</div>}

    </div>
    
    <div className='mb-4'>
    <label htmlFor="email">Password</label>
    <input type= "password"
    {...register("password",{
      required : 'Please Enter Password',
      minLength:{ value:6, message:'pass is more than 5 chars'},
     
    })}
     className='w-full bg-white ' id= "password" autoFocus /> 
     {errors.password && <div className='text-red-500'>{errors.password.message}</div>}
    </div>
    <div className='mb-4'>
    <button className='primary-button' type= "submit">SignUp</button>
    </div>
    <div className='mb-4'>
    Already have an Account? &nbsp;
    <Link href='/login' className='font-bold'>Login</Link>


    </div>

    </form>
   

    </Layout>
    </div>
  )
}

export default Signup