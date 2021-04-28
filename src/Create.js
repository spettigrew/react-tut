import { useState } from 'react';
import {useHistory} from 'react-router-dom';

const Create = () => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('name');
    const [isPending, setIsPending] = useState(false)

    const history = useHistory()

    const handleSubmit = (e) => {
        e.preventDefault(); 
        const blog = { title, body, author };

        // fetch request to make a new blog
        fetch('http://localhost:8000/blogs', {
            method: 'POST',
            headers: { "Content-Type": "application/json"},
            body: JSON.stringify(blog)
        }).then(() => {
            console.log('new blog added')
            setIsPending(false);
            history.push('/')
        })
    }

    return ( 
        <div className="create">
            <h2>Add a New Blog</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    Blog title:
                    </label>
                    <input 
                    type='text'
                    required
                    // dynamic value = {}. Title empty ''
                    value={title}
                    // updates the state of the title, after updating the value
                    onChange={(e) => setTitle(e.target.value)}
                    />
                    <label>Blog body:</label>
                    <textarea 
                    required>
                        value={body}
                        onChange={(e) => setBody(e.target.value)}
                    </textarea>
                    <label>Blog author:</label>
                    <select
                    value={author}
                    // take in the event function
                    onChange={(e) => setAuthor(e.target.value)}
                    >
                        <option value="name">name</option>
                        <option value="your name">your name</option>
                        <button>Add Blog</button>
                  </select>
            </form>
        </div>
     );
}
 
export default Create;