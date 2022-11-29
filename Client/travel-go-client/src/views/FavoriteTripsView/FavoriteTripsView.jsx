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
  const { token } = UseAuthContext();

  useEffect(() => {
   if (token) {
    fetchTrips();
    }
  }, [token]);

  const fetchTrips = async () => {
    const R = 'Bearer';
    try {
      startLoading();
            
      const { data } = await axios.get("/own/wishlist", {
        headers: {
          Authorization: `${R} ${token}`
        }
      });
      setTrips(data);
    } catch (error) {
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
    {
      trips[0]?
        <Place trips={trips[0].lugares} />
      :
      <h2>No se han agregado favoritos</h2>
    }
    </div>
  );
};

export default FavoriteTripsView;
