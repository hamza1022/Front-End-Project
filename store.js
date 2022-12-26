import {createContext ,useReducer} from 'react'

export const Store = createContext();

const initialState= {
    cart: { cartItems:[] }

}

function reducer (state,action){
switch (action.type){
case 'Card-Add-Item':{

    
    // const new_item = action.payload;
    // // "casual_shirts"
    // const exist_item = state.cart.cartItems.find((item)=>item.slug=== new_item.slug);
    
    // const existedItem = state.cart.cartItems.map((item)=> item.slug === exist_item.slug ? new_item : item  ) 
    
    // const newItem = [...state.cart.cartItems,new_item]


   const new_Item = action.payload
   console.log(new_Item)
   const existItem =  state.cart.cartItems.find((item)=>item.slug===new_Item.slug);
   console.log(existItem)

    const cartItems = existItem ? state.cart.cartItems.map((item)=>
        item.name === existItem.name ? new_Item : item ) : [...state.cart.cartItems,new_Item];
   console.log(cartItems)


   return {...state, cart:{...state.cart , cartItems}}

}
default: return state;
}

}
export function StoreProvider({children}){
    const [state,dispatch] = useReducer(reducer,initialState)
    const value = {state,dispatch}
    return <Store.Provider value= {value}>{children}</Store.Provider>
    // Here we give properties that is state and dispatch to the children compoenent so we have access to

    
}