import '../styles/globals.css'
import Navbar from '../components/Navbar'
import {Toaster} from 'react-hot-toast'
import {UserContext} from '../lib/context'
import { createContext } from 'react/cjs/react.development'

import { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';


function MyApp({ Component, pageProps }) {
  return (
  
    <UserContext.Provider value={{user:{},username:'beeg'}}>
      
      <Navbar/>
      <Component {...pageProps} />
      <Toaster/>
      
    </UserContext.Provider>
    
  
  )
}

export default MyApp
