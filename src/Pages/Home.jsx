import React from 'react'
import ModelSearch from '../Components/Home/ModelSearch/ModelSearch'
import Hero from '../Components/Home/Hero/Hero'
import FeatursStart from '../Components/Home/FeatursStart/FeatursStart'
import FruitsShop from '../Components/Home/FruitsShop/FruitsShop'
import ProductCart from '../Components/Home/ProductCart/ProductCart'
import BannerSection from '../Components/Home/BannerSection/BannerSection'
import BestsalerProduct from '../Components/Home/BestsalerProduct/BestsalerProduct'
import FactStart from '../Components/Home/FactStart/FactStart'
import Tastimonial from '../Components/Home/Tastimonial/Tastimonial'
import VesitableShop from '../Components/Home/VesitableShop/VesitableShop'

const Home = () => {
    return (
        <>
            <ModelSearch />
            <Hero />
            <FeatursStart />
            <FruitsShop />
            <ProductCart />
            <VesitableShop />
            <BannerSection />
            <BestsalerProduct />
            <FactStart />
            <Tastimonial />
        </>
    )
}

export default Home
