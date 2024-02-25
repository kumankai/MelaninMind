import React,{ useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import Nav from '../component/nav.js';

function HomePage() {
    const [name, setName] = useState('');

    useEffect(() => {
        const storedName = localStorage.getItem('name');
        if (storedName) {
            setName(storedName);
        }
    }, []);

    return (
        <div>
            <Nav/>

            <h1>Welcome {name ? name : ''}</h1>
            <div className="scholar">
                    <Link  to="/views/Grants">Grants and Scholarships</Link>
            </div>

            <div className="research">
                <Link  to="/views/Research">Scholarly Articles</Link>
            </div>
            <div className="health">
                <Link  to="">Mental Health</Link>
            </div>
            <div className="houseing">
                <Link  to="/views/">Housing</Link>
            </div>
            <div className="social">
                <Link  to="/views/">Social Eats</Link>
            </div>
            <div className="community">
                <Link  to="/views/">Find Community</Link>
            </div>
        </div>
    );
}

export default HomePage;