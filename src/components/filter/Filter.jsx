import React from "react";

const Filter = ({ filter, change }) => {
    return (
        <>
            <label>Find contacts by name:
                <input type="text" name="filter" value={filter} onChange={change}></input>
            </label>
        </>
    )
};

export default Filter;