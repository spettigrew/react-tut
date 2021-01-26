import { useState } from 'react';
import BlogList from './BlogList';

const Home = () => {
    const [ blogs, setBlogs] = useState([
        {title: "Welcome", body: "paragraph sentence, etc.", author: "Me, myself and I", id: 1,}
    ]);

    return ( 
        <div className="home">
            <BlogList blogs={blogs} title="All Blogs" />
            <BlogList blogs={blogs.filter((blog) => blog.author === "Sara")} title="Sara's Blogs" />
        </div>
     );
}
 
export default Home;