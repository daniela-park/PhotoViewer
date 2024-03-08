//import React from "react";  // import React (to provide access to TSX)
// import { useState } from 'react';
import './ImgSelector.css';

export function ImgSelector(props : any) {   

    const brokenImages = [
        1, 24, 32, 36, 44, 47
    ];

    // const [selectedUrl, setSelectedUrl] = useState('');

    const getImageUrls = () => {
        const urls = [];

        for (let i = 0; i < 50; i++) {
            if (!brokenImages.includes(i)) { // Does not include the broken images
                const imageNumberString = i.toString().padStart(2, '0');
                urls.push(`https://picsum.photos/id/6${imageNumberString}/1600/900.jpg`)
            }
        }
        return urls;
    }

    const urls = getImageUrls();

    return (                
        <div className='centeredText'>
            <h3>Select the photo to be visualised</h3> 
            <h4>The current URL is: {props.selectedUrl}</h4>
            <div className="imgContainer">
            {urls.map((url, index) =>
                <img
                alt={`Image ${index+1}`} 
                key={index}
                className= {`thumbnails ${url === props.selectedUrl ? "border" : ""}`} 
                src={url}
                onClick= {()=> props.onClick(url)} />
            )}
            </div>
        </div>
    );
}
