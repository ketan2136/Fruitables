import { all, call, put, takeEvery, takeLatest } from 'redux-saga/effects'
import Api from '...'
import { SIGNUP_REQUEST } from '../Actiontype'
import { singupAPI } from '../../api/auth.api'

function* signupSaga(action) {
    console.log(action);
    try {
        const user = yield call(singupAPI, action.payload);
        // yield put({ type: 'USER_FETCH_SUCCEEDED', user: user }); // Check if this action type is correct
    } catch (e) {
        yield put({ type: 'USER_FETCH_FAILED', message: e.message }); // Check if this action type is correct
    }
}
function* loginSaga(action) {
    console.log(action);
    try {
        const user = yield call(singupAPI, action.payload);
        // yield put({ type: 'USER_FETCH_SUCCEEDED', user: user }); // Check if this action type is correct
    } catch (e) {
        yield put({ type: 'USER_FETCH_FAILED', message: e.message }); // Check if this action type is correct
    }
}


function* signupWatch() {
    yield takeEvery(SIGNUP_REQUEST, signupSaga); // Ensure that you're watching for SIGNUP_REQUEST
}
function* loginupWath() {
    yield takeLatest(ActionTypes.LOGIN_REQUEST, loginSaga)
}



export function* loginSaga() {
    yield all([
        signupWatch()
        loginupWath()
    ]);
}
