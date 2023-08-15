import React from 'react';
import HeroSection from '../components/Home/HeroSection';
import FeaturesHighlights from '../components/Home/FeaturesHighlights';
import CtaSection from '../components/Home/CtaSection';
import HowItWorksSection from '../components/Home/HowItWorksSection';
import TestimonialsSection from '../components/Home/TestimonialsSection';
import ScreenshotsSection from '../components/Home/ScreenshotsSection';
import BlogSection from '../components/Home/BlogSection';
import ContactSection from '../components/Home/ContactSection';
// import Header from '../components/Home/Header';

const HomePage = () => {
    return (
        <div>
            {/* <Header/> */}
            <HeroSection />
            <FeaturesHighlights />
            <CtaSection />
            <HowItWorksSection />
            <TestimonialsSection />
            <ScreenshotsSection />
            <BlogSection />
            <ContactSection />
        </div>
    );
};

export default HomePage;