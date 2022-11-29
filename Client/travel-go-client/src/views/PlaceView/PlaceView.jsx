import classes from "./PlaceView.module.scss";
import MainContainer from "../../components/Container/bookingContainer/mainContainer/mainContainer";
import BookingSection from "../../components/Container/bookingContainer/BookingSection/BookingSection";
import CommentsContainer from "../../components/Container/bookingContainer/commentsContainer/commentsContainer";
import CommentsForm from "../../components/Container/bookingContainer/CommentsForm/CommentsForm";
import Container from "../../components/Container/Container";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import axios from 'axios';
import { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import { useParams } from "react-router-dom";
import { commentsAPI } from "../../services/placeServer";
import { useConfigContext } from "../../contexts/ConfigContext";
import { UseAuthContext } from "../../contexts/authContext";

const PlaceView = () => {
    const { placeId } = useParams();
    const [ place, setPlace ] = useState({});
    const { comments, fetchComments } = commentsAPI(placeId);
    const { token, user } = UseAuthContext();
    const { startLoading, stopLoading } = useConfigContext();

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

    const saveComment = async (comentario, puntuacion) => {
        const R = 'Bearer';
        try {
            startLoading();
            await axios.post(`/comment`, { comentario, puntuacion, lugar: placeId }, {
                headers: {
                    Authorization: `${R} ${token}`
                }
            });
            toast.success("Comment saved successfully", {
                toastId: "success"
            });

            fetchComments();
            return { success: true };
        } catch (error) {
            const {status} = error.response || {status: 500};
            const errorMessage = error.response.data.error[0].message || ["Error inesperado"];
            const msg = {
                "400": "Datos erroneos ",
                "404": "Email no registrado",
                "401": "Contraseña incorrecta",
                "500": "Something went wrong!",
            }
            toast.error(msg[String(status)] + " " + errorMessage, {
                toastId: "error"
            });
        } finally {
            stopLoading();
        }
        return { success: false };
    };

    const onAddCommentHandler = (comment, rating) => {
        saveComment(comment, rating);
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
                    { user 
                        ? <CommentsForm user={user} onAddComment={onAddCommentHandler} />
                        : <p>Debes iniciar sesión para comentar</p>
                    }

                    <CommentsContainer 
                        commentsInformation = {comments} 
                        cant_comentarios = {place.cant_comentarios} 
                        puntuacion_prom = {place.puntuacion_prom}
                    />
                </Container>
            </main>
            <Footer/>
        </>
        
    );
};

export default PlaceView;
