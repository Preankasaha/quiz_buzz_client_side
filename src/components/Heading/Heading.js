import React from 'react';

const Heading = () => {

    return (
        
        <div className='md:flex flex-row w-100% gap-x-48 justify-center items-center  text-blue-800 my-8 bg-amber-400 p-3.5'>
            
            <div className="info-container font-semibold md:text-3xl" data-aos="fade-right"
                data-aos-easing="ease-out-cubic"
                data-aos-duration="2000"
            >
                <h4>Test your level</h4>
                <h5>Gear up your learning with Quiz Buzz</h5>
            </div>

            <div className="img-container">

                <img className='h-80 rounded-xl lg:w-full' src="https://images.unsplash.com/photo-1606326608690-4e0281b1e588?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt=""
                    data-aos="fade-left"
                    data-aos-easing="ease-out-cubic"
                    data-aos-duration="1500"
                />
            </div>

        </div>
    );
};

export default Heading;