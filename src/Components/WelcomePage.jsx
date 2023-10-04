import React from 'react';
import './WelcomePage.css'; // Import your CSS file

const WelcomePage = () => {
    return (
        <div className="welcome-container">
            <div className="welcome-content">
                <h1 className="welcome-title">Welcome to My Course Management Application</h1>
                <p className="welcome-description">
                    Manage your courses with ease and keep track of your academic journey.
                </p>
            </div>
        </div>
    );
}

export default WelcomePage;
