import React from "react";
import star from "../../../assets/icons/star.png";
import "../categories/Categories.css";

function Categories() {
    const categories = [
        {
            id: 1,
            icon: star,
            iconstar: star,
            documentname: "Profile",
            documentsize: "155 file",
            bg: "hsl(242.43deg 89.16% 67.45%)",
        },
        {
            id: 2,
            icon: star,
            documentname: "Document",
            documentsize: "155 file",
            bg: "hsl(333.62deg 65.17% 65.1%)",
        },
        {
            id: 3,
            icon: star,
            documentname: "Video",
            documentsize: "155 file",
            bg: "hsl(190.77deg 46.99% 48.82%)",
        },
        {
            id: 4,
            icon: star,
            documentname: "Audio",
            documentsize: "155 file",
            bg: "hsl(214.97deg 69.72% 49.22%)",
        },
    ];
    return (
        <div>
            <h3>Categories</h3>

            <div className="categories">
                {categories.map((category) => (
                    <div
                        className="category-card"
                        style={{ backgroundColor: category.bg }}
                    >
                        <div className="category">
                            <div className="credit">
                                <span className="card-bg">
                                    <img src={category.icon} />
                                </span>
                                {category.iconstar && (
                                    <span>
                                        <img src={category?.iconstar} />
                                    </span>
                                )}
                            </div>

                            <h4>{category.documentname}</h4>
                            <h5>{category.documentsize}</h5>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Categories;
