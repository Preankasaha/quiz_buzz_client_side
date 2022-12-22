import React from 'react';
import { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Heading from '../Heading/Heading';
import Topic from '../Topic/Topic';
// import Topics from '../Topics/Topics';


const Home = () => {
    // const [isLoading, setIsLoading] = useState(false);
    const quizes = useLoaderData();
    return (
        <div>
            <div>
                <div>
                    <Heading></Heading>
                </div>
                {/* {
                    isLoading ? <progress className="progress w-56"></progress>
                        : */}
                <div className="topics-container">


                    {
                        quizes.data.map(quiz => <Topic key={quiz.id}
                            quiz={quiz}></Topic>)

                    }

                </div>
                {/* } */}

            </div>
        </div>
    );
};

export default Home;


