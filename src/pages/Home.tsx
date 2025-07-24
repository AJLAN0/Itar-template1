import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import FeaturedPhotos from '../components/FeaturedPhotos';
import Experience from '../components/Experience';
import Services from '../components/Services';
import WorkGallery from '../components/WorkGallery';
import Footer from '../components/Footer';
import { useCMSContext } from '../context/CMSContext';

const Home: React.FC = () => {
  const { content } = useCMSContext();
  console.log(content) 

  return (
  <>
    <Navbar />
    <Hero />
    <About />
    <FeaturedPhotos />
    <Experience />
    <Services />
    <WorkGallery />
    <Footer />
  </>
)};

export default Home; 