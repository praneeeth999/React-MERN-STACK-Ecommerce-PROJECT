import React from 'react'
import {categor} from "../data";
import CategoryItem from './CategoryItem';
import styles from "../styles/Categories.module.css";
const Categories = () => {
  return (
    <div className={styles.container}>
        {categor.map(item=>(
            <CategoryItem item={item} key={item.id}/>
        ))}
    </div>
  )
}

export default Categories