import React, { useState } from "react";

function Header({ isDarkMode, onDarkModeClick }) {
    const [mode, setMode] = useState(false)

    function handleClick() {
        setMode((mode => !mode)) 
    }
    
return (
    <div> 
        <header> 
        <h2>Shopster</h2>
        <button onClick={onDarkModeClick}>
          {isDarkMode ? "Dark" : "Light"} Mode
        </button>
        </header>
    </div>
)

}




export default Header;



