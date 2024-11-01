// src/components/Dashboard.jsx
import React from 'react';
import Web3 from "web3";
import TipTapLearnABI from "../TipTapLearnABI.json";

const CONTRACT_ADDRESS = "0x4302050ac4073a53f40Fe88C397f32a571cCB082";

const Dashboard = () => {
    // Add your dashboard logic here
    return (
        <div className="p-4">
            <h2 className="text-xl mb-4">Welcome to TipTapLearn Dashboard</h2>
            {/* Your dashboard content goes here */}
        </div>
    );
};

export default Dashboard;
