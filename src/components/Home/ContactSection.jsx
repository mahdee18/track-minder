import React from 'react';

const ContactSection = () => {
    return (
        <section className="bg-primary text-light py-16 md:py-24">
            <div className="container mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-semibold mb-4">Contact Us</h2>
                <p className="text-lg md:text-xl text-tertiary mb-8">
                    Have questions? Reach out to us for more information.
                </p>
                <div className="grid grid-cols-2">
                    <div className="flex flex-col md:flex-row space-y-6 md:space-y-0 md:space-x-8">
                        <div className="flex items-center">
                            <i className="fas fa-map-marker-alt text-secondary text-xl"></i>
                            <p className="ml-4">123 Main Street, City, Country</p>
                        </div>
                        <div className="flex items-center">
                            <i className="fas fa-envelope text-secondary text-xl"></i>
                            <p className="ml-4">info@bugtrackerx.com</p>
                        </div>
                        <div className="flex items-center">
                            <i className="fas fa-phone-alt text-secondary text-xl"></i>
                            <p className="ml-4">+123 456 7890</p>
                        </div>
                    </div>
                    <div className="mt-12">
                        <form className="flex flex-col items-center md:items-start">
                            <input
                                type="text"
                                placeholder="Your Name"
                                className="w-full md:w-80 bg-light text-dark border-2 border-secondary py-2 px-4 rounded-lg mb-4"
                            />
                            <input
                                type="email"
                                placeholder="Your Email"
                                className="w-full md:w-80 bg-light text-dark border-2 border-secondary py-2 px-4 rounded-lg mb-4"
                            />
                            <textarea
                                placeholder="Your Message"
                                className="w-full md:w-80 bg-light text-dark border-2 border-secondary py-4 px-4 rounded-lg h-32 resize-none mb-4"
                            ></textarea>
                            <button
                                type="submit"
                                className="bg-secondary text-tertiary hover:bg-dark py-3 px-8 rounded-full transition duration-300"
                            >
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactSection;
