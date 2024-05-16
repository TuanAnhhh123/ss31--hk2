import React, { Component } from 'react';

interface Exercise01State {
  userName: string;
}

class Exercise01 extends Component<{}, Exercise01State> {
  constructor(props: {}) {
    super(props);
    this.state = {
      userName: 'Tên của bạn',
    };
  }

  componentDidMount() {
    
  }

  render() {
    return (
      <div>
        <h1>Xin chào, {this.state.userName}!</h1>

      </div>
    );
  }
}

export default Exercise01;
