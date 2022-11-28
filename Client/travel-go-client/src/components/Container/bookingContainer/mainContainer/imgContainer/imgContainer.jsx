import classes from "./imgContainer.module.scss";

const ImgContainer = ({urlImgs = []})=>{
    const mappedImg = urlImgs.map((urlImg, counter)=>{
        return(
            <img 
                src={urlImg} 
                alt="Imagen de lugar turistico"
                key={counter}
                className={classes[`img${counter}`]}
            />
        );
    });

    return( 
        <div className={classes["ImgContainer"]}>
            {mappedImg}
        </div>
    );
}

export default ImgContainer;
