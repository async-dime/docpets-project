import React, { useRef, useState } from "react";
import "./ChatApp.scss";

import firebase from "firebase/app"; //firebase SDK
import "firebase/firestore"; //firestore for database
import "firebase/auth"; //auth for user authentication
import "firebase/analytics";

//hooks for easier work with firebase
import { useAuthState } from "react-firebase-hooks/auth";
import { useCollectionData } from "react-firebase-hooks/firestore";

//firebase fonfig
firebase.initializeApp({
    apiKey: "AIzaSyB-txWkuzM-8_oBjnU1gpak0nppg4P7kjE",
    authDomain: "docpets-finalproject-glints9.firebaseapp.com",
    projectId: "docpets-finalproject-glints9",
    storageBucket: "docpets-finalproject-glints9.appspot.com",
    messagingSenderId: "179299488320",
    appId: "1:179299488320:web:b90147ac4b93f49ec405a5",
});

//make global variables
const auth = firebase.auth();
const firestore = firebase.firestore();
const analytics = firebase.analytics();

function ChatApp() {
    //checking user logging or not using useAuthState hooks
    const [user] = useAuthState(auth); //=>it will return user object with user ID, email address, etc

    return (
        <div className="chatContainer" style={{ backgroundColor: "#fff" }}>
            <div className="chatApp">
                <header className="chatHeader">
                    <SignOut />
                </header>
                <section>{user ? <ChatRoom /> : <SignIn />}</section>
            </div>
        </div>
    );
}

const buttonStyle = {
    backgroundColor: "#fde84d",
    color: "#445e6b",
    borderRadius: "10px",
    fontWeight: "bold",
    maxWidth: "400px",
    margin: "0 auto",
    border: "0px solid",
    display: "inline-block",
    fontSize: "1.25rem",
    padding: "15px 32px",
};

function SignIn() {
    //make function to signin with google
    const signInWithGoogle = () => {
        //make function called provider using firebase builtin auth.GoogleAuthProvider
        const provider = new firebase.auth.GoogleAuthProvider();

        //trigger popup window when user clicks the button
        auth.signInWithPopup(provider);
    };
    return (
        <>
            <button
                data-aos="fade-up"
                data-aos-delay="100"
                data-aos-duration="2000"
                data-aos-easing="ease-out"
                style={buttonStyle}
                onClick={signInWithGoogle}
            >
                Sign in with Google
            </button>
            <p className="my-3">Sign In to use our chat feature</p>
        </>
    );
}

function SignOut() {
    return (
        auth.currentUser && (
            <button
                data-aos="fade-up"
                data-aos-delay="100"
                data-aos-duration="2000"
                data-aos-easing="ease-out"
                style={buttonStyle}
                onClick={() => auth.signOut()}
            >
                Sign Out
            </button>
        )
    );
}

function ChatRoom() {
    const currentScroll = useRef();

    //make a reference for message collection
    const messagesRef = firestore.collection("messages");

    //make a query order by "createdAt" timestamp and limit to 25
    const query = messagesRef.orderBy("createdAt").limit(25);

    //listen to update to data in realtime with "useCollectionData" hook
    const [messages] = useCollectionData(query, { idField: "id" }); //  ==> return an array of object and each object is message in the database

    const [formValue, setFormValue] = useState("");

    const sendMessage = async (e) => {
        //normally when form submit it will refresh the page
        //preventDefault will prevent form to refresh the page when it submitted
        e.preventDefault();

        //
        const { uid, photoURL } = auth.currentUser;

        //create a new document in firestore database
        await messagesRef.add({
            text: formValue,
            createdAt: firebase.firestore.FieldValue.serverTimestamp(),
            uid,
            photoURL,
        });

        //reset the formValue back to empty string
        setFormValue("");

        //make the message auto scroll to the newest message
        currentScroll.current.scrollIntoView({ behavior: "smooth" });
    };
    return (
        <>
            <main className="mainChat">
                {messages &&
                    messages.map((msg) => (
                        <ChatMessage key={msg.id} message={msg} />
                    ))}
                <span ref={currentScroll}></span>
            </main>

            <form className="formChat" onSubmit={sendMessage}>
                <input
                    className="inputChat"
                    value={formValue}
                    onChange={(e) => setFormValue(e.target.value)}
                />
                <button disabled={!formValue} type="submit"></button>
            </form>
        </>
    );
}

function ChatMessage(props) {
    const { text, uid, photoURL } = props.message;

    const messageClass = uid === auth.currentUser.uid ? "sent" : "received";

    return (
        <>
            <div className={`message ${messageClass}`}>
                <img
                    className="chatImg"
                    src={
                        photoURL ||
                        "https://api.adorable.io/avatars/23/abott@adorable.png"
                    }
                />
                <p
                    className="textMsg"
                    style={{
                        maxWidth: "500px",
                        marginBottom: "12px",
                        lineHeight: "24px",
                        padding: "10px 20px",
                        borderRadius: "25px",
                        position: "relative",
                        color: "#fff",
                        textAlign: "center",
                    }}
                >
                    {text}
                </p>
            </div>
        </>
    );
}

export default ChatApp;
