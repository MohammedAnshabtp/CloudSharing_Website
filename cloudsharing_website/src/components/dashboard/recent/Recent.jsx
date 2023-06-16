import React from "react";
import "../../../components/dashboard/recent/Recent.css";
import sharee from "../../../assets/icons/sharee.png";
import more from "../../../assets/icons/more.png";
import camera from "../../../assets/icons/camera.png";
import video from "../../../assets/icons/video-camera.png";

function Recent() {
    const recentFiles = [
        {
            id: 1,
            icon: camera,
            filename: "IMG_10000",
            filetype: "PNG file",
            size: "5 MB",
            bg: "hsl(242.43deg 89.16% 67.45%)",
        },
        {
            id: 2,
            icon: video,
            filename: "Startup pitch",
            filetype: "AVI file",
            size: "105 MB",
            bg: "lightgreen",
        },
        {
            id: 3,
            icon: camera,
            filename: "Freestyle beat",
            filetype: "MP3 file",
            size: "21 MB",
            bg: "hsl(333.62deg 65.17% 65.1%)",
        },
        {
            id: 4,
            icon: camera,
            filename: "Work prposal",
            filetype: "DOCx file",
            size: "500 kb",
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
