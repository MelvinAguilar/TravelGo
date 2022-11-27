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
    "descripcion_general": "A wall of rock and trees guards La Olomina waterfall, and its formation of two levels makes it a visually incredible waterfall.  Its turquoise water gives a unique look to this waterfall. La Olomina has a crystal clear two-stroke waterfall over 50 meters high surrounded by a small oak forest",
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
}

export default PlaceView;