import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import {useState} from 'react';
import {useEffect,createContext,useContext,useRef} from 'react';



export default function Home() {
  const myBtn= useRef(null);
  const clickIt= () =>myBtn.current.click()

  return (
   <button ref={myBtn}></button>
  )
}