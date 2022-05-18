import React, { useEffect, useState } from "react";
import Heading from "../utilities/Heading";
import Form from "../utilities/Form";
import axios from "axios";

function Booking() {
  const [barberData, setBarberData] = useState();
  const [serviceData, setServiceData] = useState([]);

  const baseUrl = "http://localhost:3001";

  function getBarberData() {
    axios
      .get(`${baseUrl}/barbers`)
      .then((response) => {
        // console.log(response.data[0].firstName);
        setBarberData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  function getServiceData() {
    axios
      .get(`${baseUrl}/services`)
      .then((response) => {
        console.log(response.data);
        setServiceData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  // console.log(serviceData);

  useEffect(() => {
    getBarberData();
    getServiceData();
  }, []);

  return (
    <div className="page-wrap">
      <Heading
        title="BOOK YOUR BARBER"
        para1="Great Hair Doesn't happen by Chance. It happens by Appointent!"
        para2="So Don't Wait And Book Your Apointment Now"
      />

      <Form barberData={barberData} serviceData={serviceData} />
    </div>
  );
}

export default Booking;
