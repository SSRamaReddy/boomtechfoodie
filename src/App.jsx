import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Banner from './components/Banner/Banner';
import Services from './components/Services/Services';
import CoverBanner from './components/CoverBanner/CoverBanner';
import AppStore from './components/AppStore/AppStore';
import Testimonial from './components/Testimonal/Testimonal';
import Footer from './components/Footer/Footer';

const App = () => {
  return (
    <>
      <div className="bg-white dark:bg-gray-900 dark:text-white duration-200">
        <Navbar/>
        <Banner/>
        <Services/>
        <CoverBanner/>
        <AppStore/>
        <Testimonial/>
        <Footer/>
      </div>
      
    
    </>
  )
}

export default App
