import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { useLoaderData } from 'react-router-dom';

const Statistics = () => {

    const topics = useLoaderData().data;

    return (
        
        <div>
            <ResponsiveContainer height={400}>

                <LineChart width={400} height={400} data={topics}>

                    <Line type="monotone" dataKey="total" stroke="#82ca9d" />

                    <CartesianGrid stroke="#ccc" />

                    <XAxis dataKey="name" />

                    <YAxis />

                    <Tooltip></Tooltip>

                    <Legend />

                </LineChart>

            </ResponsiveContainer>
        </div>
    );
};

export default Statistics;