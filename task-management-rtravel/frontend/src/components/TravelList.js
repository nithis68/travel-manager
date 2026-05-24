import React, {
  useEffect,
  useState,
} from "react";

import axios from "axios";

function TravelList() {
  const [travels, setTravels] =
    useState([]);

  useEffect(() => {
    fetchTravels();
  }, []);

  const fetchTravels = async () => {
    try {
      const response =
        await axios.get(
          "http://localhost:5000/api/travels"
        );

      setTravels(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const deleteTravel = async (
    id
  ) => {
    try {
      await axios.delete(
        `http://localhost:5000/api/travels/${id}`
      );

      fetchTravels();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h2>Travel List</h2>

      {travels.map((travel) => (
        <div
          key={travel._id}
          className="box"
        >
          <p>
            <b>Name:</b>{" "}
            {
              travel.customerName
            }
          </p>

          <p>
            <b>Vehicle:</b>{" "}
            {
              travel.vehicleType
            }
          </p>

          <p>
            <b>From:</b>{" "}
            {travel.source}
          </p>

          <p>
            <b>To:</b>{" "}
            {
              travel.destination
            }
          </p>

          <button
            onClick={() =>
              deleteTravel(
                travel._id
              )
            }
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}

export default TravelList;
