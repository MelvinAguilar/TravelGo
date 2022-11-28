import classes from "./PlaceView.module.scss";
import MainContainer from "../../components/Container/bookingContainer/mainContainer/mainContainer";
import BookingSection from "../../components/Container/bookingContainer/BookingSection/BookingSection";
import CommentsContainer from "../../components/Container/bookingContainer/commentsContainer/commentsContainer";
import Container from "../../components/Container/Container";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

const placeInformation = {
    "nombre": "Cascada La Olomina · Arambala, Morazán",
    "precio": 45.00,
    "descripcion_general": "La Olomina, se encuentra custodiada por una pared de roca y árboles y su formación de dos niveles la hacen una cascada visualmente increíble. Sas aguas turquesas le dan un vista única a esta cascada. La Olomina tiene una casacada cristalina de dos nivel que se eleva más de 50 metros rodeada por un pequerño bosque de robles, ideal para aventureros que buscan una experiencia impriosante.",
    "cant_comentarios": 100,
    "puntuacion_prom": 4.5,
    "images": ["./src/assets/img/1.jpg"
     ],
    "etiquetas": ["Vista a la montaña", "Escalar", "Natación", "Acampar", "Fotografía", "Estadia", "Soleado", "Transporte", "Naturaleza", "Comida"]

};

const comments = {
    "usuario": "Carlos Meléndez",
    "fecha": "14 de agosto de 2022",
    "comentario": "Esta cascada es espectácular, sus aguas son tan cristalinas, de un turqeusa muy hermoso. El lugar es perfecto para acampar y disfutrar de la naturaleza."
}


const PlaceView = ()=>{
    return (
        <>
            <Header/>
            <main>
                <Container className={classes["Place"]}>
                    <MainContainer mainInformation={placeInformation} />

                    <hr/>

                    <BookingSection placeInformation={placeInformation}/>

                    <hr/>

                    <CommentsContainer commentsInformation = {comments} cant_comentarios = {placeInformation.cant_comentarios} puntuacion_prom = {placeInformation.puntuacion_prom}/>
                </Container>
            </main>
            <Footer/>
        </>
        
    );
}

export default PlaceView;