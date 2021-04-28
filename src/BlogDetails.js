import { useHistory, useParams } from 'react-router-dom';
import useFetch from './useFetch';


const  BlogDetails = () => {
    // route parameters from the router
    const{ id } =  useParams();
    const { data: blog, error, isPending } = useFetch('http://localhost:8000/blogs/' + id)
    const history = useHistory

    const handleClick= () => {
        fetch('http://localhost:8000/blogs/' + blog.id, {method: 'Delete'
    }).then(() => {
        history.push('/')
    })
    }
    return (
        <div className='blog-details'>
            {/* && = the thing on the right only outputs if the thing on the left is true */}
            { isPending && <div>Loading...</div> }
            { error && <div>{ error } </div>}
            {blog && (
                <article>
                    <h2>{ blog.title }</h2>
                    <p>Written by: { blog.author }</p>
                    <div>{ blog.body }</div>
                    <button onClick={handleClick}>delete</button>
                </article>
            )}
        </div>
    )
}

export default BlogDetails
