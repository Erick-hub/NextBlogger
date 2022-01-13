import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import {useState} from 'react';
import {useEffect,createContext,useContext,useRef} from 'react';
import Loader from '../components/Loader';


export default function Home() {
  return(
    <div>
      <Loader show />
    </div>
  )
}