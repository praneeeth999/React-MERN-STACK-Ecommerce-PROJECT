import React, {useLocation,useState} from 'react'
import styles from "../styles/ProductList.module.css"
import Navbar from "../components/Navbar"
import Anouncement from "../components/Anouncement"
import Products from "../components/Products"
import Newsletter from "../components/Newsletter"
import Footer from "../components/Footer"
const ProductList = () => {
    const location=useLocation();
    const cat=location.pathname.split('/')[2]
    const [filters,setFilters]=useState({})
    const [sort,setSort]=useState('newest');
    const handlefilters =(e)=>{
          const value=e.target.value;
          setFilters({
            ...filters,
            [e.target.name]:value,
          });
    };
    
    return (
        <div className={styles.container}>
            <Navbar />
            <Anouncement />
            <h1>Dresses</h1>
            <div className={styles.FilterContainer}> 
                <div className={styles.Filter}><span>Filter Products:</span>
                   <select name="color" id="" onChange={handlefilters}>
                    <option value="">white</option>
                    <option value="">black</option>
                    <option value="">red</option>
                    <option value="">blue</option>
                    <option value="">yellow</option>
                    <option value="">green</option>
                    <option value=""selected disabled hidden>color</option>
                    </select>
                    <select name="size" id="" onChange={handlefilters}>
                    <option value=""><s></s></option>
                    <option value="">m</option>
                    <option value="">l</option>
                    <option value="">xl</option>
                    <option value="">xxl</option>
                    <option value=""selected disabled hidden>Size</option>
                    </select></div>
                <div className={styles.Filter}><span>Sort Products:</span>
                <select name="" id="" onChange={(e)=> setSort(e.target.value)}>
                <option value="asc">price(asc)</option>
                    <option value="desc">price(desc)</option>
                    <option value="newest"selected disabled hidden>Newest</option>
                </select>
                </div>

            </div>
            <Products cat={cat} filters={filters} sort={sort}/>
            <Newsletter />
            <Footer />
        </div>

    )
}

export default ProductList
