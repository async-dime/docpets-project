import React from "react";
import { Link } from "react-router-dom";

function ClinicCard(props) {
    console.log(props, "YOYOYO");
    return (
        <div className="clinic-card">
            <Link to={`/clinic/${props.id}`}>
                <img
                    className="clinic-card--image"
                    src={`${props.foto}`}
                    alt={props.nama + " poster"}
                />
                <p className="clinic-card--title">{props.nama}</p>
                <p className="clinic-card--desc">{props.lokasi}</p>
                <p className="clinic-card--desc">{props.tentang}</p>
            </Link>
        </div>
    );
}

export default ClinicCard;
