import React from 'react';
import classes from "./Loader.module.scss";
/* import "./Loader.css"; */

/* import Container from "../Container/Container";
 */



const Loader = () => {
    return ( 
 
        <div className={classes["Loader"]}>
        <div className={classes["Loader__content"]}>
       
            <div className={"box1"}></div>
            <div className={"box2"}></div>
            <div className={"box3"}></div>
            
      </div>
      </div>

    );
}
export default Loader; 

{/* <Container>
        </Container> */}
 {/* <div className={"Container"}>
            <div className={"box1"}></div>
            <div className={"box2"}></div>
            <div className={"box3"}></div>
        </div>  */}