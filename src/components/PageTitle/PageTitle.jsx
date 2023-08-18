import React from 'react';
import bg from '../../assets/bg image.jpeg'

const PageTitle = () => {
    return (
        <div className="relative h-36 bg-cover bg-center" style={{ backgroundImage: `url(${bg})` }}>
            <div className="absolute inset-0 bg-black opacity-50"></div>
            <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
                <h1 className="text-3xl font-bold mb-2">About Us</h1>
            </div>
        </div>
    );
};

export default PageTitle;