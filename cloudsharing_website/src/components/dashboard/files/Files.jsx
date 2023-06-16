import React from "react";
import "../files/Files.css";
import people from "../../../assets/icons/people.png";

function Files() {
    const files = [
        {
            id: 1,
            icons: people,
            filename: "Works",
            filesize: "85 files",
        },
        {
            id: 2,
            icons: people,
            filename: "Personal",
            filesize: "85 files",
        },
        {
            id: 3,
            icons: people,
            filename: "School",
            filesize: "85 files",
        },
        {
            id: 4,
            icons: people,
            filename: "Archieve",
            filesize: "85 files",
        },
    ];
    return (
        <div className="file-main">
            <h3>Files</h3>
            <div className="file-section">
                {files.map((file) => (
                    <div className="file-card">
                        <div className="file-icon">
                            <img src={file.icons} />
                        </div>
                        <h4>{file.filename}</h4>
                        <span className="count">{file.filesize}</span>
                        <span className="line"></span>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Files;
