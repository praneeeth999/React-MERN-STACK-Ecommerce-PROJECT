import React from 'react'
import Anouncement from "../components/Anouncement";
import Categories from '../components/Categories';
import Navbar from '../components/Navbar';
import Slider from "../components/Slider";
import Products from "../components/Products";
import Newsletter from "../components/Newsletter";
import Footer from '../components/Footer';

const Home = () => {
  return <> <Anouncement/>
             <Navbar/> 
             <Slider/>
             <Categories/>
             <Products/>
             <Newsletter/>
             <Footer/>
             </>
          
           }

export default Home;