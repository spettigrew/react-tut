import { useState } from 'react';

const Home = () => {
    const [ name, setName] = useState('her');
    const [ age, setAge ] = useState(30)

    const handleClick = (e) => {
        setName('she');
        setAge(40);
    }

    return ( 
        <div className="home">
            <h2>Homepage</h2>
            <p>{ name } is { age } is old.</p>
            <button onClick={handleClick}>Click Here</button>
        </div>
     );
}
 
export default Home;