// アプリケーション内に存在するすべてのreducersを統括するためのファイル
// 結合用のパッケージをリダックスパッケージからimportして利用する

import { combineReducers } from 'redux';
import count from './count';

export default combineReducers({ count })

