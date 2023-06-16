import React from "react";
import "../../../components/dashboard/recent/Recent.css";
import sharee from "../../../assets/icons/sharee.png";
import more from "../../../assets/icons/more.png";
import camera from "../../../assets/icons/camera.png";

function Recent() {
    const recentFiles = [
        {
            id: 1,
            icon: camera,
            filename: "banna",
            filetype: "mp4",
            size: "78mb",
            bg: "hsl(242.43deg 89.16% 67.45%)",
        },
        {
            id: 2,
            icon: camera,
            filename: "test",
            filetype: "mp3",
            size: "78mb",
            bg: "hsl(190.77deg 46.99% 48.82%)",
        },
        {
            id: 3,
            icon: camera,
            filename: "bannacp",
            filetype: "mov",
            size: "744mb",
            bg: "hsl(333.62deg 65.17% 65.1%)",
        },
    ];
    return (
        <div className="recent-main">
            <div className="recent-head">
                <h3>Recent</h3>
            </div>
            {recentFiles.map((recentFile) => (
                <div className="recent-cards">
                    <ul>
                        <li>
                            <span style={{ backgroundColor: recentFile.bg }}>
                                <img src={recentFile.icon} />
                            </span>
                            <h3>{recentFile.filename}</h3>
                        </li>
                        <li>
                            <h4>{recentFile.filetype}</h4>
                        </li>
                        <li>
                            <h4>{recentFile.size}</h4>
                        </li>
                        <li>
                            <span>
                                <img src={sharee} />
                            </span>
                        </li>
                        <li>
                            <span>
                                <img src={more} />
                            </span>
                        </li>
                    </ul>
                </div>
            ))}
        </div>
    );
}

export default Recent;
