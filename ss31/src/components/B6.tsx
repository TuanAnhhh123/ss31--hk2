import React, { Component } from 'react';

interface MyComponentProps {
  data: string;
}

interface MyComponentState {
  data: string;
}

class MyComponent extends Component<MyComponentProps, MyComponentState> {
  constructor(props: MyComponentProps) {
    super(props);
    this.state = {
      data: props.data
    };
  }

  componentDidUpdate(prevProps: MyComponentProps) {
    // Kiểm tra nếu prop data đã thay đổi, thì cập nhật state data
    if (this.props.data !== prevProps.data) {
      this.setState({ data: this.props.data });
    }
  }

  render() {
    return (
      <div>
        <h1>Data from prop: {this.state.data}</h1>
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

