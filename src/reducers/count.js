import { INCREMENT, DECREMENT } from '../actions'

// 状態の初期値を定義する

const initialState = { value: 0 }

// stateとactionを受け取るように作る
// stateの初期値は上で定義したものを利用する.
export default (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT:
      return { value: state.value + 1 }
      break;
    case DECREMENT:
      return { value: state.value - 1 }
      break;
    default:
      return state;
  }
}
