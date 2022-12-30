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
    password : string,
    Role:string
 }
  type detailType = {
    fullName:string,
    address:string,
    city:string,
    postalCode:string,
    phoneNumber:string,
    country:string,
    orderId:string,
    user:string,
    itemPrice:number,
    shippingPrice:number,
    taxPrice:number,
    status:string,
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
    TotalAmount:number,
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
    cartItems: [],

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
    orderDetails:[],
    confirmOrders:[]
};


export const Cartslice = createSlice({
    name: "userCart",
    initialState,


    reducers: {
        addtocart(state, action) {
          


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
           
            saveConfirmOrders(state,action){
                state.confirmOrders.push(action.payload)


            },
            clearCart(state,action){
                state.cartItems= [];
            },
        

    }

});

export const { addtocart, removetocart, saveShipping ,saveUserInfo,logOut,savePayment,saveOrderDetails,saveConfirmOrders,clearCart } = Cartslice.actions
export default Cartslice.reducer

