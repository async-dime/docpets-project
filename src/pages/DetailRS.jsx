import React from "react";
import NavbarLogin from "../components/NavbarLogin";
import Footer from "../components/Footer";
import DetailrsContent from "../components/DetailRSContent";
import {
    BrowserRouter as Routerz,
    Switch,
    Route as Routerx,
} from "react-router-dom";

function Detailrs() {
    return (
        <Routerz>
            <div>
                <NavbarLogin />
                <Switch>
                    <Routerx
                        exact
                        path="/detailrs/:id"
                        component={DetailrsContent}
                    />
                </Switch>
                <Footer />
            </div>
        </Routerz>
    );
}

export default Detailrs;
