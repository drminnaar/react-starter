import React from 'react';
import logo from '@/assets/logo.png';

const App: React.FC = () => {
    console.log(logo);
    return (
        <div className="container">
            <img
                className="logo"
                src={logo}
            />
            <h1 className="title">React Starter</h1>
        </div>
    );
};

export default App;
