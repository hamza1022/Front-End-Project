import { createSlice } from "@reduxjs/toolkit";
import { type } from "os";
import data from '../data';

type cartType = {

        id : number,
        name : string ,
        slug : string,
        img : string,
        quantity : number,
        InStock : number ,
        price : number,
        numReviews : number ,
        brand : string ,
        description : string,
        catergory : string,
        rating : number,
} ;
 type addressType = {
    fullName : string,
    address :string ,
    city :string ,
    postalCode : string ,
    phoneNumber : string ,
    country : string
 };

 type userType = {

    userName :string,
    password : string
 }
  type detailType = {
    fullName:string,
    address:string,
    city:string,
    postalCode:string,
    phoneNumber:string,
    country:string,
    orderId:string,
    itemPrice:number,
    shippingPrice:number,
    taxPrice:number,
    totalPrice:number,
    paymentMethod :string ,
    totalQuantity : number,
    orderItems : [
        {
            id : number,
        name : string ,
        slug : string,
        img : string,
        quantity : number,
        InStock : number ,
        price : number,
        numReviews : number ,
        brand : string ,
        description : string,
        catergory : string,
        rating : number,

        }
    ]
  }

  type confirmOrderType ={

    status:string,
    payment:string,
    user:string,
    orderID:string,
    Total:number,
    Address : addressType
    purchaseItems :[
        {

            id : number,
            name : string ,
            slug : string,
            img : string,
            quantity : number,
            InStock : number ,
            price : number,
            numReviews : number ,
            brand : string ,
            description : string,
            catergory : string,
            rating : number,

        }
    ]

  }

type initialStateType = {
    cartItems: cartType[],
    Address : addressType,
    UserInfo:userType,
    paymentMethod:string,
    orderDetails:detailType[],
    confirmOrders:confirmOrderType[]
}

const initialState:initialStateType = {
    cartItems: [{
        id : 0,
        name : "" ,
        slug : "",
        img : "",
        quantity : 0,
        InStock : 0 ,
        price : 0,
        numReviews : 0 ,
        brand : "" ,
        description : "",
        catergory : "",
        rating : 0,}],

    Address : {
    fullName : "",
    address :"" ,
    city :"" ,
    postalCode : "" ,
    phoneNumber : "" ,
    country : ""
    },

    UserInfo:{
        userName :"",
        password : ""

    },
    paymentMethod:"",
    orderDetails:[{
        fullName:"",
    address:"",
    city:"",
    postalCode:"",
    phoneNumber:"",
    country:"",
    orderId:"",
    itemPrice:0,
    shippingPrice:0,
    taxPrice:0,
    totalPrice:0,
    totalQuantity : 0,
    paymentMethod :"",
    orderItems : [
        {
            id : 0,
        name : "" ,
        slug : "",
        img : "",
        quantity : 0,
        InStock : 0 ,
        price : 0,
        numReviews : 0 ,
        brand : "" ,
        description : "",
        catergory : "",
        rating : 0,

    }]
}
],
    confirmOrders:[ {
        status:"",
    payment:"",
    user:"",
    orderID:"",
    Total:0,
    Address : {
        fullName : "",
        address :"" ,
        city :"" ,
        postalCode : "" ,
        phoneNumber : "" ,
        country : ""

    } ,
    purchaseItems :[
        {

            id : 0,
            name : "" ,
            slug : "",
            img : "",
            quantity : 0,
            InStock : 0 ,
            price : 0,
            numReviews : 0 ,
            brand : "" ,
            description : "",
            catergory : "",
            rating : 0,

        }
    ]


    }]
};


export const Cartslice = createSlice({
    name: "userCart",
    initialState,


    reducers: {
        addtocart(state, action) {
            // const product = data.products.find((item)=>item.id === action.payload.id)
            // console.log(product)
            // const itemIndex = state.cartItems.findIndex((item) => item.id === action.payload.id);
            // console.log(itemIndex)
            // if(itemIndex >= 0 ){
            //     state.cartItems[itemIndex].quantity +=1
            // }
            // else {
            //     state.cartItems.push(action.payload)

            // }
            // const a = state.cartItems[itemIndex].quantity += 1
            // state.cartItems.push(a)


            // console.log(itemIndex)

            // if (itemIndex) {
            //     state.cartItems.map((item)=> item.id === action.payload.id ? action.payload : item)
                
            // }
            // else{

            //     state.cartItems.push(action.payload)
            //     const newQty = state.cartItems[itemIndex].quantity + action.payload.quantity;
            //     if (newQty > product.InStock) {
            //         state.cartItems[itemIndex].quantity = product.InStock  
            //     }
            //     else{
            //         state.cartItems[itemIndex].quantity += action.payload.quantity
            //     }
                
            // }


            const itemIndex = state.cartItems.findIndex((item) => item.id === action.payload.id)
            if(itemIndex >= 0){
                state.cartItems[itemIndex].quantity += action.payload.quantity 
            }else{
                state.cartItems.push(action.payload)
            }
        },

        removetocart(state, action) {
            
            
             const remainingcartItems = state.cartItems.filter(item => item.id !== action.payload.id);
             state.cartItems = remainingcartItems


        },
        saveShipping(state,action){
            state.Address= action.payload
        },
       
        saveUserInfo(state,action){
                state.UserInfo =  action.payload
            }, 
            logOut(state){
                state.UserInfo={
                    userName:"",
                    password:""
                };
                state.Address={
                    fullName : "",
                    address :"" ,
                    city :"" ,
                    postalCode : "" ,
                    phoneNumber : "" ,
                    country : ""

                };
                state.cartItems=[];
            },
            savePayment(state,action){
                state.paymentMethod= action.payload

            },
            saveOrderDetails(state,action){
                state.orderDetails.push(action.payload)
            },
            clearCart(state){
                state.cartItems= [];
            },
            saveConfirmOrders(state,action){
                state.confirmOrders.push(action.payload)


            }
        

    }

});

export const { addtocart, removetocart, saveShipping ,saveUserInfo,logOut,savePayment,saveOrderDetails,clearCart,saveConfirmOrders } = Cartslice.actions
export default Cartslice.reducer

