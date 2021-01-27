import { useState, useEffect } from 'react';
import BlogList from './BlogList';

const Home = () => {
    const [ blogs, setBlogs] = useState([
        {title: "Welcome", body: "paragraph sentence, etc.", author: "Me, myself and I", id: 1,}
    ]);

    const [name, setName] = useState('Sara');

    const handleDelete = (id) => { 
        const newBlogs = blogs.filter(blog => blog.id !== id);
        setBlogs(newBlogs);
    }
    // runs a function after every render
    useEffect(() => {
        console.log('use effect');
    }, [name]);

    return ( 
        <div className="home">
            <BlogList blogs={blogs} title="All Blogs" handleDelete={handleDelete} />
            <button onClick={() => setName('she')}>change name</button>
            <p>{ name }</p>
            
        </div>
     );
}
 
export default Home;