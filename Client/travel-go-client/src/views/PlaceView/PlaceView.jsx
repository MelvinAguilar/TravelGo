import classes from "./PlaceView.module.scss";
import MainContainer from "../../components/Container/bookingContainer/mainContainer/mainContainer";
import BookingSection from "../../components/Container/bookingContainer/BookingSection/BookingSection";
import CommentsContainer from "../../components/Container/bookingContainer/commentsContainer/commentsContainer";
import Container from "../../components/Container/Container";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import axios from 'axios';
import { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import { useParams } from "react-router-dom";
import { commentsAPI } from "../../Server/placeServer";

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

const PlaceView = () => {
    const { placeId } = useParams();
    const [ place, setPlace ] = useState({});
    const {comments} = commentsAPI(placeId);

    useEffect(() => {
        fetchPlace();
    }, []);

    const fetchPlace = async () => {
        try {
            const { data } = await axios.get(`/places/${placeId}`);
            setPlace(data);
        } catch (error) {
            toast.error(error.message, {
                toastId: "fetchPlaceError"
            });
        }
    };

    const {comments} = commentsAPI("63812cff65fae1cb7bad9b84");
    return (
        <>
            <Header/>
            <main>
                <Container className={classes["Place"]}>
                    <MainContainer mainInformation={place} />

                    <hr/>

                    <BookingSection placeInformation={place}/>

                    <hr/>

                    <CommentsContainer commentsInformation = {comments} cant_comentarios = {place.cant_comentarios} puntuacion_prom = {place.puntuacion_prom}/>
                </Container>
            </main>
            <Footer/>
        </>
        
    );
};

export default PlaceView;