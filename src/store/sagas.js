import { takeEvery, put } from 'redux-saga/effects'
import { GET_INIT_LIST } from './actionTypes'
import { initListAction } from './actionCreators'
import axios from 'axios'

// json-server --watch ./src/list.json -p 4000
function* getInitList(){
    try {
    const res = yield axios.get('http://localhost:4000/list');
    const action = initListAction(res.data);
    yield put(action);  
    }catch(e){
      console.log('list.json 网络请求失败')
    }
}

//generator 函数
function* mySaga() {
  yield takeEvery(GET_INIT_LIST, getInitList);
}

export default mySaga;