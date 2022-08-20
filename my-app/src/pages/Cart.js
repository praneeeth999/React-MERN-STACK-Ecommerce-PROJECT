import React from 'react';
import styles from "../styles/Cart.module.css";
import Navbar from "../components/Navbar"
import Anouncement from "../components/Anouncement"
import Footer from "../components/Footer"
import { GrAdd } from "react-icons/gr";
import { IoMdRemove } from "react-icons/io";

const cart = () => {
    return (
        <div className={styles.container}>
            <Navbar />
            <Anouncement />
            <div className={styles.wrapper}>
                <h1>YOUR BAG</h1>
                <div className={styles.top}>
                    <button className={styles.TopButton}>CONTINUE SHOPPING</button>
                    <div className={styles.TopTexts}>
                        <span className={styles.textSpan}>Shopping Bag(2)</span>
                        <span className={styles.textSpan}>Your Wishlist</span>
                    </div>
                    <button className={styles.TopButton}>CHECKOUT NOW</button>
                </div>
                <div className={styles.bottom}>
                    <div className={styles.Info}>
                        <div className={styles.product}>
                            <div className={styles.productDetail}>
                                <img src="https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1614188818-TD1MTHU_SHOE_ANGLE_GLOBAL_MENS_TREE_DASHERS_THUNDER_b01b1013-cd8d-48e7-bed9-52db26515dc4.png?crop=1xw:1.00xh;center,top&resize=480%3A%2A" alt="" />
                                <div className={styles.details}>
                                    <span className={styles.productName}><b>Product:</b> THUNDER SHOES</span>
                                    <span className={styles.productId}><b>ID:</b> 9323344355</span>
                                    <span className={styles.productColor}></span>
                                    <span className={styles.productId}><b>Size:</b>37.5</span>
                                </div>
                            </div>
                            <div className={styles.priceDetail}>
                                <div className={styles.ProductAmountContainer}>
                                    <GrAdd />
                                    <div className={styles.ProductAmount}>2</div>
                                    <IoMdRemove />
                                </div>
                                <div className={styles.ProductPrice}>$ 30</div>

                            </div>
                        </div>
                        <hr />
                        {/* sda */}
                        <div className={styles.product}>
                            <div className={styles.productDetail}>
                                <img src="https://i.pinimg.com/originals/2d/af/f8/2daff8e0823e51dd752704a47d5b795c.png" alt="" />
                                <div className={styles.details}>
                                    <span className={styles.productName}><b>Product:</b> Plain T-shirt</span>
                                    <span className={styles.productId}><b>ID:</b> 57575775765</span>
                                    <span className={styles.productColor2}></span>
                                    <span className={styles.productId}><b>Size:</b>M</span>
                                </div>
                            </div>
                            <div className={styles.priceDetail}>
                                <div className={styles.ProductAmountContainer}>
                                    <GrAdd />
                                    <div className={styles.ProductAmount}>1</div>
                                    <IoMdRemove />
                                </div>
                                <div className={styles.ProductPrice}>$ 2</div>

                            </div>
                        </div>
                    </div>
                    <div className={styles.Summary}>
                        <h1 className={styles.SummaryTitle}>ORDER SUMMARY</h1>
                        <div className={styles.SummaryItem}>
                            <span className={styles.SummaryItemText}>Subtotal</span>
                            <span className={styles.SummaryItemText}>$80</span>
                        </div>
                        <div className={styles.SummaryItem}>
                            <span className={styles.SummaryItemText}>Estimated Shipping</span>
                            <span className={styles.SummaryItemText}>$5.90</span>
                        </div>
                        <div className={styles.SummaryItem}>
                            <span className={styles.SummaryItemText}>Shipping Discount</span>
                            <span className={styles.SummaryItemText}>$-5.90</span>
                        </div>
                        <div className={styles.SummaryItem}>
                            <span className={`${styles.SummaryItemText} ${styles.total}`}>Total</span>
                            <span className={`${styles.SummaryItemText} ${styles.SummaryAmount}`}>$80</span>
                        </div>
                        <button className={styles.SummaryBtn}>CHECKOUT NOW</button>
                    </div>
                    
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default cart