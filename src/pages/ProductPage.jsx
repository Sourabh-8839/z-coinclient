import React from 'react'
import ProductHeroSection from '../components/productComponent/ProductHeroSection'
import ProductOverview from '../components/productComponent/ProductOverview'
import DealOfWeek from '../components/productComponent/DealOfWeek'
import FeaturedProductSection from '../components/productComponent/FeaturedProductSection'
import PopularBrands from '../components/productComponent/PopularBrands'
import MarketPlaceSection from '../components/productComponent/MarketPlaceSection'
import BestSellerSection from '../components/productComponent/BestSellerSection'
import SubscribeSection from '../components/productComponent/SubscribeSection'

const ProductPage = () => {
  return (
    <div>
     <ProductHeroSection />
            <ProductOverview />
            <DealOfWeek />
            <FeaturedProductSection />
           <PopularBrands />
            <MarketPlaceSection />
           <BestSellerSection />
            <SubscribeSection /> 
    </div>
  )
}

export default ProductPage
