import React from "react";
import NavBarLogin from "../components/NavbarLogin";
import Footer from "../components/Footer";
import ChatBox from "../components/Chat/ChatBox";

function TestPage() {
    return (
        <div className="home">
            <NavBarLogin />
            <ChatBox />
        </div>
    );
}

export default TestPage;
