import classes from "./FavoriteTripsView.module.scss";
import Place from "../../components/Trips/Places/Places";
import axios from "axios";
import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import { useConfigContext } from "../../contexts/ConfigContext";
import { UseAuthContext } from "../../contexts/authContext";

const FavoriteTripsView = ({ userD, className, ...rest }) => {
  const [ trips, setTrips ] = useState([]);
  const { startLoading, stopLoading } = useConfigContext();
  const { token, user } = UseAuthContext();

  useEffect(() => {
   if (user) {
    fetchTrips();
    }
  }, [user]);

  const fetchTrips = async () => {
    const R = 'Bearer';
    try {
      startLoading();
      
      //TODO Arreglar esto, no autorizado
      
      const { data } = await axios.get("/own/wishlist", { userId: user._id }, {
        headers: {
          Authorization: `${R} ${token}`
        }
      });
      
      setTrips(data);
    } catch (error) {
      // console.log(error);
      const { status } = error.response || { status: 500 };
      const errorMessage = error.response.data.error || ["Error inesperado"];
      const msg = {
        401: "Inicie sesión",
        500: "Algo salió mal",
      };
      toast.error(`${msg[String(status)]}: ${errorMessage}`, {
        toastId: "error"
      });
    } finally {
      stopLoading();
    }
  };

  return (
    <div>
      <Place trips={trips} />
    </div>
  );
};

export default FavoriteTripsView;
