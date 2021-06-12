import React, {useState} from "react";
import Avatar from "@material-ui/core/Avatar";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import IconButton from "@material-ui/core/IconButton";
import AddIcon from '@material-ui/icons/Add';
import SendIcon from '@material-ui/icons/Send';
import "./ChatScreen.css";
import {useHistory} from "react-router-dom";

export const Return = () => {
    let history = useHistory();
    return (
        <>

            <IconButton className="navBtnHead" onClick={() => history.goBack()}><ArrowBackIcon
                fontSize="large"/></IconButton>
        </>
    );
};

function ChatScreen() {
    const [input, setInput] = useState("");
    const [messages, setMessages] = useState([
        {
            name: "Edna",
            image: "https://images.pexels.com/photos/3765114/pexels-photo-3765114.jpeg",
            message: "Hey, there. A little bird told me you're into biking.",
        },
        {
            message: "Yeah, totally! Absolutely love it",
        },
        {
            message: "But usually fun, in groups or with somebody else to experience it with",
        },
        {
            name: "Edna",
            image: "https://images.pexels.com/photos/3765114/pexels-photo-3765114.jpeg",
            message: "I know right! Since I'm new around here, I haven't found anybody I know yet who is really into it.",
        },
    ]);

    const handleSend = (e) => {
        e.preventDefault();

        setMessages([...messages, {message: input}]);
        setInput("");
    };

    return (
        <div>
            <div className="NavHeader">
                <Return/>
                <h1 className="chatName"> Edna</h1>
            </div>
            <div className="chatScreen__content">
                <p className="chatScreen__timestamp">
                    YOU MATCHED WITH EDNA ON 10/08/20
                </p>
                {messages.map((message) =>
                    message.name ? (
                        <div className="chatScreen__message">
                            <Avatar
                                className="chatScreen--image"
                                alt={message.name}
                                src={message.image}
                            />

                            <p className="chatScreen__text"> {message.message} </p>
                        </div>
                    ) : (
                        <div className="chatScreen__message">
                            <p className="chatScreen__textUser"> {message.message} </p>
                        </div>
                    )
                )}

                    <form className="chatScreen__input">
                        <IconButton className="addMedia"><AddIcon fontSize="large"/></IconButton>
                        <input
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            className="chatScreen__inputField"
                            placeholder="Type a message..."
                            type="text"
                        />
                        <IconButton className="chatScreen__inputButton"
                                    onClick={handleSend}
                                    type="submit"
                        >
                            <SendIcon fontSize="medium"/>
                        </IconButton>
                    </form>
            </div>
        </div>
    );
}

export default ChatScreen;
