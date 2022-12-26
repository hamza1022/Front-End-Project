import Link from 'next/link'
import React from 'react'
import Image from 'next/image'


   
interface productType {

    img : string ,
    name : string,
    slug : string ,
    brand : string ,
    price : number,
    cateogory : string,


}

const ProductItems = ({ product }:{product : productType}) => {

    return (
//         <section className="text-gray-600 body-font">
//   <div className="container px-5 py-24 mx-auto">
//     <div className="flex flex-wrap -m-4">
//       <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
//         <a className="block relative h-48 rounded overflow-hidden">
//           <img alt="ecommerce" className="object-cover object-center w-full h-full block" src={product.img}/>
//         </a>
//         <div className="mt-4">
//           <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
//           <h2 className="text-gray-900 title-font text-lg font-medium">{product.category}</h2>
//           <p className="mt-1">${product.price}</p>
//         </div>
//       </div>
     
     
    
     
//     </div>
//   </div>
// </section>

<div className="h-[45vh] flex flex-col justify-center">
  <div className="relative m-3 flex flex-wrap mx-auto justify-center">

    <div className="relative max-w-sm min-w-[340px] bg-white shadow-md rounded-3xl p-2 mx-1 my-3 cursor-pointer">
      <div className="overflow-x-hidden rounded-2xl relative">
        <img className="h-40 rounded-2xl w-full object-cover" src={product.img}/>
        <p className="absolute right-2 top-2 bg-sky-300 rounded-full p-2 cursor-pointer group">
            <Link href= {`/products/${product.slug}`}>
            
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 group-hover:opacity-50 opacity-70" fill="none" viewBox="0 0 24 24" stroke="black">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
          </svg>
            </Link>
        </p>
      </div>
      <div className="mt-4 pl-2 mb-2 flex justify-between ">
        <div>
          <p className="text-lg font-semibold text-gray-900 mb-0">{product.name}</p>
          <p className="text-md text-gray-800 mt-0">${product.price}</p>
        </div>
        <div className="flex flex-col-reverse  mb-1 mr-4 group cursor-pointer">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 group-hover:opacity-70" fill="none" viewBox="0 0 24 24" stroke="gray">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
          </svg>
        </div>
      </div>
    </div>

 

  </div>
</div>

       
        
        
       
         
    )
}

export default ProductItems

{/* <div classNameName="card">
        
<Link href={`/products/${product.slug}`} legacyBehavior>
    <a>
        <img src={product.img}
            alt={product.name}
            
            classNameName='rounded shadow h-3/5 !important'
        />
        
    </a>
</Link>
<div classNameName='flex flex-col items-center justify-center p-5'>
    <Link href={`/products/${product.slug}`} legacyBehavior>
        <a>
            <h2 classNameName='text-lg'>{product.name}</h2>

        </a>

    </Link>
    <p classNameName='mb-2'>{product.brand}</p>
    <p>${product.price}</p>

        <Link href ={`/products/${product.slug}`}>
    <button classNameName='primary-button' type='button'>
        Add to Cart
            
    </button>
        </Link>
</div>


</div> */}