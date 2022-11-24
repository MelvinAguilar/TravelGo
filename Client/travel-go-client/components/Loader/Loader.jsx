import React from 'react';
import classes from "./Loader.module.scss";

const Loader = () => {
    return (       
        <div className={classes["main"]}>
            <span className={classes["loader"]}></span>
        </div>  
        
        );
    }
export default Loader; 
    
    /* <div className={classes['Loader']}>
            
        <svg>
                <g>
                    <path d="M 50,100 A 1,1 0 0 1 50,0"/>
                </g>
                <g>
                    <path d="M 50,75 A 1,1 0 0 0 50,-25"/>
                </g>
            <defs>
                <linearGradient id='gradient' x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" style="stop-color:#FF56A1;stop-opacity:1" />
                <stop offset="100%" style="stop-color:#FF9350;stop-opacity:1" />
                </linearGradient>
            </defs>
        </svg>
    </div> */