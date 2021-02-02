import { useState, useEffect } from 'react';
import BlogList from './BlogList';

const Home = () => {
    const [blogs, setBlogs] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null)
    // runs a function after every render
    useEffect(() => {
        if(!res.ok) {
            throw Error("No data for that resource");
        }
        fetch('http://localhost:8000/blogs')
        .then(res => {
             return res.json();
        })
        .then(data => {
            setBlogs(data);
            setIsLoading(false);
            setError(null);
        })
        // catches a network error
        .catch(err => {
            setIsLoading(false)
            setError(err.message)
        })
    }, []);

    return ( 
        <div className="home">
            {/* blogs && = conditional template to evaluate the right or left side of the && */}
            {error && <div>{ erorr }</div>}
            { isLoading && <div>Loading...</div> }
            {blogs && <BlogList blogs={blogs} title="All Blogs" />}
            
        </div>
     );
} 
export default Home;