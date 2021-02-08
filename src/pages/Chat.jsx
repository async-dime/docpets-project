import React from "react";
import NavBarLogin from "../components/NavbarLogin";
import Footer from "../components/Footer";
import ChatApp from "../components/Chat/ChatApp";

function ChatPage() {
    return (
        <div className="home">
            <NavBarLogin />
            <ChatApp />
            <Footer />
        </div>
    );
}

export default ChatPage;
