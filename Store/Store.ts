import {configureStore} from '@reduxjs/toolkit'
import cartReducer from './CartSlice'
import { useDispatch as usedDispatchBase } from 'react-redux'
import { persistReducer, persistStore } from 'redux-persist';
import thunk from 'redux-thunk';
// import storageSession from 'reduxjs-toolkit-persist/lib/storage/session'
import storage from 'redux-persist/lib/storage';

const persistConfig = {
    key: 'root',
    storage,
  }

  const persistedReducer = persistReducer(persistConfig, cartReducer)
  export const store = configureStore({
    reducer: {
        userCart: persistedReducer
    },
  })

export const useDispatch = ()  => usedDispatchBase ()

export const persistor = persistStore(store)

export type RootState = ReturnType<typeof store.getState>