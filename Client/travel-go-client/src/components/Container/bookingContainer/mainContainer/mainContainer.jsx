import classes from "./mainContainer.module.scss";
import TitleContainer from "./titleContainer/titleContainer";
import ImgContainer from "./imgContainer/imgContainer";
import MoreInformation from "./moreInformationContainer/moreInformation";

const MainContainer = ({mainInformation})=>{
    return(
        <section className={classes["main-information"]}>
            <TitleContainer title={mainInformation.nombre}/>

            <ImgContainer urlImgs={mainInformation.img}/>

            <MoreInformation>
                {mainInformation.descripcion_general}
            </MoreInformation>

        </section>

    );
}

export default MainContainer;