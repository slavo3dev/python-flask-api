import Head from 'next/head'
import {useState} from 'react';
import styles from '../styles/Home.module.css'

export default function Home() {
  
  const [message, setMessage] = useState("")

  async function fetchData() {
    const response = await fetch("http://localhost:5000/test");
    
    const data = await response.json();

    await setMessage(data)
  }

  console.log(message)
  return (
    <div className={styles.container}>
      <Head>
        <title>API - Next & Flask</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1>API: Next & Flask</h1>
      <button onClick={fetchData}>Present Data</button>
       <p>{message ? message : "Press Button To recieve the message"}</p> 
    </div>
  )
}
