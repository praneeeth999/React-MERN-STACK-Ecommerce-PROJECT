import React from 'react'
import styles from "../styles/Footer.module.css"
import { BsFacebook} from "react-icons/bs";
import { BsInstagram} from "react-icons/bs";
import {BsTwitter } from "react-icons/bs";
import {BsPinterest} from "react-icons/bs";
import {FiMapPin} from "react-icons/fi";
import {BsTelephoneOutboundFill} from "react-icons/bs";
import {AiFillMail} from "react-icons/ai";

const Footer = () => {
    return (
        <div className={styles.container}>
            <div className={styles.left}>
                <h1>LAMA.</h1>
                <p>There are many variations of passages of Lorem Ipsum    available, but
                    the majority have suffered alteration in some form, by injected
                    humour, or randomised words which dont look even slightly believable.</p>
                       <div className={styles.socialContainer}>
                        <div className={styles.socialIcon}>
                            <BsFacebook/>
                        </div>
                        <div className={styles.socialIcon }>
                            <BsInstagram/>
                        </div>
                        <div className={styles.socialIcon }>
                            <BsTwitter/>
                        </div>
                        <div className={styles.socialIcon }>
                            <BsPinterest/>
                        </div>
                       </div>
            </div>
            <div className={styles.center}>
               <h3>useful Links</h3>
               <ul>
                <li> Home</li>
                <li>Cart</li>
                <li>Man Fashion</li>
                <li>woman fashion</li>
                <li>Accesries</li>
                <li>My Account</li>
                <li>Order Tracking</li>
                <li>Wishlist</li>
                <li>Wishlist</li>
                <li>Terms</li>
            
               </ul>
            </div>
            <div className={styles.right}>
            <h3>Contact</h3>
              <div className={styles.contactItem}> 
              <FiMapPin style={{marginRight:"10px"}}/>Building No 622/21 kukatapally ,Hyderbad 5053001
              </div>
              <div className={styles.contactItem}> 
              <BsTelephoneOutboundFill style={{marginRight:"10px"}}/>+91 234 56 78
              </div>
              <div className={styles.contactItem}> 
              <AiFillMail style={{marginRight:"10px"}}/>contact@sunny.dev
              </div>
              <img src="https://i.ibb.co/Qfvn4z6/payment.png" alt="" />
            </div>
        </div>
    )
}

export default Footer