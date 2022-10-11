import React from 'react';
import Heading from '../Heading/Heading';
import Topics from '../Topics/Topics';

const Home = () => {
    return (
        <div>
            <div>
                <div>
                    <Heading></Heading>
                </div>
                <div className="topics-container">
                    <Topics></Topics>
                </div>
            </div>
        </div>
    );
};

export default Home;


