import React from 'react'
import Hader from '../components/Hader/Hader'
import Navbar from '../components/Navbar/Navbar'
import Banner from '../components/Banner/Banner'
import Categories from '../components/Categories/Categories'
import Products from '../components/Products/Products'
import Experience from '../components/Experience/Experience'

const Home = () => {
  return (
    <>
        <Hader />
        <Navbar />
        <Banner />
        <Categories />
        <Products />
        <Experience/>
    </>
  )
}

export default Home