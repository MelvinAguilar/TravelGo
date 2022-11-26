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
    "descripcion_general": "A wall of rock and trees guards La Olomina waterfall, and its formation of two levels makes it a visually incredible waterfall.  Its turquoise water gives a unique look to this waterfall. La Olomina has a crystal clear two-stroke waterfall over 50 meters high surrounded by a small oak forest",
    "cant_comentarios": 100,
    "puntuacion_prom": 4.5,
    "images": ["./src/assets/img/1.jpg"
     ],
    "etiquetas": ["Vista a la montaña", "Escalar", "Natación", "Acampar", "Fotografía", "Estadia", "Soleado", "Transporte", "Naturaleza", "Comida"]

};

const comments = {
    "usuario": "John el mas john",
    "fecha": "14 de agosto de 2022",
    "comentario": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vulputate sodales suscipit. Aenean auctor nunc sit amet lacus auctor rutrum. Nunc at dictum tortor. Nunc sit amet lectus varius, vulputate ligula et, commodo nibh."
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