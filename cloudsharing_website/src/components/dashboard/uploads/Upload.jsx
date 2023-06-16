import React from "react";
import "../../dashboard/uploads/Upload.css";
import share from "../../../assets/icons/share.png";
function Upload() {
    const profiles = [
        {
            id: 1,
            filename: "Keynote files",
            dpone: "https://eclatsuperior.com/wp-content/uploads/2021/04/man3.jpg",
            dptwo: "https://www.rd.com/wp-content/uploads/2017/09/01-shutterstock_476340928-Irina-Bg.jpg",
            bg: "green",
        },
        {
            id: 2,
            filename: "Vacation nhotos",
            dpone: "https://shotkit.com/wp-content/uploads/2021/06/cool-profile-pic-matheus-ferrero.jpeg",
            dptwo: "https://st4.depositphotos.com/1017228/25111/i/600/depositphotos_251112376-stock-photo-image-of-joyful-man-30s.jpg",
            bg: "yellow",
        },
        {
            id: 3,
            filename: "Proiect report",
            dpone: "https://as2.ftcdn.net/jpg/02/87/35/99/220_F_287359914_HU3P7rhmyJMyyhBBcILcWd2S7DDwkJSs.jpg",
            dptwo: "https://st4.depositphotos.com/1017228/25111/i/600/depositphotos_251112376-stock-photo-image-of-joyful-man-30s.jpg",
            bg: "dark",
        },
    ];
    return (
        <div className="upload-main">
            <div className="upload-section">
                <div className="addfile-container">
                    <span className="upload-icon">
                        <img src={share} />
                    </span>
                    <h4>Add files</h4>
                </div>
            </div>
            <div className="storage-container">
                <div className="store">
                    <h4>Your storage</h4>
                    <h4>25% left</h4>
                </div>
                <h3>75 GB of 100GB are used</h3>
                <div className="totalstorage">
                    <div className="remainingstorage"></div>
                </div>
            </div>
            <div className="sharedfolder">
                <h3>Your shared folder</h3>
                {profiles.map((profile) => (
                    <div
                        className="sharedprofiles"
                        style={{ backgroundColor: profile.bg }}
                    >
                        <div className="profilesection">
                            <h4>{profile.filename}</h4>
                            <div className="profileimage">
                                <div className="profileone">
                                    <img src={profile.dpone} />
                                </div>

                                <div className="profiletwo">
                                    <img src={profile.dptwo} />
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Upload;
