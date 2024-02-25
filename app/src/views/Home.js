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
        <div id="home">
          
            <h1 className="welcome">Welcome {name ? name : ''}</h1>

            <div id="all">
                <div id="top-row">
                    <div id="scholar">
                            <Link className="scholarClass" to="/chat">Grants and Scholarships</Link>
                    </div>

                    <div id="research">
                        <Link className="researchClass" to="/views/Research">Scholarly Articles</Link>
                    </div>
                    <div id="health">
                        <Link className="healthClass" to="">Mental Health</Link>
                    </div>
                </div>
                <div id="bottom-row">
                    <div id="housing">
                        <Link className="housingClass" to="/views/">Housing</Link>
                    </div>
                    <div id="social">
                        <Link className="socialClass" to="/views/">Social Eats</Link>
                    </div>
                    <div id="community">
                        <Link className="communityClass" to="/views/">Find Community</Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HomePage;