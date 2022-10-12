import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Topic from '../Topic/Topic';

const Topics = () => {
    const quizes = useLoaderData();

    return (
        <div>
            {
                quizes.data.map(quiz => <Topic
                    key={quiz.id}
                    quiz={quiz}
                ></Topic>)
            }
        </div>
    );
};

export default Topics;