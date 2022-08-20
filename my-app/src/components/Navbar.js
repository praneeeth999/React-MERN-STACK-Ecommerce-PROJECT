import React  from 'react'
import styles from "../styles/Navbar.module.css"
import { FiSearch } from "react-icons/fi";
import { AiOutlineShoppingCart } from "react-icons/ai";

const Navbar = () => {

  return <div className={styles.container}>

     <div className={styles.nav_div}>

      <div className={styles.left}><span>EN</span>
        <input type="text" />
        <FiSearch style={{ position:"relative",top:"3px",color:"gray",fontSize:"16px",}}/></div>
        
      <div className={styles.center}><h1>RRR.</h1>
      </div>
      <div className={styles.right}>
      <a href="ds">REGISTER</a>
      <a href="sad">SIGN IN</a>
      <AiOutlineShoppingCart className={styles.cart}/>

      </div>

     </div>
  </div>
  
}

export default Navbar;