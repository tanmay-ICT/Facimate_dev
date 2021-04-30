import React, { useState } from 'react';
import Avatar from "@material-ui/core/Avatar";
import "./ChatScreen.css";


function ChatScreen() {
    
    const [input, setInput] = useState ('');
    const [messages, setMessages] = useState ([

    {
        name: "Darth",
        image: "http://www.globalo.com/content/uploads/2015/12/darth-vader.jpg%22",
        message: "I can be yo daddy",   
    
    },
    {
        name: "Darth",
        image: "http://www.globalo.com/content/uploads/2015/12/darth-vader.jpg%22",
        message: "Your name is Luke, innit?",

    },
    {
        message: "Bomboclat, hell no. I ain't ya bwoy!",
    },
    ]);
    
    const handleSend = e => {

        e.preventDefault();

        setMessages ([...messages, { message: input}]);
        setInput ("");
    }

    return (
        <div>
            <p className="chatScreen__timestamp">YOU MATCHED WITH DARTH ON 10/08/20</p>
            {messages.map((message) => (
                message.name ? ( 
                
                <div className ="chatScreen__message">
                    <Avatar 
                        className="chatScreen--image"
                        alt={message.name}
                        src={message.image}
                    />

                    <p className="chatScreen__text"> {message.message} </p>
                </div>
                ) : (

                    <div className ="chatScreen__message">
                    <p className="chatScreen__textUser"> {message.message} </p>
                </div>

                )
            ))}

                <form className="chatScreen__input">
                    
                    <input 
                    value = {input}
                    onChange={e => setInput(e.target.value)}
                    className="chatScreen__inputField"
                    placeholder="Type a message..." type= "text"/>
                    <button onClick={handleSend} type="submit" className="chatScreen__inputButton" >SEND</button>
                </form>

        </div>
    );
}

export default ChatScreen;
