
import React from "react"
import { slide } from "../utils/card"
import Layout from "./layout"
import Image from "next/image";
import style from "../styles/slide.module.css"



 const SliderScreen = () => {

  return (
    <Layout title="slider">


<div className={style.slider}>
        <div className={`${style.container} ${style.grid}`}>
          {slide.map((item, i) => (
            <div className={style.box} key={i}>
              <div className={style.img}>
                <Image src={item.image} alt='' width={200} height={200} />
              </div>
            </div>
          ))}
        </div>
      </div>

    </Layout>
    
      
    
  )
}

export default SliderScreen