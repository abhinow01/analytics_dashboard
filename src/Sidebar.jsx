import React from 'react';

function Sidebar() {
  return (
    <div className='bg-slate-100 w-20 p-3 py-5 flex flex-col text-gray-50 border-b border-gray-200'>
      <div className='flex items-center justify-center mb-4'>
        <img src='./Vector.png' alt='Logo' className='w-10 h-10' />
      </div>
      <div className='flex flex-col flex-1'>
        <ul className='space-y-2'>
          <li className="flex items-center justify-center py-2 px-4">
            <img src='./box.png' alt='Box' />
          </li>
          <li className="flex items-center justify-center py-2 px-4">
            <img src='./trend-up.png' alt='Trend Up' />
          </li>
          <li className="flex items-center justify-center py-2 px-4">
            <img src='./Icon.png' alt='Icon' />
          </li>
          <li className="flex items-center justify-center py-2 px-4">
            <img src='./Frame 12.png' alt='Frame 12' />
          </li>
          <li className="flex items-center justify-center py-2 px-4">
            <img src='./Frame 12 2.png' alt='Frame 12 2' />
          </li>
        </ul>
      </div>
      <div className='flex flex-col'>
        <ul className='space-y-2'>
          <li className="flex items-center justify-center py-2 px-4">
            <img src='./Icon 2.png' alt='Icon 2' />
          </li>
          <li className="flex items-center justify-center py-2 px-4">
            <img src='./Frame 12 3.png' alt='Frame 12 3' />
          </li>
          <li className="flex items-center justify-center py-2 px-4">
            <img src='./logout.png' alt='Logout' />
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;
