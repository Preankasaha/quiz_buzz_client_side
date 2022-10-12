import React from 'react';
import { EyeIcon } from '@heroicons/react/24/solid'


const Quiz = ({ quiz, index }) => {
    const { question, options, id, correctAnswer } = quiz;
    console.log(correctAnswer);
   
    return (
        <div>
            <div className='grid grid-cols-1 mx-10 lg:mx-96 lg:p-16'>

                <div className='flex my-12'>

                    <div className='border-4 border-amber-400 rounded-xl w-80 py-18'>

                        <div className='flex'><div className='text-2xl'>Q:{index}</div> <div className='text-2xl' dangerouslySetInnerHTML={{ __html: quiz["question"] }}></div> </div>

                        {
                            options.map(option => <div className='flex flex-wrap bg-amber-400 rounded w-76 py-2 my-4'><input type="radio" name={id} className="radio" /><p>{option}</p>
                                
                            </div>)
                        }
                    </div>
                    <div>
                        <EyeIcon className="h-6 w-6 text-amber-500" />

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Quiz;