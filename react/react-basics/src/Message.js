import React, { useEffect } from "react";


function TestUseEffet(){
  const[] = useEffect();
}
class Message extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: this.props.counter,
    };
  }

  updateDate() {
    this.setState({ date: new Date().toString() });
  }
  render() {
    const { msg } = this.props;
    return (
      <>
        <h1>{msg} World!!</h1>
      </>
    );
  }
}

export default Message;
