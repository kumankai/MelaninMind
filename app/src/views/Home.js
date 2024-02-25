import React,{ useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import '../css/Home.css';

function HomePage() {
    const [name, setName] = useState('');

    useEffect(() => {
        const storedName = localStorage.getItem('name');
        if (storedName) {
            setName(storedName);
        }
    }, []);

    return (
        <div className="home">
          
            <h1 className="welcome">Welcome {name ? name : ''}</h1>

            <div className="all">
                <div className="top-row">
                    <div className="scholar">
                            <Link  to="/views/Grants">Grants and Scholarships</Link>
                    </div>

                    <div className="research">
                        <Link  to="/views/Research">Scholarly Articles</Link>
                    </div>
                    <div className="health">
                        <Link  to="">Mental Health</Link>
                    </div>
                </div>
                <div className="bottom-row">
                    <div className="housing">
                        <Link  to="/views/">Housing</Link>
                    </div>
                    <div className="social">
                        <Link  to="/views/">Social Eats</Link>
                    </div>
                    <div className="community">
                        <Link  to="/views/">Find Community</Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HomePage;