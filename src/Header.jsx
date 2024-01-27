import React from 'react';
import { CiSearch } from "react-icons/ci";
import { MdOutlineCalendarMonth } from "react-icons/md";

function Header() {
  return (
    <div className='bg-slate-100 h-16 px-4 flex justify-between items-center border-b border-gray-200 w-full'>
      {/* Left side containing Dashboard */}
      <div className='flex items-center'>
        <div className='text-lg font- mr-2'>Dashboard</div>
      </div>

      {/* Right side containing search bar, bell icon, calendar icon, and date */}
      <div className='flex items-center'>
        {/* Search bar */}
        <div className='relative'>
          <CiSearch className='absolute left-3 top-3 text-gray-500' />
          <input
            type='text'
            placeholder='Search'
            className='bg-gray text-sm focus:outline-none active:outline-none h-10 w-64 pl-10 pr-4 border border-gray-300 rounded-full'
          />
        </div>

        {/* Calendar icon and date */}
        <div className='flex items-center ml-4'>
          <MdOutlineCalendarMonth className='text-gray-500' fontSize={20} />
          <div className='text-sm text-gray-500 ml-1'>November 15, 2023</div>
        </div>

        {/* Bell icon */}
        <div className='ml-4'>
          <img src='./bell.png' alt='Bell Icon' />
        </div>

        {/* Button */}
        <div className='ml-4'>
          <button>name and email</button>
        </div>
      </div>
    </div>
  );
}

export default Header;
