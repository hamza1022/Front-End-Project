
import Layout from '../../Components/layout'
import { useRouter } from 'next/router'
import data from '../../data';
import Image from 'next/image'
import { addtocart } from '../../Store/CartSlice';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';


// import { Store } from '../../store'


const ProductScreen = () => {
    const [quantity ,setQuantity] = useState(1);
    const dispatch = useDispatch()
    const { query } = useRouter();
    console.log(query);
    const { slug } = query;

    const product = data.products.find((x) => x.slug === slug)
    if (!product) {
        return <div>Product Not Found</div>
    }
   
    const incQty = ()=>{
    setQuantity(quantity+1)
    }

    const decQty =()=>{
        setQuantity(quantity-1)
    }

    //   To add item in the cart 
    const handleAddToCart=()=>{ 
        toast.success(`${product.name} is Added Successfully`, {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            });
        

        dispatch(addtocart({...product, quantity:quantity}))
        
        if(product.InStock<quantity){
            alert('product is out of stock')
            return;
        }
       
       
    }

    return (
        
       
            <Layout title={product.name}>   

            <>
            
          

<section className="text-gray-600 body-font overflow-hidden">
  <div className="container px-5 py-24 mx-auto">
    <div className="lg:w-4/5 mx-auto flex flex-wrap">
      <div className="lg:w-1/2 w-full lg:pr-10 lg:py-6 mb-6 lg:mb-0">
        <h2 className="text-sm title-font text-gray-500 tracking-widest">BRAND NAME</h2>
        <h1 className="text-gray-900 text-3xl title-font font-medium mb-4">{product.brand}</h1>
        <div className="flex mb-4">
          <a className="flex-grow text-indigo-500 border-b-2 border-indigo-500 py-2 text-lg px-1">Description</a>
          <a className="flex-grow border-b-2 border-gray-300 py-2 text-lg px-1">Reviews</a>
          <a className="flex-grow border-b-2 border-gray-300 py-2 text-lg px-1">Details</a>
        </div>
        <p className="leading-relaxed mb-4">{product.description}</p>

        <div className="flex border-t border-b mb-6 border-gray-200 py-2">
          <span className="text-gray-500">Stock</span>
          <span className="ml-auto text-gray-900">{product.InStock > 0 ? "Available" : "Out of stock"}</span>
        </div>
        <div className="flex border-t border-b mb-6 border-gray-200 py-2">
          <span className="text-gray-500">Category</span>
          <span className="ml-auto text-gray-900">{product.cateogory}</span>
        </div>
        
        <div className="flex border-t border-b mb-6 border-gray-200 py-2">
          <span className="text-gray-500">Quantity</span>
          <span className="ml-auto text-gray-900">
          <span className='bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white ml-[6rem] m-2 px-4 border cursor-pointer border-blue-500 hover:border-transparent rounded' onClick={()=>decQty()}>-</span>
                            {quantity}
                            <span className='bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white m-2 px-4 cursor-pointer border border-blue-500 hover:border-transparent rounded' onClick={()=>incQty()}>+</span>
            </span>
        </div>
        
        <div className="flex">
          <span className="title-font font-medium text-2xl text-gray-900">${product.price}</span>
          <button className="flex ml-auto text-white bg-sky-400 border-0 py-2 px-6 focus:outline-none hover:bg-sky-500 rounded" onClick={handleAddToCart} >Buy</button>
          <button className="rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4">
            <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
              <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"></path>
            </svg>
          </button>
        </div>
      </div>
      <Image alt="ecommerce" className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded" src={product.img}/>
    </div>
  </div>
</section>
<ToastContainer/>
</> 
</Layout>
        
    )
}

export default ProductScreen