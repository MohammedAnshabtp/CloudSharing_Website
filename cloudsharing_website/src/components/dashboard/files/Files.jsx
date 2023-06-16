import React from "react";
import "../files/Files.css";
import file from "../../../assets/icons/file.png";
import people from "../../../assets/icons/user.png";
import school from "../../../assets/icons/mortarboard.png";
import archive from "../../../assets/icons/box.png";


function Files() {
    const files = [
        {
            id: 1,
            icons: file,
            filename: "Works",
            filesize: "820 files",
        },
        {
            id: 2,
            icons: people,
            filename: "Personal",
            filesize: "115 files",
        },
        {
            id: 3,
            icons: school,
            filename: "School",
            filesize: "85 files",
        },
        {
            id: 4,
            icons: archive,
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
                <div className="file-add">
                    <div className="file-icons">
                        <h1>+</h1>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Files;
