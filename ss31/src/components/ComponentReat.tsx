import React, { Component } from 'react';

interface MyComponentProps {
  data: string;
}

class MyComponent extends Component<MyComponentProps> {
  render() {
    return (
      <div>
        <h1>Data from props: {this.props.data}</h1>
      </div>
    );
  }
}

interface AppState {
  newData: string;
}

class App extends Component<{}, AppState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      newData: 'Initial data'
    };
    this.handleUpdateData = this.handleUpdateData.bind(this);
  }

  handleUpdateData() {
    this.setState({ newData: 'Updated data' });
  }

  render() {
    return (
      <div>
        <button onClick={this.handleUpdateData}>Update Data</button>
        <MyComponent data={this.state.newData} />
      </div>
    );
  }
}

export default App;
