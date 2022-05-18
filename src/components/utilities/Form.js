import React from "react";
import { useForm } from "react-hook-form";
// import Heading from "../utilities/Heading";
import Select from "react-select";

function Form({ barberData, serviceData }) {
  // const { register, errors, handleSubmit } = useForm();
  const { register } = useForm();

  if (!barberData || !serviceData) {
    return "Loading...";
  }

  function submitHandle(e) {
    e.preventDefault();
  }

  return (
    <div className="outer-wrap">
      <img src="/image/poster.jpg" alt="barber-poster" className="poster" />

      <div className="form-outer-wrap">
        <h2 className="form-heading">BOOK YOUR APPOINTMENT</h2>
        <form onSubmit={submitHandle} className="form-wrap">
          <div className="form-group-1">
            <input
              type="text"
              placeholder="First Name"
              {...register("First name", { required: true, maxLength: 80 })}
            />

            <input
              type="text"
              placeholder="last Name"
              {...register("Last name", { required: true, maxLength: 100 })}
            />
          </div>
          <div className="form-group-2">
            <input
              type="text"
              placeholder="Email"
              {...register("Email", {
                required: true,
                pattern:
                  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
              })}
            />

            <input
              type="tel"
              placeholder="Contact Number"
              {...register("Mobile number", {
                required: true,
                maxLength: 11,
                minLength: 8,
              })}
            />
          </div>

          <div className="form-group">
            <select
              name="Barber"
              placeholder="Select Barber"
              {...register("barber", { required: true })}
            >
              <option value="Select Barber">Select Barber</option>
              <option value={barberData[0].firstName}>
                {`${barberData[0].firstName} ${barberData[0].lastName}`}
              </option>
            </select>

            <select
              name="Services"
              placeholder="Select Services"
              {...register("services", { required: true })}
            >
              {" "}
              <option value="Select'Barber">Select Service</option>
              {serviceData.map((service, i) => {
                return (
                  <option value="Select'Barber" key={service.id}>
                    {service.name}
                  </option>
                );
              })}
            </select>
          </div>

          <div className="form-group-1">
            <input
              type="date"
              placeholder="Select Date"
              {...register("Mobile number", {
                required: true,
                maxLength: 11,
                minLength: 8,
              })}
              onChange={(e) => {
                console.log(e.target);
              }}
            />
            <input
              type="time"
              placeholder="Select Time"
              {...register("Mobile number", {
                required: true,
                maxLength: 11,
                minLength: 8,
              })}
            />
          </div>

          <input className="price-input" placeholder="Price" disabled />
          <button className="btn">BOOK APPOINTMENT</button>
        </form>
      </div>
    </div>
  );
}

export default Form;
