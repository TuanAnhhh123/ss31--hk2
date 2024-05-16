import React, { Component } from 'react';

interface MessageState {
  message: string;
  clicked: boolean;
}

class MessageComponent extends Component<{}, MessageState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      message: 'Học code để đi làm',
      clicked: false
    };
    this.handleChangeMessage = this.handleChangeMessage.bind(this);
  }

  handleChangeMessage() {
    if (!this.state.clicked) {
      this.setState({ message: 'Học code sẽ thành công. Cố lên!!!', clicked: true });
    }
  }

  shouldComponentUpdate(nextProps: {}, nextState: MessageState) {
    return !this.state.clicked || nextState.message !== this.state.message;
  }

  render() {
    return (
      <div>
        <h1>Message: {this.state.message}</h1>
        <button onClick={this.handleChangeMessage}>Change message</button>
      </div>
    );
  }
}

export default MessageComponent;
