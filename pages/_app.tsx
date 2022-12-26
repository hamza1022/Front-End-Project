import '../styles/globals.css'
import type { AppProps } from 'next/app'
// import {StoreProvider} from '../store'
import { Provider } from 'react-redux'
// import {Store,{persistor}} from '../Store/Store'
import { persistor, store } from '../Store/Store';
import { PersistGate } from 'redux-persist/integration/react';

export default function App({ Component, pageProps }: AppProps) {
  return(
    <Provider store ={store} >
      <PersistGate persistor={persistor}>

<Component {...pageProps} 
/>

      </PersistGate>

    </Provider>



  ) 
}
