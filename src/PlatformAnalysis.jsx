import React from 'react';
import { Progress } from "@material-tailwind/react";

const PlatformAnalysis = () => {
  const subjects = [
    { name: 'Book Bazaar', accuracy: 80, color: "purple" },
    { name: 'Artisan aisle', accuracy: 70, color: "blue" },
    { name: 'TRoy Troop', accuracy: 90, color: "red" },
    { name: 'Xstore', accuracy: 75, color: "green" },
  ];

  return (
    <div className="border border-gray-300 rounded-lg p-5 max-w-md bg-white">
      <h2 className="text-lg font-semibold mb-5">Subject Wise Analysis</h2>
      {subjects.map((subject, index) => (
        <div className="mb-4" key={index}>
          <div className="flex justify-between mb-1">
            <div className="text-gray-700 font-medium">{subject.name}</div>
            <div className={`font-medium text-${subject.color}`}>{subject.accuracy}</div>
          </div>
          <div className="mb-2">
            <Progress
              value={subject.accuracy}
              color={subject.color}
              size="lg"
            />
          </div>
        </div>
      ))}
    </div>
  );
}

export default PlatformAnalysis;
