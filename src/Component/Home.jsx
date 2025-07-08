import React from 'react'
import Navbar from '../pages/Navbar'
import Hero from '../pages/Hero'
import ServicesSection from '../pages/Service'
import ProjectsSection from '../pages/Project'
import AboutUsSection from '../pages/Aboutus'
import ContactUsSection from '../pages/Contact'
import FAQSection from '../pages/FAQ'
import Footer from '../pages/Footer'

const Home = () => {
  return (
    <div>
      <Navbar/>
   
      <div id='Hero'>

      <Hero/>
      </div>
       <div id='Services'>

      <ServicesSection/>
      </div>

      <div id='Projects'>
        <ProjectsSection/>

      </div>
      <div id='about'>
        <AboutUsSection/>
      </div>
      <div id='contact'>
        <ContactUsSection/>
      </div>
      
      <div id='Faq'>
       <FAQSection/>
      </div>
     <Footer/> 
    </div>
  )
}

export default Home
