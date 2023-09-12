import React from 'react';

const BalanceDisplay = ({ balance }) => {
    return (
        <div className="flex items-center justify-between bg-white p-4 rounded-md shadow-sm">
            <div className="text-gray-600">
                <h2 className="text-lg font-semibold">Your Balance</h2>
                <p className="text-sm">This is your current balance in USDC</p>
            </div>
            <div className="text-right">
                <span className="text-2xl font-bold">{balance}</span>
                <span className="text-sm text-gray-600 ml-1">USDC</span>
            </div>
        </div>
    );
};

export default BalanceDisplay;