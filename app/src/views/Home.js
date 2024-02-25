import React,{Component} from "react";
import { Link } from 'react-router-dom';

class HomePage extends Component {
    render() {
        return (
            <div>
                <h1>Welcome (Name Placeholder)</h1>
                <div className="scholar">
                     <Link  to="/views/Grants">Grants and Scholarships</Link>
                </div>

                <div className="research">
                    <Link  to="/views/Research">Educational Papers</Link>
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
}

export default HomePage;