import React from "react";
import NavbarLogin from "../components/NavbarLogin";
import Footer from "../components/Footer";
import DetailBookingContent from "../components/DetailBookingContent";
import {
    BrowserRouter as Routerz,
    Switch,
    Route as Routerx,
} from "react-router-dom";

function DetailBooking() {
    return (
        <Routerz>
            <div>
                <NavbarLogin />
                <Switch>
                    <Routerx
                        exact
                        path="/detailbooking/:id"
                        component={DetailBookingContent}
                    />
                </Switch>
                <Footer />
            </div>
        </Routerz>
    );
}

export default DetailBooking;
