import { useState } from 'react';

const Home = () => {
    const [ blogs, setBlogs] = useState([
        {title: "", body: "", author: "", id: 1,}
    ]);

    return ( 
        <div className="home">
            {blogs.map((blog) => (
                <div className="blog-preview" key={blog.id}>
                    <h2>{ blog. title }</h2>
                    <p> Written by: { blog.author }</p>
                </div>
            ))}
        </div>
     );
}
 
export default Home;