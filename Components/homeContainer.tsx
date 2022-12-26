import Image from "next/image";
import React from "react";
import Delivery from "../public/images/delivery.png";
import Hero from "../public/images/hero.avif";
import { heroData } from "../utils/frontData";

const HomeContainer = () => {
  return (
    <section
      className="grid grid-cols-1 md:grid-cols-2 gap-2 w-full "
      id="home"
    >
      <div className="py-2  flex-1 flex flex-col items-start justify-center gap-6">
        <div className="flex items-center mt-[5rem]  gap-2 justify-center bg-sky-100 px-4 py-1 rounded-full">
          <p className="text-base  text-sky-500 font-semibold">
            Fast Delivery
          </p>
          <div className="w-8 h-8 bg-white rounded-full overflow-hidden drop-shadow-xl">
            <Image
              src={Delivery}
              className="w-full h-full object-contain"
              alt="delivery"
            />
          </div>
        </div>

        <p className="text-[2.5rem] lg:text-[4.5rem] font-bold tracking-wide text-headingColor">
          Book More <span className="text-sky-400 text-[3rem] lg:text-[5rem]"> Prodcuts </span> 
          Build More 
          <span className="text-sky-400 text-[3rem] lg:text-[5rem]">Trust</span>

        </p>

        <p className="text-base ml-[2rem] text-textColor text-center md:text-left md:w-[80%]">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima velit
          eaque fugit distinctio est nam voluptatum architecto, porro iusto
          deserunt recusandae ipsa minus eos sunt, dolores illo repellat facere
          suscipit!
        </p>

        <button
          type="button"
          className="bg-gradient-to-br ml-[2rem] text-white from-sky-400 to-sky-500 w-full md:w-auto px-4 py-2  rounded-lg hover:shadow-lg transition-all ease-in-out duration-100"
        >
          Order Now
        </button>
      </div>
      <div className="py-2 flex-1 flex items-center relative">
        <Image
          src={Hero}
          className=" ml-[15rem] mt-9 h-full w-full lg:w-auto lg:h-650"
          alt="hero-bg"
        />

        <div className="w-full ml-[8rem] h-full absolute top-0 left-0 flex items-center justify-center lg:px-32  py-4 gap-4 flex-wrap">
          {heroData &&
            heroData.map((n) => (
              <div
                key={n.id}
                className="lg:w-190 cardOverlay backdrop-blur-md rounded-3xl flex flex-col items-center justify-center drop-shadow-lg"
              >
                <Image
                  src={n.imageSrc}
                  width={230}
                  height={300}
                  className="w-20 rounded-lg lg:w-40 mt-10 lg:mt-20 "
                  alt="I1"
                />
                <p className="text-base lg:text-xl font-semibold text-textColor mt-2 lg:mt-4">
                  {n.name}
                </p>

                <p className="text-[12px] lg:text-sm text-lighttextGray font-semibold my-1 lg:my-3">
                  {n.decp}
                </p>

                <p className="text-sm font-semibold text-headingColor">
                  <span className="text-xs text-red-600">$</span> {n.price}
                </p>
              </div>
            ))}
        </div>
      </div>
    </section>
    

    
//      <section
//   className="relative  bg-[url(https://images.unsplash.com/photo-1604014237800-1c9102c219da?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80)] h-screen bg-fixed bg-cover bg-center bg-no-repeat"
// >
//   <div
//     className="absolute inset-0 bg-white/75 sm:bg-transparent sm:bg-gradient-to-r sm:from-white/95 sm:to-white/25"
//   ></div>

//   <div
//     className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8"
//   >
//     <div className="max-w-xl text-center sm:text-left">
//       <h1 className="text-3xl font-extrabold sm:text-5xl">
//         Let us find your

//         <strong className="block font-extrabold text-sky-900">
//           Daily Products.
//         </strong>
//       </h1>

//       <p className="mt-4 max-w-lg sm:text-xl sm:leading-relaxed">
//         Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt illo
//         tenetur fuga ducimus numquam ea!
//       </p>

//       <div className="mt-8 flex flex-wrap gap-4 text-center">
//         <a
//           href="#"
//           className="block w-full rounded bg-blue-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-rose-700 focus:outline-none focus:ring active:bg-rose-500 sm:w-auto"
//         >
//           Get Started
//         </a>
//         <a
//           href="#"
//           className="block w-full rounded bg-blue-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-rose-700 focus:outline-none focus:ring active:bg-rose-500 sm:w-auto"
//         >
//           Learn More 
//         </a>

        
//       </div>
//     </div>
//   </div>
// </section> 



  );
};

export default HomeContainer;

