import React from "react";
import { Link } from "react-router-dom";

function ClinicCard({clinic}) {
  console.log(clinic, "YOYOYO");
  // console.log(props, "YOYOYO");
  return (
    <div className="clinic-card">
      <Link to={`/clinic/${clinic.id}`}>
      {/* <Link to={`/clinic/${props.id}`}> */}
        <img
          className="clinic-card--image"
          src={`${clinic.foto}`}
          // src={`${props.foto}`}
          alt={clinic.nama + " poster"}
          // alt={props.nama + " poster"}
        />
        <p className="clinic-card--title">{clinic.nama}</p>
        <p className="clinic-card--desc">{clinic.lokasi}</p>
        <p className="clinic-card--desc">{clinic.tentang}</p>
        {/* <p className="clinic-card--title">{props.nama}</p>
        <p className="clinic-card--desc">{props.lokasi}</p>
        <p className="clinic-card--desc">{props.tentang}</p> */}
      </Link>
    </div>
  );
}

export default ClinicCard;