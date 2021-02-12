const Create = () => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('name');

    return ( 
        <div className="create">
            <h2>Add a New Blog</h2>
            <form>
                <label>
                    Blog title:
                    </label>
                    <input 
                    type='text'
                    required
                    value={title}
                    // updates the state of the title 
                    onChange={() => setTitle(e.target.value)}
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
                    onChange={(e) => setAuthor(e.target.value)}
                    >
                        <option value="name">name</option>
                        <option value="your name">your name</option>
                        <button>Add Blog</button>
                        <p>{ title }</p>
                        <p>{ body }</p>
                        <p> { author }</p>
                    </select>
            </form>
        </div>
     );
}
 
export default Create;