const Create = () => {
    const [title, setTitle] = useState('');

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
                    onChange={() => setTitle()}
                    />
                    <label>Blog body:</label>
                    <textarea 
                    required>
                    </textarea>
                    <label>Blog author:</label>
                    <select>
                        <option value="name">name</option>
                        <option value="your name">your name</option>
                        <button>Add Blog</button>
                    </select>
            </form>
        </div>
     );
}
 
export default Create;