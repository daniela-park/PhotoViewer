//import React from "react";  // import React (to provide access to TSX)
import './PhotoViewer.css'

export function PhotoViewer(props:any) { // Declaring and exporting the function called 'PhotoViewer', parameter 'props'
    return (                
        <div>          
            <img className="heroImg" src={props.src} alt="randomly generated image"/>
        </div>
    );
}

