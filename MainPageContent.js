import React from 'react';
import Slider from './Slider';
import NewCollectionProfileCard from './NewCollectionProfileCard';
import BlogSection from './BlogSection';
import TrustSeals from './TrustSeals';
import Promotions from './Promotions';
import Features from './Features';
import ShopSmarter from './ShopSmarter';
import ScrollToTop from './ScrollToTop';


const MainPageContent = () => {
  return (
    <div>
      <ShopSmarter/>
      <Slider />
      <Features/>
      <NewCollectionProfileCard />
      <Promotions/>
      <BlogSection />
      <TrustSeals/>
      <ScrollToTop/>
      
      
    </div>
  );
};

export default MainPageContent;
