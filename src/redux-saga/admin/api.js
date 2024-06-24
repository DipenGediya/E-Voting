import axios from "axios";
import { BASE_URL, DELETE_ELECTION, DELETE_PARTY, DELETE_PARTY_CONNECTION, DELETE_USER, GET_ELECTION_LIST, GET_PARTY_CONNECTION_LIST, GET_PARTY_LIST, GET_USER_LIST, POST_ELECTION, POST_PARTY, POST_PARTY_CONNECTION, POST_USER } from "../constant";
import { actionChannel } from "redux-saga/effects";

// PARTY

async function get_party(action) {

    // console.log(action, "from spi");
    let res = await axios.get(BASE_URL + GET_PARTY_LIST)
    let data = res.data.data
    let status = res.status
    return { data, status }
}

async function post_party(action) {
    let res = await axios.post(BASE_URL + POST_PARTY, action.payload);
    let data = res.data.data;
    let status = res.status
    return { data, status }
}

async function delete_party(action) {

    // console.log(action, "from api");
    let res = await axios.delete(BASE_URL + DELETE_PARTY + action.payload)

    let data = res.data;
    let status = res.status;

    return { data, status }
}

//USER

async function get_user(action) {
    let res = await axios.get(BASE_URL + GET_USER_LIST)

    let data = res.data.data
    let status = res.status

    return { data, status }
}

async function post_user(action) {
    let res = await axios.post(BASE_URL + POST_USER, action.payload)
    let data = res.data.data;
    let status = res.status

    return { data, status }
}

async function delete_user(action) {
    let res = await axios.delete(BASE_URL + DELETE_USER + action.payload);
    let data = res.data;
    let status = res.status;

    return { data, status }
}


//ELECTION

async function get_election(action) {
    let res = await axios.get(BASE_URL + GET_ELECTION_LIST);
    let data = res.data.data;
    let status = res.status;

    return { data, status }
}

async function post_election(action) {
    let res = await axios.post(BASE_URL + POST_ELECTION, action.payload)

    let data = res.data.data;
    let status = res.status;

    return { data, status }
}

async function delete_election(action) {
    let res = await axios.delete(BASE_URL + DELETE_ELECTION + action.payload)

    let data = res.data;
    let status = res.status

    return { data, status }
}

//PARTY CONNECTION

async function get_partyConnection(action) {
    let res = await axios.get(BASE_URL + GET_PARTY_CONNECTION_LIST);
    let data = res.data.data;
    console.log(data, "partyconnectio");
    let status = res.status

    return { data, status }
}

async function post_partyConnection(action) {
    let res = await axios.post(BASE_URL + POST_PARTY_CONNECTION, action.payload)

    let data = res.data.data;
    let status = res.status

    return{data,status}
}

async function delete_partyConnection(action) {
    let res = await axios.delete(BASE_URL + DELETE_PARTY_CONNECTION + action.payload)
    console.log(res, "from delete");

    let data = res.data;
    let status = res.status;

    return { data, status }
}

export { get_party, post_party, delete_party, get_user, post_user, delete_user, get_election, post_election, delete_election, get_partyConnection, delete_partyConnection ,post_partyConnection}