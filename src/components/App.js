// jsxを利用する際には，Reactの定義が必要
import React, { Component } from 'react';
import { connect } from 'react-redux'

import { increment, decrement } from '../actions'

class App extends Component {
  // redux側で状態を触るのでconstructorは不要になる

  render() {
    const props = this.props
    return (
      <React.Fragment>
        <div>counter: { props.value }</div>
        <button onClick={props.increment}>+1</button>
        <button onClick={props.decrement}>-1</button>
      </React.Fragment>
    )
  }
}


// stateの情報からこのcomponentに必要な物を取り出して
// component内のpropsとしてmappingする機能を持つ関数
// 引数には状態のtop levelを示すstateを書いて
// どういったオブジェクトをpropsとして対応させるのかを関数の戻り値として
// 定義する.
//
const mapStateToProps = state => ({ value: state.count.value })

// dispatch
// あるアクションが発生したときに
// reducerにタイプに応じた状態遷移を実行させるための関数が
// dispatch
// dispatch関数を引数にとって，
// このcomponentで必要になるdispatch関数を定義する.
//
// const mapDispatchToProps = dispatch => ({
//   increment: () => dispatch(increment()),
//   decrement: () => dispatch(decrement())
// })

// こちらは上のコメントアウトされた処理のショートハンド
const mapDispatchToProps = ({increment, decrement})

export default connect(mapStateToProps, mapDispatchToProps)(App);
