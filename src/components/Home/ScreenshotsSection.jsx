import React from 'react';

const Screenshot = ({ image, caption }) => {
  return (
    <div className="mb-8 md:mb-0 md:mr-6">
      <img
        src={image}
        alt={caption}
        className="rounded-lg shadow-md"
      />
      <p className="text-gray-600 mt-2">{caption}</p>
    </div>
  );
};

const ScreenshotsSection = () => {
  const screenshotsData = [
    {
        image: 'https://clickup.com/blog/wp-content/uploads/2022/09/Zoho-Bug-Tracker-Tool-example.png', // Replace with actual image URL
        caption: 'Bug Tracking Dashboard',
      },
      {
        image: 'https://wiki.almworks.com/documentation/structure/files/latest/data-center-and-server/161843175/161843180/1/1663097957000/Issue+Details+-+Open.png', // Replace with actual image URL
        caption: 'Issue Details',
      },
      {
        image: 'https://htmlburger.com/blog/wp-content/uploads/2021/08/User-Dashboard-Example-04.png', // Replace with actual image URL
        caption: 'User Dashboard',
      },
  ];

  return (
    <section className="bg-light m-4 py-16 md:py-24">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-semibold mb-8">Screenshots</h2>
        <div className="flex flex-col md:flex-row space-y-6 md:space-y-0 md:space-x-6">
          {screenshotsData.map((screenshot, index) => (
            <Screenshot key={index} {...screenshot} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ScreenshotsSection;
