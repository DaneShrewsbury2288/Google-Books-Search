import React from "react";
import "./style.css";

function SearchMenu(props) {
    return (
        <div className="SearchMenu">
            <div className="SearchMenuWrapper">
                <h1 className="searchMenuH1"> Book Search </h1>
                <div>
                    <input type="text" className="input" onChange={props.handleChange} placeholder="Enter Book Name..." />
                </div>
                <button className="SearchButton" onClick={props.handleInputChange}> Search </button>
            </div>
        </div>
    );
}


export default SearchMenu;