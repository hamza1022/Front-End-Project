
import Link from 'next/link'
import React from 'react'
import Layout from './layout'
import { useForm } from 'react-hook-form'
import axios from 'axios';
import { useRouter } from 'next/router';
import cookie from 'js-cookie';
import { saveUserInfo  } from '../Store/CartSlice';
import { useDispatch } from 'react-redux';
import { ToastContainer } from 'react-toastify';



const Login = () => {
  const dispatch = useDispatch();
  const router = useRouter();

  interface dataObject {
    userName : string ,
    password : string
  }
  
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<dataObject>();
  
  const LoginForm = async (data :dataObject) =>{
    console.log(data)
    const userName = data.userName;
    const password =data.password;


    await axios.post('http://localhost:8999/users/login',{
      
      userName,
      password
     })
    .then(function (response){
      if(response.status === 200){
        console.log(response.data.user)
        const role = response.data.user.systemRole;

       let token = response.data.token ;
        dispatch(saveUserInfo({...data,token:token,Role:role }))
      
        console.log(response.data.token)
        cookie.set('token', response.data.token)
        
        router.push('/')
      }
    })
    .catch(function (error){
      console.log(error)
    })
  }

  return (
    
   
   <Layout title='login'>
    <>
    <form className='mx-auto max-w-screen-md' onSubmit={handleSubmit(LoginForm)}>
    <h1 className='mb-2 text-xl font-bold'>Login</h1>
    <div className='mb-4 mt-[5rem]'>
    <label htmlFor="userName">User Name</label>
    <input type= "userName"
    {...register('userName', {required: "Please Enter Your User Name",
    maxLength: {
      value: 15,
            message: "must be max 15 chars",
          },
    })}
     className='w-full bg-white' id= "email" autoFocus /> 
     {errors.userName && <div className='text-red-500'>{errors.userName.message}</div>}

    </div>
    <div className='mb-4'>
    <label htmlFor="email">Password</label>
    <input type= "password"
    {...register('password',{
      required : 'Please Enter Password',
      minLength:{ value:6, message:'pass is more than 5 chars'},
    })}
    className='w-full bg-white ' id= "password" autoFocus /> 
     {errors.password && <div className='text-red-500'>{errors.password.message}</div>}
    </div>
    <div className='mb-4'>
    <button className='primary-button'type="submit" >Login</button>
    </div>
    <div className='mb-4'>
    Don&apos; t have an Account? &nbsp;
    <Link href='/signup' className='font-bold'>Register</Link>
    </div>

    </form>
    <ToastContainer/>
    </>
    </Layout>
    
    
  )
}

export default Login