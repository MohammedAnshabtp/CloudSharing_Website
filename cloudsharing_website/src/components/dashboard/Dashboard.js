import React from "react";
import "../dashboard/Dashboard.css";
import Categories from "./categories/Categories";
import Files from "./files/Files";
import Recent from "./recent/Recent";
import search from "../../assets/icons/search.png";

function Dashboard() {
    return (
        <div className="dashboard-main">
            <div className="dashboard-section">
                <div className="search">
                    <input type="text" placeholder="Search" />
                    <div className="search-log">
                        <img src={search} />
                    </div>
                </div>

                <Categories />
                <Files />
                <Recent />
            </div>
        </div>
    );
}

export default Dashboard;
