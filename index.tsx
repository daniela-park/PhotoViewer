import React from "react";
import "./styles.css"

export interface ImageThumbnailProps {
    imageUrl?: string;
    imageSize: string;
    onClick?: () => void;
}

export const ImageThumbnail: React.FC<ImageThumbnailProps> = (props) => {
    return (
        <>   
            {props.imageUrl &&             
                <img className={props.imageSize} src={props.imageUrl} onClick={props.onClick} />
            }
        </>
    );
}