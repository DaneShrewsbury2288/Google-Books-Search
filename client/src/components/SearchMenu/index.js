import React from "react";
import "./style.css";

function SearchMenu(props) {
    return (
        <div className="SearchMenu">
            <div className="SearchMenuWrapper">
                <h1 className="searchMenuH1"> Book Search </h1>
                <div>
                    <input 
                    type="text" 
                    value={props.search}
                    className="input" 
                    onChange={props.handleInputChange} 
                    placeholder="Enter Book Name..." 
                    />
                </div>
                <button className="SearchButton" onClick={props.handleFormSubmit}> Search </button>
            </div>
        </div>
    );
}


export default SearchMenu;