import React, { Component } from "react";
import "./styles.css";

export default class ComopentsTimer extends Component {
  constructor(props) {
    super(props);
    this.state = { num: 0, interval: 0, isActive: true };
    console.log(this.state.interval, this.state.num);
  }

  start = () => {
    this.setState(() => ({ isActive: !this.state.isActive }));
    if (this.state.isActive) {
      let intervals = setInterval(this.fun, 1000);
      this.setState((prev) => ({ interval: intervals }));
    } else {
      this.stop();
    }
  };
  fun = () => {
    this.setState((prev) => ({ num: prev.num + 1 }));
  };
  stop = () => {
    clearInterval(this.state.interval);
  };
  reset = () => {
    this.stop();
    this.setState({ num: 0 });
    if (this.state.isActive === false) {
      this.setState((prev) => ({ isActive: !this.state.isActive }));
    }
  };

  render() {
    return (
      <div className="container">
        <h2>Class base</h2>
        <div className="wrapper">
          <h1>
            {Math.floor(this.state.num / 60) < 10
              ? "0" + Math.floor(this.state.num / 60)
              : Math.floor(this.state.num / 60)}
            :
            {this.state.num % 60 < 10
              ? "0" + (this.state.num % 60)
              : this.state.num % 60}
          </h1>
          <button className="btn1" onClick={this.start}>
            {!this.state.isActive ? "Stop" : "Start"}
          </button>
          <button className="btn2" onClick={this.reset}>
            Reset
          </button>
        </div>
      </div>
    );
  }
}
