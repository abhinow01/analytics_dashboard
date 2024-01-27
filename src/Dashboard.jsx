import React from 'react';
import TransactionChart from './TransactionChart';
import Table from './Table';
import DashBoardStatsGrid from './DashBoardStatsGrid';
import PlatformAnalysis from './PlatformAnalysis';

function Dashboard() {
    return (
        <div className='flex flex-row'>
            <div className='flex flex-col flex-1'> {/* Add flex-1 class to ensure the container expands to fill available space */}
                <TransactionChart />
                <Table/>
            </div>
            <div className='flex flex-col flex-1'> {/* Add flex-1 class to ensure the container expands to fill available space */}
                <DashBoardStatsGrid />
                <PlatformAnalysis/>
                
            </div>
        </div>
    );
}

export default Dashboard;
