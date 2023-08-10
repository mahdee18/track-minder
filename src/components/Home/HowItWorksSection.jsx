import React from 'react';

const HowItWorksSection = () => {
  const stepsData = [
    {
      title: 'Submit Bug Reports',
      description: 'Users can easily submit bug reports with detailed information.',
    },
    {
      title: 'Track Progress',
      description: 'Monitor the status of each bug as it gets resolved.',
    },
    {
      title: 'Collaborate and Resolve',
      description: 'Collaborate with team members to efficiently resolve bugs.',
    },
  ];

  return (
    <section className="bg-gray-100 py-16 md:py-24">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-semibold mb-8">How It Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {stepsData.map((step, index) => (
            <div key={index} className="p-6 bg-white rounded-lg shadow-md">
              <div className="mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-12 w-12 mx-auto text-primary"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 2a8 8 0 100 16 8 8 0 000-16zm0 14a6 6 0 110-12 6 6 0 010 12zm0-8a1 1 0 110-2 1 1 0 010 2z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
