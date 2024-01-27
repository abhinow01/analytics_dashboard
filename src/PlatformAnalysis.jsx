import React from 'react';
import { Progress } from "@material-tailwind/react";

const PlatformAnalysis = () => {
  const subjects = [
    { name: 'Book Bazaar', accuracy: 80, color: "purple", change: 15, amount : "$2,500,000" },
    { name: 'Artisan aisle', accuracy: 70, color: "blue",  change: 10, amount : "$1,800,000"},
    { name: 'TRoy Troop', accuracy: 90, color: "red" ,change: 8, amount : "$1,300,000"},
    { name: 'Xstore', accuracy: 75, color: "green" ,change: 2, amount : "$1,000,000"},
  ];

  return (
    <div className="border border-gray-300 rounded-lg p-5 bg-white">
      <h2 className="text-lg font-semibold mb-5">Platform Analysis</h2>
      {subjects.map((subject, index) => (
        <div className="mb-4" key={index}>
          <div className="flex mb-1">
            <div className="text-gray-700 font-medium">{subject.name}</div>
          </div>
          <div className="mb-2">
            <Progress
              value={subject.accuracy}
              color={subject.color}
              className="custom-progress"
            />
          </div>
          <div className='flex mb-1 justify-between'>
            <div className="text-gray-700 font-medium">{subject.amount}</div>
            <div className="text-gray-700 font-medium">+{subject.change}%</div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default PlatformAnalysis;
