import { useState } from 'react';

const Home = () => {
    const [ blogs, setBlogs] = useState([
        {title: "Welcome", body: "paragraph sentence, etc.", author: "Me, myself and I", id: 1,}
    ]);

    return ( 
        <div className="home">
            <BlogList blogs={blogs} title={"All Blogs"}/>
        </div>
     );
}
 
export default Home;