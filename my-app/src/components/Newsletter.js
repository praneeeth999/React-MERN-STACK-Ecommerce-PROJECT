import React from 'react'
import { IoSendSharp } from "react-icons/io5";
import styles from "../styles/Newsletter.module.css"
const Newsletter = () => {
    return (
        <div className={styles.container}>
            <h1>Newsletter</h1>
            <div className={styles.desc}>
             Get timely updates from your favourite products.
            </div>
            <div className={styles.inputcontainer}>
                <input type="text" placeholder='Your Email'/>
                <button><IoSendSharp/></button>
            </div>
            
        </div>
    )
}

export default Newsletter