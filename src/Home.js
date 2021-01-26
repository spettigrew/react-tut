import { useState } from 'react';
import BlogList from './BlogList';

const Home = () => {
    const [ blogs, setBlogs] = useState([
        {title: "Welcome", body: "paragraph sentence, etc.", author: "Me, myself and I", id: 1,}
    ]);

    const handleDelete = (id) => { 
        const newBlogs = blogs.filter(blog => blog.id !== id);
        setBlogs(newBlogs);
    }

    return ( 
        <div className="home">
            <BlogList blogs={blogs} title="All Blogs" handleDelete={handleDelete} />
            
        </div>
     );
}
 
export default Home;