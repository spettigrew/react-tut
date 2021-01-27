import { useState, useEffect } from 'react';
import BlogList from './BlogList';

const Home = () => {
    const [ blogs, setBlogs] = useState(null);

    const handleDelete = (id) => { 
        const newBlogs = blogs.filter(blog => blog.id !== id);
        setBlogs(newBlogs);
    }
    // runs a function after every render
    useEffect(() => {
        fetch('http://localhost:8000/blogs')
        .then(res => {
             return res.json()
        })
        .then(data => {
            setBlogs(data);
        })
    }, []);

    return ( 
        <div className="home">
            {/* blogs && = conditional template to evaluate the right or left side of the &&& */}
            {blogs && <BlogList blogs={blogs} title="All Blogs" handleDelete={handleDelete} />}
            
        </div>
     );
}
 
export default Home;