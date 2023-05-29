import React from 'react';
import { useState } from 'react';
import '../css/App.css';
import { Home } from './home';
import { Stats } from './stats';
import { Navigation } from './navigation';

const App: React.FC = () => {
    const [active, setActive] = useState("Home");
   
    let content = null;
    if (active === "Home") {
        content = <Home />;
    } else if (active === "Stats") {
        content = <Stats />;
    }

    return (
        <div className="App">
            <Navigation currentActive = {active} callback = {setActive}/>
            <div className="content">
                { content }
            </div>
        </div>
    );
}

export default App;
