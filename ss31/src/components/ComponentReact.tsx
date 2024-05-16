import React, { Component } from 'react';

interface CompanyState {
  companyName: string;
}

class CompanyComponent extends Component<{}, CompanyState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      companyName: 'Rikkei Academy'
    };
    this.handleChangeState = this.handleChangeState.bind(this);
  }

  handleChangeState() {
    this.setState({ companyName: 'RikkeiSoft' });
  }

  render() {
    return (
      <div>
        <h1>Company: {this.state.companyName}</h1>
        <button onClick={this.handleChangeState}>Change state</button>
      </div>
    );
  }
}

export default CompanyComponent;
