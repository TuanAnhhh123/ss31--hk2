import React, { Component } from 'react'

export default class A extends Component {
    componentWillUnmount(): void {
        console.log("component đã bị tháo gỡ khỏi dom!");
        
    }
  render() {
    return (
      <div>A</div>
    )
  }
}