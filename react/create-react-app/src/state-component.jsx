import React from "react";

export default class StateComponent extends React.Component {
  /**
   * 组件的状态机： state
   *  */
  constructor(props) {
    super(props);
    this.state = {
      count: 10,
    };
  }
  increment = (type) => {
    if (type) {
      this.setState({
        count: (this.state.count -= 1),
      });
    } else {
      this.setState({
        count: (this.state.count += 1),
      });
    }
  }
  render() {
    return (
      <div>
        <h1>state</h1>
        <p>{this.state.count}</p>
        <button onClick={() => this.increment(false)}>增加</button>
        <button onClick={() => this.increment(true)}>减少</button>
      </div>
    );
  }
}
