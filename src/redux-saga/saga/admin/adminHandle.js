import { call, put } from "redux-saga/effects"
import { delete_election, delete_party, delete_partyConnection, delete_user, get_election, get_party, get_partyConnection, get_user, post_election, post_party, post_partyConnection, post_user } from "../../admin/api"
import { DELETE_ELECTION_ERROR, DELETE_ELECTION_SUCCESS, DELETE_PARTY_CONNECTION_ERROR, DELETE_PARTY_CONNECTION_SUCCESS, DELETE_PARTY_ERROR, DELETE_PARTY_SUCCESS, DELETE_USER_ERROR, DELETE_USER_SUCCESS, GET_ELECTION_ERROR, GET_ELECTION_SUCCESS, GET_PARTY_CONNECTION_ERROR, GET_PARTY_CONNECTION_SUCCESS, GET_PARTY_ERROR, GET_PARTY_SUCCESS, GET_USER_ERROR, GET_USER_SUCCESS, POST_ELECTION_ERROR, POST_ELECTION_SUCCESS, POST_PARTY_CONNECTION_ERROR, POST_PARTY_CONNECTION_SUCCESS, POST_PARTY_ERROR, POST_PARTY_SUCCESS, POST_USER_ERROR, POST_USER_SUCCESS } from "../../admin/action"

function* handle_get_party(action) {
    // console.log(action,"from adminhandler");
    try {
        let { data, status } = yield call(get_party, action)

        yield put({ type: GET_PARTY_SUCCESS, payload: data })
    } catch (error) {
        yield put({ type: GET_PARTY_ERROR, payload: error })
    }

    console.log(action, "from adminhandler");
}

function* handle_post_party(action) {
    try {
        let { data, status } = yield call(post_party, action)

        yield put({ type: POST_PARTY_SUCCESS, payload: data })
    } catch (error) {
        yield put({ type: POST_PARTY_ERROR, payload: error })
    }
}

function* handle_delete_party(action) {
    try {
        let { data, status } = yield call(delete_party, action)

        yield put({ type: DELETE_PARTY_SUCCESS, payload: data })
    } catch (error) {
        yield put({ type: DELETE_PARTY_ERROR, payload: error })
    }
}

// USER

function* handle_get_user(action) {
    try {
        let { data, status } = yield call(get_user, action)

        yield put({ type: GET_USER_SUCCESS, payload: data })
    } catch (error) {
        yield put({ type: GET_USER_ERROR, payload: error })
    }
}

function* handle_post_user(action) {
    try {
        let { data, status } = yield call(post_user, action);
        yield put({ type: POST_USER_SUCCESS, payload: data });
    } catch (error) {
        yield put({ type: POST_USER_ERROR, payload: error })
    }
}

function* handle_delete_user(action) {
    try {
        let { data, status } = yield call(delete_user, action)

        yield put({ type: DELETE_USER_SUCCESS, payload: data })
    } catch (error) {
        yield put({ type: DELETE_USER_ERROR, payload: error })
    }
}

//ELECTION

function* handle_get_election(action) {
    try {
        let { data, status } = yield call(get_election, action)

        yield put({ type: GET_ELECTION_SUCCESS, payload: data })
    } catch (error) {
        yield put({ type: GET_ELECTION_ERROR, payload: error })
    }
}

function* handle_post_election(action) {
    try {
        let { data, status } = yield call(post_election, action)
        yield put({ type: POST_ELECTION_SUCCESS, payload: data })
    } catch (error) {
        yield put({ type: POST_ELECTION_ERROR, payload: error })
    }
}

function* handle_delete_election(action) {

    try {
        let { data, status } = yield call(delete_election, action)

        yield put({ type: DELETE_ELECTION_SUCCESS, payload: data })
    } catch (error) {
        yield put({ type: DELETE_ELECTION_ERROR, payload: error })
    }

}

//PARTY CONNECTION

function* handle_get_partyConnection(action) {
    try {
        let { data, status } = yield call(get_partyConnection, action)
        yield put({ type: GET_PARTY_CONNECTION_SUCCESS, payload: data })
    } catch (error) {
        yield put({ type: GET_PARTY_CONNECTION_ERROR, payload: error })
    }
}

function* handle_post_partyConnection(action) {
    try {
        let {data,status} = yield call(post_partyConnection,action)

        yield put({type:POST_PARTY_CONNECTION_SUCCESS,payload:data})
    } catch (error) {
        yield put({type:POST_PARTY_CONNECTION_ERROR,payload:error})
    }
}

function* handle_delete_partyConnection(action) {

    try {
        let { data, status } = yield call(delete_partyConnection, action);
        yield put({ type: DELETE_PARTY_CONNECTION_SUCCESS, payload: data })
    } catch (error) {
        yield put({ type: DELETE_PARTY_CONNECTION_ERROR, payload: error })
    }

}

export { handle_get_party, handle_post_party, handle_delete_party, handle_get_user, handle_post_user, handle_delete_user, handle_get_election, handle_post_election, handle_delete_election, handle_get_partyConnection,handle_post_partyConnection ,handle_delete_partyConnection }