import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRightIcon } from '@heroicons/react/24/solid'

const Topic = ({ quiz }) => {
    const { id, logo, name, total } = quiz;
    console.log(quiz);

    const navigate = useNavigate();
    const handleNavigate = () => {
        navigate(`/quiz/${id}`);
    }
    return (
        <div className='grid grid-cols-1 my-14 lg:mx-44'>
            <div className="card lg:card-side shadow-xl hover:shadow-2xl shadow-amber-200 hover:shadow-amber-300">
                <figure className="p-10 border-2 border-amber-400 rounded-xl">
                    <img src={logo} alt={name} className="rounded-xl  bg-gray-800 w-80" />
                </figure>
                <div className="card-body items-center justify-center text-blue-800">
                    <h2 className="card-title text-3xl font-bold uppercase">{name}</h2>
                    <p className="card-body text-2xl">Total Quiz: {total}</p>
                    <div className="card-actions justify-end">
                        <button onClick={handleNavigate} className="btn bg-amber-400 hover:bg-amber-500 text-xl text-blue-800 border-none">Start Practice
                            <ArrowRightIcon className="h-6 w-6 text-base-500" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Topic;