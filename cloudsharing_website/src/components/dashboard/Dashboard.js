import React from "react";
import "../dashboard/Dashboard.css";
import star from "../../assets/icons/star.png";

function Dashboard() {
    return (
        <div className="dashboard-section">
            <div className="search">
                <input type="text" placeholder="Search" />
            </div>
            <h3>Categories</h3>

            <div className="categories">
                <div className="category-card">
                    <div className="credit">
                        <div className="card-icon">
                            <img src={star} />
                        </div>
                        <img src={star} />
                    </div>

                    <h4>Picture</h4>
                    <h5>480 files</h5>
                </div>
                <div className="category-card">
                    <div className="card-icon">
                        <img />
                        <img />
                    </div>
                    <h3>Picture</h3>
                    <h5>480 files</h5>
                </div>
                <div className="category-card">
                    <div className="card-icon">
                        <img />
                        <img />
                    </div>
                    <h3>Picture</h3>
                    <h5>480 files</h5>
                </div>
                <div className="category-card">
                    <div className="card-icon">
                        <img />
                        <img />
                    </div>
                    <h3>Picture</h3>
                    <h5>480 files</h5>
                </div>
            </div>
        </div>
    );
}

export default Dashboard;
