import React from "react";
import NavbarLogin from "../components/NavbarLogin";
import Footer from "../components/Footer";
import DetailBookingContent from "../components/DetailBookingContent";

function DetailBooking() {
    return (
        <div>
            <NavbarLogin />
            <DetailBookingContent />
            <Footer />
        </div>
    );
}

export default DetailBooking;
