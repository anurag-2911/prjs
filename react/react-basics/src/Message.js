import React from "react";

class Message extends React.Component {
    render() {
        const {msg} = this.props;
        return (
             <>
             <h1>{msg} World!!</h1>
             </>
        );
    }
}

export default Message;