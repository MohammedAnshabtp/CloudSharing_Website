import React from "react";
import "../sidebar/Sidebar.css";
import lock from "../../assets/icons/private-account.png";
import share from "../../assets/icons/cloud.png";
import star from "../../assets/icons/starwhite.png";
import people from "../../assets/icons/shared.png";
import setting from "../../assets/icons/setting.png";
import logout from "../../assets/icons/logout.png";

function SiderBar() {
    return (
        <div className="side-section">
            <div className="profile-top">
                <div className="profile-section">
                    <img src="https://www.eclipsegroup.co.uk/wp-content/uploads/2020/03/Round-Profile-Picture-768x768-1.png" />
                </div>
                <div className="services">
                    <ul>
                        <li>
                            <img src={lock} />
                            <h3>My cloud</h3>
                        </li>
                        <li>
                            <img src={people} />
                            <h3>Shared files</h3>
                        </li>
                        <li>
                            <img src={star} />
                            <h3>Favorites</h3>
                        </li>
                        <li>
                            <img src={share} />
                            <h3>Upload files</h3>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="settings">
                <ul>
                    <li>
                        <img src={setting} />
                        <h3>Settings</h3>
                    </li>
                    <li>
                        <img src={logout} />
                        <h3>Log out</h3>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default SiderBar;
