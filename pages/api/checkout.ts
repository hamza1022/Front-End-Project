
import Stripe from "stripe";

const stripe = new Stripe(
    "sk_test_51MFE7iKbxczyasxGIlARgRHCAXUzXoTA69lkZUxfHWrseyUTiNdIp6qHjbOZhfYM520GXK6JwLBDD0Mz4lokbpyG00ikDu6vLH"
)

export default async function handler(req,res){
    if(req.method == "POST"){
    const myitems = req.body  
    const id = myitems.orderId  
    
        try{
            const params = {
                submit_type: "pay",
                mode: "payment",
                payment_method_types: ["card"],

                // line_items : [{
                //     price_data:{
                //         currency:"usd",
                //         product_data:{
                //             name:   myitems.orderItems.name
                //         },
                //         unit_amount: myitems.totalPrice * 100
                //     },
                //     adjustable_quantity:{
                //         enabled: false
                //     },
                //     quantity: myitems.totalQuantity
                // }],



                line_items: myitems.orderItems.map((item ) =>{
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
            


        }catch(error){
            res.status(500).json(error.message)
        }
    }else{
        res.setHeader("Allow", "POST")
        res.status(405).end("Method not allowed")
    }
}