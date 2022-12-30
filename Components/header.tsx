import React from 'react'
import Image from 'next/image'


const Header = () => {
  return (
    <div>
    <div className="flex justify-center mt-[4rem] ">
                                        
                                        </div>
                                        <div className="flex justify-center  ">
                                            <div className="flex flex-col items-center justify-center">
                                    
                                                <div className="flex flex-col  max-w-7xl justify-center items-center space-y-3 w-full ">
                                                    <div className="flex flex-col   md:items-start items-center justify-center  space-y-3 px-8 text-center ">
                                                        <div className="text-3xl md:text-3xl italic font-bold text-sky-400 ">
                                                            Products You May Also Like</div>
                                                    </div>
                                                    <div
                                                        className="flex flex-col lg:flex-row space-x-2 space-y-3 md:space-x-6   w-full items-center justify-center ">
                                    
                                                        <div className="lg:w-40 w-64 h-40  overflow-hidden rounded-xl ">
                                                            <Image src="https://plus.unsplash.com/premium_photo-1661759370890-26ea261f5080?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80
                                    
                                                            " alt="" className="" />
                                                        </div>
                                                        <div className="flex flex-row lg:flex-col space-x-3 space-y-6 items-center justify-center">
                                                            <div className="w-32 lg:w-40 h-32  overflow-hidden rounded-xl ">
                                                                <Image src="https://source.unsplash.com/random/300x500/?shirts
                                    
                                                                "   alt="" className="" />
                                                            </div>
                                                            <div className="w-32 lg:w-40 h-48  overflow-hidden rounded-xl ">
                                                                <Image src="https://source.unsplash.com/random/300x500/?pent
                                    
                                                                "    alt="" className="" />
                                                            </div>
                                                        </div>
                                                        <div className="lg:w-60 w-64 h-96  overflow-hidden rounded-xl ">
                                                            <Image src="https://source.unsplash.com/random/300x500/?coats
                                    
                                                            "    alt="" className="" />
                                                        </div>
                                                        <div className="flex flex-row lg:flex-col space-x-3 space-y-6 items-center justify-center ">
                                                            <div className="w-32 lg:w-40 h-48  overflow-hidden rounded-xl ">
                                                                <Image src="https://source.unsplash.com/random/300x500/?houses
                                    
                                                                "    alt="" className="" />
                                                            </div>
                                                            <div className="w-32 lg:w-40 h-32  overflow-hidden rounded-xl ">
                                                                <Image src="https://source.unsplash.com/random/300x500/?hills
                                    
                                                                "    alt="" className="" />
                                                            </div>
                                                        </div>
                                                        <div className="lg:w-40 w-64 h-40  overflow-hidden rounded-xl ">
                                                            <Image src="https://source.unsplash.com/random/300x500/?shoes
                                    
                                                            "    alt="" className="" />
                                                        </div>
                                    
                                    
                                                    </div>
                                    
                                                </div>
                                            </div>
                                        </div> 
                                        <script src="https://cdn.tailwindcss.com"></script>
                                        <script src="https://use.fontawesome.com/03f8a0ebd4.js"></script>
    </div>
  )
}

export default Header