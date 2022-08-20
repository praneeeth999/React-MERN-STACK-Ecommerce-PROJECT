import React from 'react'
import styles from "../styles/Product.module.css";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { AiOutlineSearch } from "react-icons/ai";
import { AiOutlineHeart } from "react-icons/ai";
const Product = ({ item }) => {
    return (
        <div className={styles.container}>
            <div className={styles.circle}></div>
            <img src={item.img} alt="" />
            <div className={styles.info}>
                <div className={styles.icon}>
                    <AiOutlineShoppingCart />
                </div>
                <div className={styles.icon}>
                    <AiOutlineSearch />
                </div>
                <div className={styles.icon}>
                    <AiOutlineHeart />
                </div>

            </div>
        </div>
    )
}

export default Product