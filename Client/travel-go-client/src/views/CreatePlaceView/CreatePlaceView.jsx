import classes from "./CreatePlaceView.module.scss";
import PlaceForm from "../../components/PlaceForm/PlaceForm";
import Header from "../../components/Header/Header";
import FooterAttribution from "../../components/Footer/FooterAttribution/FooterAttribution";

const CreatePlaceView = () => {
  return (
    <>
      <Header />
      <main className={classes["CreatePlaceView"]}>
        <h1>Crear un nuevo sitio turístico</h1>
        <PlaceForm />
      </main>
      <FooterAttribution />
    </>
  );
};

export default CreatePlaceView;
