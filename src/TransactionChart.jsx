import React from 'react';
import { BarChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis, Bar } from 'recharts';

const data = [
    {
        name: 'Jan',
        Sales: 6000
    },
    {
        name: 'Feb',
        Sales: 6000
    },
    {
        name: 'Mar',
        Sales: 6000
    },
    {
        name: 'Apr',
        Sales: 6000
    },
    {
        name: 'May',
        Sales: 6000
    },
    {
        name: 'Jun',
        Sales: 6000
    },
    {
        name: 'Jul',
        Sales: 6000
    },
    {
        name: 'Aug',
        Sales: 6000
    },
    {
        name: 'Sep',
        Sales: 6000
    },
    {
        name: 'Oct',
        Sales: 6000
    },
    {
        name: 'Nov',
        Sales: 6000
    },
    {
        name: 'Dec',
        Sales: 6000
    }
];

function TransactionChart() {
    return (
        <div style={{ width: '100%', height: '400px' }}>
            <ResponsiveContainer width="100%" height="100%">
                <BarChart
                    width={500} // This width won't be used due to ResponsiveContainer
                    height={500} // This height won't be used due to ResponsiveContainer
                    data={data}
                    margin={{
                        top: 20,
                        bottom: 0,
                        right: 10,
                        left: -10
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3 0 0" vertical={false} />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="Sales" fill="#34CAA5" />
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
}

export default TransactionChart;
