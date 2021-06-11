import React, { Component } from "react";

const App = () => <Counter></Counter>;

class Counter extends Component {
  constructor(props) {
    super(props);
    console.log(this.state);
    this.state = { count: 0 };
  }

  handlePlusButton = () => {
   const currentCount = this.state.count
    this.setState( { count: currentCount + 1 })
  }

  handleButton = () => {
   const downCount = this.state.count
    this.setState( { count: downCount - 1 })
  }

  render() {
    return (
      <>
        <div>count: {this.state.count} </div>
        <button onClick={this.handlePlusButton}>+1</button>
        <button onClick={this.handleButton}>-1</button>
      </>
    );
  }
}

export default App;
