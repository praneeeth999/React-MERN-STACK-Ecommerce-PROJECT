import React, { useState } from "react";
import styles from "../styles/Slider.module.css";
import { IoMdArrowDropleft } from "react-icons/io";
import { IoMdArrowDropright } from "react-icons/io";
import { sliderItems } from "../data";



const Slider = () => {
  const [slideIndex, setSlideIndex] = useState(1);
  const handleClick = (direction) => {
    if (direction === "right") {
      setSlideIndex(slideIndex !==sliderItems.length ? slideIndex +1 :3);
    } else {
      setSlideIndex(slideIndex !== 1 ? slideIndex - 1: 1);
    }
  };
return (
  <div className={styles.container}>
    <div className={`${styles.arrowLeft} ${styles.arrow}`}  direction="left" onClick={() => handleClick("left")} >
      <IoMdArrowDropleft />
    </div>
    <div className={styles.wrapper}>
      {sliderItems.map(item => (
        <div className={styles.slide} >
          <div className={styles.imagecontainer}>
            <img src={item.img} alt="" />
          </div>
          <div className={styles.infocontainer}>
            <h1 className={styles.title}>{item.title}</h1>
            <p className={styles.desc}>{item.desc}</p>
            <button className={styles.slider_btn}>SHOP NOW</button>
          </div>
        </div>
      ))}
    </div>
    <div className={`${styles.arrowRight} ${styles.arrow}`} direction="right" onClick={() => handleClick("right")}>
      <IoMdArrowDropright />
    </div>
  </div>




);
}


export default Slider;
