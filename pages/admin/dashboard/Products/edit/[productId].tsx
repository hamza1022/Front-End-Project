import { useRouter } from 'next/dist/client/router';
import React from 'react'
import { useSelector } from 'react-redux';
import Sidebar from '../../../../../Components/sidebar'
import { RootState, useDispatch } from '../../../../../Store/Store';
import * as yup from 'yup'
import { useFormik } from 'formik'
import { updateProduct } from '../../../../../Store/ProductSlice';


const ProductId = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const {query} = useRouter();
  const {productId} = query
  // console.log(productId)

  const allProducts = useSelector((state:RootState)=> state.Products.productList)
  // console.log(allProducts)
  

  const Product = allProducts.find((product)=>product.productId == productId)
  // console.log(Product)

  const initialValues: typeValue = {
    productName: "",
    brand: "",
    category : "",
    price: 0,
    stock: 0,
    description:"",
   
} 
interface typeValue {
  productName : string,
  brand : string,
  price : number ,
  category : string ,
  stock : number,
  description : string ,
  productId?:number
}

  const validationSchema = yup.object({
    productName:yup.string().required("Please Enter Prodcut Name"),
    brand:yup.string().required("Please Enter Brand Name"),
    category:yup.string().required("Please Enter Category Name"),
    price:yup.number().required("Please Enter Product Pirce"),
    description:yup.string().required("Please Enter Prodcut Description"),
    stock:yup.number().required("Please Enter Prodcut Stock")
})

const onSubmit =(values:typeValue )=>{
  console.log(values)

  dispatch(updateProduct({...values,productId:productId }))

  formik.resetForm()
  router.push('/admin/dashboard/Products')

}

  const formik = useFormik({
    initialValues ,
    validationSchema,
    onSubmit
})


  return (
    <div className='w-full h-screen flex'>
       <Sidebar/>
       <div className='px-[15rem] py-[5rem]'>
        
       <form className=" w-full max-w-lg" onSubmit={formik.handleSubmit}>
  <div className="flex flex-wrap -mx-3 mb-6">
    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-first-name">
        Product Name
      </label>
      <input onChange={formik.handleChange} value={formik.values.productName} name="productName" className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"  type="text"  placeholder={Product?.productName}/>
      
    </div>
    <div className="w-full md:w-1/2 px-3">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-last-name">
        Prodcut Brand
      </label>
      <input onChange={formik.handleChange} value={formik.values.brand} name="brand" className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" type="text" placeholder={Product?.brand}/>
    </div>
  </div>
  <div className="flex flex-wrap -mx-3 mb-6">
    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-first-name">
        Product Category
      </label>
      <input onChange={formik.handleChange} value={formik.values.category} name="category" className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"  type="text" placeholder={Product?.category}/>
      
    </div>
    <div className="w-full md:w-1/2 px-3">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-last-name">
        Prodcut Price
      </label>
      <input onChange={formik.handleChange} value={formik.values.price} name="price" className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"  type="number" placeholder={Product?.price}/>
    </div>
  </div>
  <div className="flex flex-wrap -mx-3 mb-6">
    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-first-name">
        Product Stock
      </label>
      <input onChange={formik.handleChange} value={formik.values.stock} name="stock" className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"  type="number" defaultValue={Product?.stock} />
     
    </div>
    <div className="w-full md:w-1/2 px-3">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-last-name">
        Prodcut Description
      </label>
      <input onChange={formik.handleChange} value={formik.values.description} name="description"  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"  type="text" placeholder={Product?.description}/>
    </div>
  </div>
  <div>
    <button type='submit' className='primary-button ml-[13rem]'>Edit
    </button>
  </div>
 
  
</form>

  </div>

      
        </div>
  )
}

export default ProductId