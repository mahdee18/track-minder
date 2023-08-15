
const BlogPost = ({ title, date, excerpt, image }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-6">
      <img src={image} alt={title} className="mb-4" />
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600 mb-4">{date}</p>
      <p className="text-gray-700">{excerpt}</p>
    </div>
  );
};

const BlogSection = () => {
  const blogPostsData = [
    {
      title: 'How to Efficiently Track Bugs in Your Projects',
      date: 'July 15, 2023',
      excerpt:
        'Learn about the best practices and tools for tracking and managing bugs in your software projects.',
      image: 'https://kissflow.com/hubfs/How-Bug-Tracking-System-Helps-You-Manage-Projects-Better.jpg', // Replace with actual image URL
    },
    {
      title: 'Collaborative Bug Resolution: Tips for Team Success',
      date: 'June 28, 2023',
      excerpt:
        'Discover strategies and techniques to ensure successful bug resolution through collaboration.',
      image: 'https://lh3.googleusercontent.com/aCL-2KYfVXGDM4_yClpO0JbDrc1LlaCtN-OanSSqGoJY5Mpgycm7061XF3q0WN_NytMAiNZjjJuCQcAcqL29jpFn7QYmXrefuNlP4GgvUsRI65nuaFmhBvEU9QmP2cPwWJJgdlw-', // Replace with actual image URL
    },
  ];

  return (
    <section className="bg-light py-16 md:py-24 px-20">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-semibold mb-8">Latest Blog Posts</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {blogPostsData.map((post, index) => (
            <BlogPost key={index} {...post} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
