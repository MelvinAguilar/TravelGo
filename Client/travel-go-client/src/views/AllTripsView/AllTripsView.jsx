import classes from "./AllTripsView.module.scss";
import Place from "../../components/Trips/Places/Places";
import axios from "axios";
import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import { useConfigContext } from "../../contexts/ConfigContext";

const AllTripsView = ({ className, ...rest }) => {
  const [ trips, setTrips ] = useState([]);
  const { startLoading, stopLoading } = useConfigContext();

  useEffect(() => {
    fetchTrips();
  }, []);

  const fetchTrips = async () => {
    try {
      startLoading();

      const { data } = await axios.get("/places_info");
      setTrips(data);
    } catch (error) {
      toast.error(error.message, {
        toastId: "fetchTripsError",
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

export default AllTripsView;
