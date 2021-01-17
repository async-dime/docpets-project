import React from "react";
import { Link } from "react-router-dom";

function ClinicCard(props) {
  console.log(props, "YOYOYO");
  // console.log(props, "YOYOYO");
  return (
    <div className="clinic-card">
      <Link to={`/clinic/${props.id}`}>
      {/* <Link to={`/clinic/${props.id}`}> */}
        <img
          className="clinic-card--image"
          src={`${props.foto}`}
          // src={`${props.foto}`}
          alt={props.nama + " poster"}
          // alt={props.nama + " poster"}
        />
        <p className="clinic-card--title">{props.nama}</p>
        <p className="clinic-card--desc">{props.lokasi}</p>
        <p className="clinic-card--desc">{props.tentang}</p>
        {/* <p className="clinic-card--title">{props.nama}</p>
        <p className="clinic-card--desc">{props.lokasi}</p>
        <p className="clinic-card--desc">{props.tentang}</p> */}
      </Link>
    </div>
  );
}

export default ClinicCard;