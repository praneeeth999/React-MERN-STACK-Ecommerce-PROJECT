import React from 'react'
import styles from "../styles/CategoryItem.module.css";
import {Link} from "react-router-dom";

const CategoryItem = ({item}) => {
  return (
    <div className={styles.container}>
      <Link to={`/products/${item.cat}`}>
     <img src={item.img} alt="" />
     <div className={styles.info}>
        <h1>{item.title}</h1>
        <button>SHOP NOW</button>
     </div>
     </Link>
    </div>
  )
}

export default CategoryItem