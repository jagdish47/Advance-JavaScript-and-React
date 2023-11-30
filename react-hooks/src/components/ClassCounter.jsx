import React, { Component } from "react";

class ClassCounter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }

  incrementCount = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };

  decrementCount = () => {
    this.setState({
      count: this.state.count - 1,
    });
  };

  render() {
    return (
      <div>
        <h1 style={{ fontSize: "20px" }}>
          Class Based Component How state Change
        </h1>
        <button onClick={this.incrementCount}>Increment</button>
        <h1>{this.state.count}</h1>
        <button onClick={this.decrementCount}>Decrement</button>
      </div>
    );
  }
}

export default ClassCounter;
