import React from "react";
import { Link } from "react-router-dom";

const Dashboard = () => {
    return (
        <div className="dashboard-container">
            <h1>Welcome to Your Dashboard</h1>
            <p className="dashboard-description">
                Explore and manage your lists here. Create a new list or view your existing ones.
            </p>

            <div className="dashboard-buttons">
                <Link to="/makelist">
                    <button className="dashboard-button">Make a List</button>
                </Link>
                <Link to="/showlist">
                    <button className="dashboard-button">Show My List</button>
                </Link>
            </div>

            <hr />

            <p className="back-to-home">
                <Link to="/">Back to Home</Link>
            </p>
        </div>
    );
};

export default Dashboard;
