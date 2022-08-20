import React from 'react'
import styles from "../styles/Product_page.module.css";
import Navbar from '../components/Navbar';
import Anouncement from '../components/Anouncement';
import Newsletter from '../components/Newsletter';
import Footer from '../components/Footer';
import { GrAdd} from "react-icons/gr";
import { IoMdRemove} from "react-icons/io";
const Product = () => {
    
    return (
        <div className={styles.container}>
            <Navbar />
            <Anouncement />
            <div className={styles.wrapper}>
                <div className={styles.imgContainer}>
                    <img src="https://i.ibb.co/S6qMxwr/jean.jpg" alt="" />
                </div>
                <div className={styles.InfoContainer}>
                    <h1>Denim Jumpsuit</h1>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iste natus quae asperiores veniam reiciendis, illo omnis pariatur. Velit neque assumenda excepturi sunt fugiat, sapiente iste facere nostrum ab consequatur obcaecati?</p>
                    <span>$20</span>
                    <div className={styles.FilterContainer}>
                        <div className={StyleSheet.filter}>
                            <h4 className={styles.filterTitle}>Color</h4>
                            <div className={styles.colorDiv}>
                                <div className={styles.filterColor} style={{ backgroundColor: 'red' }}></div>
                                <div className={styles.filterColor} style={{ backgroundColor: 'blue' }}></div>
                                <div className={styles.filterColor} style={{ backgroundColor: 'black' }}></div>
                            </div>

                        </div>
                        <div className={StyleSheet.filter}>

                            <select name="" id="" className={styles.select}>
                                <option value="" selected disabled hidden>Size</option>
                                <option value="">XS</option>
                                <option value="">S</option>
                                <option value="">M</option>
                                <option value="">XL</option>
                            </select>
                        </div>
                    </div>
                    <div className={styles.AddContainer}>
                        <div className={styles.AmountContainer}>
                            <button className={styles.RemoveBtn}><IoMdRemove/></button>
                            <span className={styles.Amount}>1</span>
                            <button className={styles.AddBtn}><GrAdd/></button>
                        </div>
                        <button className={styles.CartBtn}>ADD TO CART</button>
                    </div>

                </div>
            </div>


            <Newsletter />
            <Footer />


        </div>

    )
}

export default Product