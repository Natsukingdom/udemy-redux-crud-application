// jsxを利用する際には，Reactの定義が必要
import React from 'react';

const App = () => {
  const profiles = [
    { name: "Taro", age: 10 },
    { name: "Hanako", age: 5 },
    { name: "Noname" }
  ]
  return (
    <div>
      {
        profiles.map((profile, i) => {
          return <User name={profile.name} age={profile.age} key={i} />
        })
      }
    </div>
  )
}

const User = (props) => {
  return <div>Hello, My name is {props.name}, and {props.age} years old !!</div>
}

User.defaultProps = {
  age: 1
}

export default App;
