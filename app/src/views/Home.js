import React,{Component} from "react";

class HomePage extends Component {
    render() {
        return (
            <div>
                <h1>Melanin Mindset</h1>
                <div>
                    <p>Welcome to the Home Page!</p>
                    <button onClick={() => console.log('/')}>Home</button>
                </div>
            </div>
        );
    }
}

export default HomePage;