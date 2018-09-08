// jsxを利用する際には，Reactの定義が必要
import React from 'react';
import PropTypes from 'prop-types';

const App = () => {
  const profiles = [
    { name: "Taro", age: 10 },
    { name: "Taro", age: 10 },
    { name: "NoName", age: 5 }
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

User.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number.isRequired
}

export default App;
