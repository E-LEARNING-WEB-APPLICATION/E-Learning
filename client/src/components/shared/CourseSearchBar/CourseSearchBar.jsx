import React from 'react'
import { FaSearch } from "react-icons/fa";
import "./CourseSearchBar.css";

const CourseSearchBar = ({value,onChange}) => {
   return (
        <div className="search-wrapper">
            <FaSearch className="search-icon" />
            <input
                type="text"
                className="search-input"
                placeholder="Search courses..."
                value={value}
                onChange={onChange}
            />
        </div>
    );
}

export default CourseSearchBar