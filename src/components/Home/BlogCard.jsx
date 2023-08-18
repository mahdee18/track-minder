import { Link } from "react-router-dom";

const BlogCard = ({ post }) => {
    // console.log(post.title)
    return (
        <div className="p-5 rounded shadow-md">
            <img className="w-full h-56" src={post.image} alt="" />
            <div className="mt-4">
                <h2 className="text-2xl font-bold">{post.title}</h2>
                <h4 className="my-3">{post.publish_date}</h4>
                <p className="mb-2">{post.description.slice(0, 160)}... </p>
                <Link to={`/singleBlog/${post.id}`} className="text-primary underline mt-5">Read More</Link>
            </div>
        </div>
    );
};

export default BlogCard;