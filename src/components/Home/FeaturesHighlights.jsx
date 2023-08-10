import React from 'react';

const Feature = ({ icon, title, description }) => {
  return (
    <div className="flex items-center mb-6">
      <div className="bg-secondary rounded-full p-3 mr-4">
        <i className={`text-tertiary ${icon} text-xl`}></i>
      </div>
      <div>
        <h3 className="text-lg md:text-xl font-semibold mb-2">{title}</h3>
        <p className="text-tertiary">{description}</p>
      </div>
    </div>
  );
};

const FeaturesHighlights = () => {
  const featuresData = [
    {
      icon: 'fas fa-bug',
      title: 'Efficient Bug Tracking',
      description: 'Track and manage software bugs seamlessly with our intuitive interface.',
    },
    {
      icon: 'fas fa-tasks',
      title: 'Project Collaboration',
      description: 'Collaborate with your team members to resolve bugs and ensure project success.',
    },
    {
      icon: 'fas fa-chart-line',
      title: 'Detailed Analytics',
      description: 'Get insights into bug trends, priorities, and team performance.',
    },
  ];

  return (
    <section className="bg-light py-16 md:py-24">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-semibold mb-8">Features Highlights</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {featuresData.map((feature, index) => (
            <Feature key={index} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesHighlights;
