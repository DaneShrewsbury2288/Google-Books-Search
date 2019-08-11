import React from "react";
import "./style.css";

function Navbar() {
    return (
        <nav className="navbar navbar-default navbar-fixed-top">
            <ul>
                <li> Google Books  </li>
                <li>
                    <a className="searchNavBar" href="/"> Search </a>
                </li>
                <li>
                   <a className="savedNavBar" href="/saved"> Saved </a>
                </li>
            </ul>
        </nav>
    );

}


export default Navbar;