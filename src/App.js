// jsxを利用する際には，Reactの定義が必要
import React, { Component } from 'react';

class App extends Component {
  render() {
    return (
      <React.Fragment>
      <label htmlFor="bar">bar</label>
        <input type="text" onChange={() => {console.log("hoge")}} />
      </React.Fragment>
    )

  }
}

export default App;
