import { take, takeLatest } from "redux-saga/effects"
import { DELETE_ELECTION_PENDING, DELETE_PARTY_CONNECTION_PENDING, DELETE_PARTY_PENDING, DELETE_USER_PENDING, GET_ELECTION_PENDING, GET_PARTY_CONNECTION_PENDING, GET_PARTY_PENDING, GET_USER_PENDING, POST_ELECTION_PENDING, POST_PARTY_CONNECTION_PENDING, POST_PARTY_PENDING, POST_USER_PENDING } from "../../admin/action"
import { handle_delete_election, handle_delete_party, handle_delete_partyConnection, handle_delete_user, handle_get_election, handle_get_party, handle_get_partyConnection, handle_get_user, handle_post_election, handle_post_party, handle_post_partyConnection, handle_post_user } from "../admin/adminHandle"

function* handle_get_party_saga() {
    yield takeLatest(GET_PARTY_PENDING, handle_get_party)
}

function* handle_post_party_saga() {
    yield takeLatest(POST_PARTY_PENDING, handle_post_party)
}

function* handle_delete_party_saga() {
    yield takeLatest(DELETE_PARTY_PENDING, handle_delete_party)
}

function* handle_get_user_saga() {
    yield takeLatest(GET_USER_PENDING, handle_get_user)
}

function* handle_post_user_saga() {
    yield takeLatest(POST_USER_PENDING, handle_post_user)
}

function* handle_delete_user_saga() {
    yield takeLatest(DELETE_USER_PENDING, handle_delete_user)
}

function* handle_get_election_saga() {
    yield takeLatest(GET_ELECTION_PENDING,handle_get_election)
}

function* handle_post_election_saga() {
    yield takeLatest(POST_ELECTION_PENDING,handle_post_election)
}

function* handle_delete_election_saga() {
    yield takeLatest(DELETE_ELECTION_PENDING,handle_delete_election)
}

function* handle_get_partyConnection_saga() {
    yield takeLatest(GET_PARTY_CONNECTION_PENDING,handle_get_partyConnection)
}

function* handle_post_partyConnection_saga() {
    yield takeLatest(POST_PARTY_CONNECTION_PENDING,handle_post_partyConnection)
}

function* handle_delete_partyConnection_saga() {
    yield takeLatest(DELETE_PARTY_CONNECTION_PENDING,handle_delete_partyConnection)
}

export { handle_get_party_saga, handle_post_party_saga, handle_get_user_saga, handle_delete_party_saga, handle_post_user_saga , handle_delete_user_saga ,handle_get_election_saga, handle_post_election_saga , handle_delete_election_saga , handle_get_partyConnection_saga ,handle_delete_partyConnection_saga ,handle_post_partyConnection_saga}