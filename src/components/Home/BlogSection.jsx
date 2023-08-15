import { useEffect, useState } from "react";
import BlogCard from "./BlogCard";

const BlogSection = () => {

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch('posts.json')
    .then(res => res.json())
    .then(data => setPosts(data))
  },[])
  return (
    <div className="grid grid-cols-3 gap-6 px-20">
      {
        posts.map((post, index) => <BlogCard 
          key={index}
          post={post}
        ></BlogCard>)
      }
    </div>
  );
};

export default BlogSection;