import classes from "./imgContainer.module.scss";
import Zoom from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css'

const ImgContainer = ({urlImgs = []})=>{
    const mappedImg = urlImgs.map((urlImg, counter)=>{
        return (
            <div key={counter} className={`${classes["ImgContainer__content"]} ${classes[`img${counter}`]}`}>
            <Zoom>
                <img 
                    src={urlImg} 
                    alt="Imagen de lugar turistico"
                />
            </Zoom>
            </div>
        );
    });

    return( 
        <div className={classes["ImgContainer"]}>
            {mappedImg}
        </div>
    );
}

export default ImgContainer;
