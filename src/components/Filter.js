import React from "react";

function Filter({ filter, onFilterClick }) {
    return (
    <div id="filter-div">
        <button id="good-dog-filter" onClick={onFilterClick}>Filter good dogs: {filter ? "On" : "Off"}</button>
    </div>
    )
}

export default Filter