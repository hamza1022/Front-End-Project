
 import Layout from '../Components/layout'
 import data from '../data';
 import ProductItems from '../Components/productItems'
 import Services from '../Components/services'
 import Header from '../Components/header'
 import Footer from '../Components/footer';
//  import Slider from '../Components/slider'
import HomeContainer from '../Components/homeContainer';

 
export default function Home() {
  return (
    <div >
     
      <Layout title='Home'>
        <>
       
      
        <div className='mb-[9rem] max-w-screen  '>


          <HomeContainer/>
        </div>
       
      <div className='grid grid-cols-1  md:grid-cols-3 lg:grid-cols-3'>
        {data.products.map((product)=> (
          <ProductItems product={product} key={product.slug}></ProductItems>
          ))}
      </div>
      
          <Header/>
      <Services/>
      </>
      </Layout>
<div>
<Footer/>
</div>
      
    </div>
    
  )
}
