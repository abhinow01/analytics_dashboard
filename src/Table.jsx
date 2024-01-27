import React from 'react';
import { FiDownload } from 'react-icons/fi';
import { TbArrowsSort } from "react-icons/tb";
import { MdOutlineNavigateNext } from "react-icons/md";
import { GrFormPrevious } from "react-icons/gr";
// import Pagination from './Pagination';
function Table() {
    const dummyData = [
        {
            orderId: '#281209',
            orderDate: '7 July, 2023',
            orderAmount: '₹1278.23',
            transactionFees: '₹22',
        },
        {
            orderId: '#281209',
            orderDate: '7 July, 2023',
            orderAmount: '₹1278.23',
            transactionFees: '₹22',
        },
        {
            orderId: '#281209',
            orderDate: '7 July, 2023',
            orderAmount: '₹1278.23',
            transactionFees: '₹22',
        },
        {
            orderId: '#281209',
            orderDate: '7 July, 2023',
            orderAmount: '₹1278.23',
            transactionFees: '₹22',
        },
        {
            orderId: '#281209',
            orderDate: '7 July, 2023',
            orderAmount: '₹1278.23',
            transactionFees: '₹22',
        }
    ];

    const header = (
        <tr className="bg-gray-100 ">
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider bg-white">
                <span className="text-right">Name</span>
            </th>
            <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider bg-white">
                Date
            </th>
            <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider bg-white">
                Amount
            </th>
            <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider bg-white">
                Status
            </th>
        </tr>
    );

    const dataRows = dummyData.map((item, index) => (
        <tr key={index} className="bg-white border-t border-gray-200">
            <td className="px-6 py-2 whitespace-nowrap bg-white">{item.orderId}</td>
            <td className="px-6 py-2 whitespace-nowrap text-right font-light bg-white">{item.orderDate}</td>
            <td className="px-6 py-2 whitespace-nowrap text-right font-light bg-white">{item.orderAmount}</td>
            <td className="px-6 py-2 whitespace-nowrap text-right font-light bg-white">{item.transactionFees}</td>
        </tr>
    ));

    return (
        <div className="container mx-auto h-full pb-8">
            <div className="flex flex-wrap justify-between mb-4 bg-white">
                <div className="flex px-4 py-2">
                    Last Orders
                </div>
                <div className="flex py-2 px-4">
                    <button className="bg-white px-4  flex items-center justify-center rounded-md text-green-400" >
                        See all 
                    </button>
                </div>
            </div>
            <table className="w-full px-4 pt-3 pb-4 border border-gray-200">
                <thead>{header}</thead>
                <tbody className="divide-y divide-gray-200">
                    {dataRows}
                    {/* Add an extra empty row to ensure the last row renders correctly */}
                    {/* <tr className="bg-white">
                        <td colSpan="4" className="h-8"></td>
                    </tr> */}
                </tbody>
            </table>
        </div>
    );
}

export default Table;
