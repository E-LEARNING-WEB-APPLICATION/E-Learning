import React, { useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import "./CourseSortDropdown.css";

const CourseSortDropdown = ({ value, onChange }) => {
    const [open, setOpen] = useState(false);

    const options = [
        { value: "", label: "None" },
        { value: "price_low_high", label: "Price: Low to High" },
        { value: "price_high_low", label: "Price: High to Low" },
        { value: "discount_high_low", label: "Discount: High to Low" },
        { value: "name_asc", label: "Name: A → Z" },
        { value: "name_desc", label: "Name: Z → A" },
        { value: "rating_high_low", label: "Rating: High to Low" },
        { value: "reviews_high_low", label: "Reviews: High to Low" },
    ];

    return (
        <div className="custom-dropdown-wrapper" onClick={() => setOpen(!open)}>
            <div
                className="custom-dropdown-selected"
                onClick={() => setOpen(!open)}
            >
                {value
                    ? options.find((o) => o.value === value)?.label
                    : "Sort By"}
                <FaChevronDown className={`dropdown-icon ${open ? "rotate" : ""}`} />
            </div>

            {open && (
                <div className="custom-dropdown-menu">
                    {options.map((opt) => (
                        <div
                            key={opt.value}
                            className="custom-dropdown-item"
                            onClick={() => {
                                onChange({ target: { value: opt.value } });
                                setOpen(false);
                            }}
                        >
                            {opt.label}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default CourseSortDropdown;
