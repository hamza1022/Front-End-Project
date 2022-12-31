import React from 'react'
import Sidebar from '../../../../Components/sidebar'
import {FaTrashAlt} from 'react-icons/fa'
import {FaEdit} from 'react-icons/fa'
import Image from 'next/image'

import * as yup from 'yup'
import { useFormik } from 'formik'
import { useDispatch, useSelector } from 'react-redux'
import { addProduct , removeProduct } from '../../../../Store/ProductSlice'
import { RootState } from '../../../../Store/Store'
import Link from 'next/link'
const Products = () => {
    const dispatch = useDispatch();

    const products:Array<typeValue> = useSelector((state:RootState)=> state.Products.productList)
    console.log(products)

    
    const initialValues: typeValue = {
        productName: "",
        brand: "",
        category : "",
        price: 0,
        stock: 0,
        description:"",
        productId:0
    } 

    const validationSchema = yup.object({
        productName:yup.string().required("Please Enter Prodcut Name"),
        brand:yup.string().required("Please Enter Brand Name"),
        category:yup.string().required("Please Enter Category Name"),
        price:yup.number().required("Please Enter Product Pirce"),
        description:yup.string().required("Please Enter Prodcut Description"),
        stock:yup.number().required("Please Enter Prodcut Stock")
    })
    
    interface typeValue {
        productName : string,
        brand : string,
        price : number ,
        category : string ,
        stock : number,
        description : string ,
        productId?:number
      }

      interface productObject {
        productName : string,
        brand : string,
        price : number ,
        category : string ,
        stock : number,
        description : string ,
        productId?:number
      }

      const productid = Date.now();

    const onSubmit =(values:typeValue )=>{
        console.log(values)

        dispatch(addProduct({...values,productId:productid }))

        formik.resetForm()

    }
    const removeOneProduct = (product:productObject)=>{
        console.log("buttonclicked")

        dispatch(removeProduct(product))

    }

    const formik = useFormik({
        initialValues ,
        validationSchema,
        onSubmit
    })


    const openModal =()=>{
        
        let modalId =  document.getElementById("editUserModal") as HTMLDivElement

        modalId.classList.remove("hidden");
        

    }
    window.onclick=function(event){

        let modalId =  document.getElementById("editUserModal") as HTMLDivElement
        if(event.target == modalId){
            modalId.classList.add("hidden")

        }
    }
  return (
      <div className='w-full h-screen flex'>
        <Sidebar/>

        <div className='w-full'>
        
       
<div className="overflow-x-auto relative shadow-md ">
    <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className=" text-gray-700 uppercase bg-sky-500 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" className="py-3 px-6">
                    <span className="sr-only">Image</span>
                </th>
                <th scope="col" className="py-3 px-6">
                    Product Name
                </th>
                <th scope="col" className="py-3 px-6">
                    Cateogory
                </th>
                <th scope="col" className="py-3 px-6">
                    Brand
                </th>
                <th scope="col" className="py-3 px-6">
                    Price
                </th>
                <th scope="col" className="py-3 px-6">
                    Action
                </th>
                <th scope="col" className="py-3 px-6">
                    Edit
                </th>
            </tr>
        </thead>
        <tbody>
            {
                products.map((product:productObject)=>{

                    return (

                        <tr key={product.productId} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                        <td className="p-4 w-32">
                            <Image src="/docs/images/products/apple-watch.png" alt="Apple Watch" width={30} height={30} />
                        </td>
                        <td className="py-4 px-6 font-semibold text-gray-900 dark:text-white">
                            {product.productName}
                        </td>
                        <td className="py-4 px-6 font-semibold text-gray-900 dark:text-white">
                            {product.category}
                        </td>
                        
                        <td className="py-4 px-6 font-semibold text-gray-900 dark:text-white">
                            {product.brand}
                        </td>
                        <td className="py-4 px-6 font-semibold text-gray-900 dark:text-white">
                            ${product.price}
                        </td>
                        <td className="py-4 px-6">
                        <button className='ml-3'>
                         <FaTrashAlt className='h-5 w-5 fill-red-500'onClick={() => removeOneProduct(product)}></FaTrashAlt>
                        </button>
                           
                        </td>

                        <td className="py-4 px-6">
                        <Link className='' href={`/admin/dashboard/Products/edit/${product.productId}`}>
                         <FaEdit className='h-5 w-5'></FaEdit>
                        </Link>
                           
                        </td>
                        
                       
                       
                       
                    </tr>
                    


                    )
                  

                })


            }
           
            
        </tbody>
    </table>
    <div className='px-[35rem] py-[5rem]'>
            <button className='primary-button px-2' onClick={openModal}>Add Product</button>

        </div>
       
    
    <div id="editUserModal" aria-hidden="true" className=" flex justify-center   hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center p-4 w-full md:inset-0 h-modal md:h-full">
        <div className="relative w-full max-w-2xl h-full md:h-auto">
            
            <form action="#" className="relative bg-white rounded-lg border-solid border-2 border-sky-600 shadow dark:bg-gray-700" onSubmit={formik.handleSubmit}>
               
                <div className="flex justify-between items-start p-4 rounded-t border-b dark:border-gray-600">
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                        Add Product
                    </h3>
                    <button type="button" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-toggle="editUserModal">
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>  
                    </button>
                </div>
               
                <div className="p-6 space-y-6">
                    <div className="grid grid-cols-6 gap-6">
                        <div className="col-span-6 sm:col-span-3">
                            <label htmlFor="first-name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Prodcut Name</label>
                            
                            <input type="text" onChange={formik.handleChange} value={formik.values.productName} name="productName"  className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Bonnie" />
                            {formik.touched.productName?(
                            <div className='text-red-600 italic font-bold'>
                                {formik.errors.productName}</div>)
                                 : 
                                 null
                                 }
                        </div>

                        <div className="col-span-6 sm:col-span-3">
                            <label htmlFor="last-name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Brand</label>
                        
                            <input type="text" onChange={formik.handleChange} value={formik.values.brand} name="brand" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Green" />
                            {formik.touched.brand?(
                            <div className='text-red-600 italic font-bold'>
                                {formik.errors.brand}</div>)
                                 : 
                                 null
                                 }
                        </div>

                        <div className="col-span-6 sm:col-span-3">
                            <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Category</label>
                            
                            <input type="text" name="category"  onChange={formik.handleChange} value={formik.values.category} className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="example@company.com" />
                            {formik.touched.category?(
                            <div className='text-red-600 italic font-bold'>
                                {formik.errors.category}</div>)
                                 : 
                                 null
                                 }
                        </div>

                        <div className="col-span-6 sm:col-span-3">
                            <label htmlFor="phone-number" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Price</label>
                            <input type="number" name="price" onChange={formik.handleChange} value={formik.values.price}  className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="e.g. +(12)3456 789" />
                            {formik.touched.price?(
                            <div className='text-red-600 italic font-bold'>
                                {formik.errors.price}</div>)
                                 : 
                                 null
                                 }
                        </div>
                        <div className="col-span-6 sm:col-span-3">
                            <label htmlFor="department" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Stock</label>
                            <input type="number" name="stock" onChange={formik.handleChange} value={formik.values.stock}  className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Development" />
                            {formik.touched.stock?(
                            <div className='text-red-400 italic '>
                                {formik.errors.stock}</div>)
                                 : 
                                 null
                                 }
                        </div>
                        <div className="col-span-6 sm:col-span-3">
                            <label htmlFor="company" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Description</label>
                            <input type="text" name="description" onChange={formik.handleChange} value={formik.values.description}  className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="123456" />
                            {formik.touched.description?(
                            <div className='text-red-400 italic'>
                                {formik.errors.description}</div>)
                                 : 
                                 null
                                 }                        
                        </div>
                        
                    </div>
                </div>
               
                <div className="flex items-center p-6 space-x-2 rounded-b border-t border-gray-200 dark:border-gray-600">
                    <button type="submit"  className="text-white bg-sky-500 m-auto focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add 
                    </button>
                </div>
            </form>
        </div>
    </div>


    
    
</div>

</div>


      




        
        </div>
  )
}

export default Products