import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Quiz from '../Quiz/Quiz';

const QuizDetails = () => {

    const quizdetails = useLoaderData().data;

    const { name, questions } = quizdetails;

    return (

        <div>

            <h4 className='text-2xl font-bold text-blue-800'>Category: {name}</h4>

            {
                questions.map((quiz, index) => <Quiz
                    key={quiz.id}
                    quiz={quiz}
                    index={index}
                ></Quiz>)
            }
            
        </div>
    );
};

export default QuizDetails;