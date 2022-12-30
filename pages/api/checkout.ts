
import { NextApiRequest } from "next";
import { NextApiResponse } from "next/types";
import Stripe from "stripe";

const stripe = new Stripe(
    "sk_test_51MFE7iKbxczyasxGIlARgRHCAXUzXoTA69lkZUxfHWrseyUTiNdIp6qHjbOZhfYM520GXK6JwLBDD0Mz4lokbpyG00ikDu6vLH", {
        apiVersion: '2022-11-15',}
      )

export default async function handler(req:NextApiRequest,res:NextApiResponse){
    if(req.method == "POST"){
    const myitems = req.body  
    const id = myitems.orderId  
    
        try{
            const params: Stripe.Checkout.SessionCreateParams  = {
                submit_type: "pay",
                mode: "payment",
                payment_method_types: ["card"],
                line_items: myitems.orderItems.map((item:any ) =>{
                 return{
                        price_data:{
                            currency: "usd",
                            product_data:{
                                name: item.name,
                               
                            },
                            unit_amount: item.price * 100 
                        },
                        adjustable_quantity:{
                            enabled: false
                        },
                        quantity: item.quantity
                    }
                    
                }),  
               
                success_url: `${req.headers.origin}/success/${id}`,
                cancel_url: `${req.headers.origin}/cancle`
            };
            const session = await stripe.checkout.sessions.create(params);
            res.status(200).json(session)
            console.log("sessions",session)
            


        }catch(error:any){
           
                res.status(500).json(error.message)
            
           
        } 
    }else{
        res.setHeader("Allow", "POST")
        res.status(405).end("Method not allowed")
    }
}