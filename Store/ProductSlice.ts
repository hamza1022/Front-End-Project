import { createSlice,current } from "@reduxjs/toolkit";


type productType = {
    productName:string,
    brand:string,
    category:string,
    price:number,
    stock:number,
    description:string,
    productId?:number
}

type initialStateType = {
    
    productList : productType[] 

} 
const initialState:initialStateType = {
    productList : []

}



export const ProductSlice = createSlice ({
    name: "Products",
    initialState,

    reducers:{
        addProduct(state,action){

            state.productList.push(action.payload)

        },
        removeProduct(state, action) {
            
            
            const remainingcartItems = state.productList.filter(product => product.productId !== action.payload.productId);
            state.productList = remainingcartItems


       },
       updateProduct(state,action){
        console.log("body",action.payload)
        const{productId} =action.payload;
        console.log("id from payload" , productId)
    
      
        const newProduct = current(state).productList.find((product)=>product.productId == action.payload.productId)
        

        const updatedProduct = {...action.payload, productId:newProduct?.productId}
    


        const remaining = current(state).productList.filter((product)=> product.productId != productId)
        state.productList = remaining

        const newObje = [...state.productList,updatedProduct]
        console.log("after",newObje)
        state.productList=newObje

       }

    }
})

export const {addProduct, removeProduct,updateProduct} = ProductSlice.actions
export default ProductSlice.reducer

