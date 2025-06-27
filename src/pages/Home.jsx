import React from 'react'
import Hader from '../components/Hader/Hader'
import Navbar from '../components/Navbar/Navbar'
import Banner from '../components/Banner/Banner'
import Categories from '../components/Categories/Categories'
import Products from '../components/Products/Products'
import Experience from '../components/Experience/Experience'
import OurProducts from '../components/OurProducts/OurProducts'
import Arrival from '../components/Arrival/Arrival'
import Fast from '../components/Fast/Fast'
import Footer from '../components/Footer/Footer'

const Home = () => {
  return (
    <>
        <Hader />
        <Navbar />
        <Banner />
        <Categories />
        <Products />
        <Experience/>
        <OurProducts/>
        <Arrival />
        <Fast/>
        <Footer />
    </>
  )
}

export default Home