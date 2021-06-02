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
            name: "Darth",
            image:
                "http://www.globalo.com/content/uploads/2015/12/darth-vader.jpg%22",
            message: "Your name is Luke, innit?",
        },
        {
            message: "Yeah, it is :)",
        },
        {
            name: "Darth",
            image:
                "http://www.globalo.com/content/uploads/2015/12/darth-vader.jpg%22",
            message: "I can be yo daddy",
        },
        {
            message: "Bruh 🙄",
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
                <h1 className="chatName"> Darth</h1>
            </div>
            <div className="chatScreen__content">
                <p className="chatScreen__timestamp">
                    YOU MATCHED WITH DARTH ON 10/08/20
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
