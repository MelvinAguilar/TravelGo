import classes from "./imgContainer.module.scss";


const ImgContainer = ({urlImgs = []})=>{
    const mappedImg = urlImgs.map((urlImg, counter)=>{
        return(
            // <div key={counter}>
                <img url={urlImg} alt="Imagen de lugar turistico" key={counter}/>
            // </div>
        );
    });

    return(
        <div>
            {mappedImg}
        </div>
    );
}

export default ImgContainer;