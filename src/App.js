// jsxを利用する際には，Reactの定義が必要
import React from 'react';

// class App extends Component {
//   render() {
//     return (
//       <React.Fragment>
//       <label htmlFor="bar">bar</label>
//         <input type="text" onChange={() => {console.log("hoge")}} />
//       </React.Fragment>
//     )
//   }
// }

const App = () => {
  return (
    <div>
      Hi!Im Funtion
      <Cat />
      <Cat />
      <Cat />
      <Cat />
    </div>
  )
}

const Cat = () => {
  return <div>Meow</div>
}

export default App;
