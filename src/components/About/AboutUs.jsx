import React from 'react';

const AboutUs = () => {
    return (
        <div className='p-20 space-y-20'>
            <div className='flex gap-7'>
                <img className='w-5/12 rounded shadow-lg' src="../../assets/about 1.png" alt="" />
                <div className='w-7/12'>
                    <h1 className='text-3xl font-bold mb-3'>About Track Minder: Nurturing Seamless Issue Resolution</h1>
                    <p>Welcome to the About Us page of Track Minder, your dedicated partner in efficient issue tracking and resolution. Our story revolves around the idea of simplifying the user experience when it comes to addressing concerns. Track Minder was born from a vision to provide a platform where users could effortlessly log their issues and witness their transformation into resolved matters. With innovation at our core, we've assembled a team of dedicated problem solvers who are passionate about ensuring your experience is nothing less than exceptional. Join us as we share our journey of evolving from a simple concept to a reliable haven for issue management, all under the banner of Track Minder.</p>
                </div>
            </div>
            <div className='flex gap-7'>
                
                <div className='w-7/12'>
                    <h1 className='text-3xl font-bold mb-3'>Empowering You with Track Minder: Your Issue Management Ally</h1>
                    <p>Explore the essence of Track Minder on this About Us page, where we reveal our commitment to empowering users through effective issue management. At Track Minder, we understand the frustration of unresolved problems and have dedicated ourselves to providing a platform that not only captures your concerns but also transforms them into actionable solutions. Our journey is a testament to collaboration, innovation, and constant refinement. We value your feedback, harness the latest technological advancements, and cultivate a culture of excellence to ensure that Track Minder remains your trusted ally in seamlessly navigating the realm of issue tracking and resolution.</p>
                </div>
                <img className='w-5/12 rounded shadow-lg' src="../../assets/about 1.png" alt="" />
            </div>
        </div>
    );
};

export default AboutUs;