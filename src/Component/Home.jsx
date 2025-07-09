import React from 'react'
import Navbar from '../Pages/Navbar.jsx'
import Hero from '../Pages/Hero.jsx'
import ServicesSection from '../Pages/Service.jsx'
import ProjectsSection from '../Pages/Project.jsx'
import AboutUsSection from '../Pages/Aboutus.jsx'
import ContactUsSection from '../Pages/Contact.jsx'
import FAQSection from '../Pages/FAQ.jsx'
import Footer from '../Pages/Footer.jsx'

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
