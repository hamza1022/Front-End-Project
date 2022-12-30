import {configureStore,combineReducers} from '@reduxjs/toolkit'
import cartReducer from './CartSlice'
import { useDispatch as usedDispatchBase } from 'react-redux'
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import productReducer from './ProductSlice'
import userReducer from './UsersSlice'



const persistConfig = {
    key: 'root',
    storage,
    
  }
  const rootReducer = combineReducers ({
    userCart : cartReducer,
    Products : productReducer,
    Users: userReducer


  })


  const persistedReducer = persistReducer(persistConfig, rootReducer)
  export const store = configureStore({
    reducer: persistedReducer,
  
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({      
      serializableCheck: false
    })

  
  })

export const useDispatch = ()  => usedDispatchBase ()

export const persistor = persistStore(store)

export type RootState = ReturnType<typeof store.getState>