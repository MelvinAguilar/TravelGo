import React from 'react';
import classes from "./Loader.module.scss";
import Container from "../Container/Container";




const Loader = () => {
    return ( 
 
        <div className={classes["Loader"]}>
        <div className={classes["Loader__content"]}>
      
        <Container>
         
  
        </Container>
      </div>
      </div>

    );
}
export default Loader; 

 {/* <div className={"Container"}>
            <div className={"box1"}></div>
            <div className={"box2"}></div>
            <div className={"box3"}></div>
        </div>  */}