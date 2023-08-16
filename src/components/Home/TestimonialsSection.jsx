import React from 'react';

const Testimonial = ({ name, role, content, image }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-8 md:mb-0 md:mr-6">
      <div className="flex items-center mb-4">
        <img
          src={image}
          alt={name}
          className="h-12 w-12 rounded-full object-cover mr-4"
        />
        <div>
          <h4 className="text-lg font-semibold">{name}</h4>
          <p className="text-gray-600">{role}</p>
        </div>
      </div>
      <p className="text-gray-700">{content}</p>
    </div>
  );
};

const TestimonialsSection = () => {
  const testimonialsData = [
    {
      name: 'John Doe',
      role: 'Software Engineer',
      content:
        'Bug TrackerX has revolutionized the way we handle software bugs. It\'s intuitive, easy to use, and has greatly improved our project management workflow.',
      image: '/images/testimonial1.jpg', // Replace with actual image URL
    },
    {
      name: 'Jane Smith',
      role: 'Quality Assurance',
      content:
        'Bug TrackerX has made our bug tracking process seamless and efficient. The collaborative features and analytics tools are impressive and invaluable.',
      image: '/images/testimonial2.jpg', // Replace with actual image URL
    },
  ];

  return (
    <section className="bg-light m-4 py-16 md:py-24">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-semibold mb-8">Testimonials</h2>
        <div className="flex flex-col md:flex-row space-y-6 md:space-y-0">
          {testimonialsData.map((testimonial, index) => (
            <Testimonial key={index} {...testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
