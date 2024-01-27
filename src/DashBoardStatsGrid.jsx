import React from 'react';
import { CiCircleQuestion } from 'react-icons/ci';

function DashBoardStatsGrid() {
  return (
    <div className='flex flex-row'>
  <div className='flex gap-4  flex-col'>
    <div className='bg-white rounded-sm  border border-gray-200 flex flex-col flex-1 px-4'>
      <div className='flex items-center justify-between'>
        <div className='text-sm text-gray-400 font-light flex items-center justify-between'>
          <img src='./IconBox.png' />
        </div>
        <div><img src='./Group 3 (1).png'/></div>
      </div>
      <div className='text-lg py-2 font-bold flex flex-col'>
        <div className='text-sm font-light'>Total Refund</div>
        <strong>231</strong>
      </div>
      <div className='flex flex-row justify-between'>
        <img src='./Up.png' />
        <div className='text-sm font-light text-gray-400'>v.s previous month</div>
      </div>
    </div>

    <div className='bg-white rounded-sm p-2 border border-gray-200 flex flex-col flex-1'>
      <div className='flex items-center justify-between'>
        <div className='text-sm text-gray-400 font-light flex items-center justify-between'>
          <img src='./IconBox.png' />
        </div>
        <div><img src='./Group 3 (1).png'/></div>
      </div>
      <div className='text-lg py-2 font-bold flex flex-col'>
        <div className='text-sm font-light'>Total Refund</div>
        <strong>231</strong>
      </div>
      <div className='flex flex-row justify-between'>
        <img src='./Up.png' />
        <div className='text-sm font-light text-gray-400'>v.s previous month</div>
      </div>
    </div>
  </div>

  <div className='flex flex-col gap-4'>
    <div className='bg-white rounded-sm p-2 border border-gray-200 flex flex-col'>
      <div className='flex items-center justify-between'>
        <div className='text-sm text-gray-400 font-light flex items-center justify-between'>
          <img src='./IconBox.png' />
        </div>
        <div><img src='./Group 3 (1).png'/></div>
      </div>
      <div className='text-lg py-2 font-bold flex flex-col'>
        <div className='text-sm font-light'>Total Refund</div>
        <strong>231</strong>
      </div>
      <div className='flex flex-row justify-between'>
        <img src='./Up.png' />
        <div className='text-sm font-light text-gray-400'>v.s previous month</div>
      </div>
    </div>

    <div className='bg-white rounded-sm p-2 border border-gray-200 flex flex-col'>
      <div className='flex items-center justify-between'>
        <div className='text-sm text-gray-400 font-light flex items-center justify-between'>
          <img src='./IconBox.png' />
        </div>
        <div><img src='./Group 3 (1).png'/></div>
      </div>
      <div className='text-lg py-2 font-bold flex flex-col'>
        <div className='text-sm font-light'>Total Refund</div>
        <strong>231</strong>
      </div>
      <div className='flex flex-row justify-between'>
        <img src='./Up.png' />
        <div className='text-sm font-light text-gray-400'>v.s previous month</div>
      </div>
    </div>
  </div>
</div>

  );
}

export default DashBoardStatsGrid;
