// アクションは type と それに対応する 値を持つ．
// type は ユニークでなければならない．
// アクションを返す関数をアクションクリエイターという
// ここで作成したアクションクリエイターはビューを担当するコンポーネント側で利用する．
// そのため，exportする．
//
export const INCREMENT = 'INCREMENT'
export const DECREMENT = 'DECREMENT'

export const increment = () => ({
  type: 'INCREMENT'
})

export const decrement = () => ({
  type: 'DECREMENT'
})
