import { all } from "redux-saga/effects";
import { handle_delete_election_saga, handle_delete_partyConnection_saga, handle_delete_party_saga, handle_delete_user_saga, handle_get_election_saga, handle_get_partyConnection_saga, handle_get_party_saga, handle_get_user_saga, handle_get_vote_saga, handle_post_election_saga, handle_post_partyConnection_saga, handle_post_party_saga, handle_post_user_saga, handle_post_vote_saga } from "./root/handleSaga";

function* rootSaga() {
    yield all([handle_get_party_saga(),handle_post_party_saga(),handle_get_user_saga(),handle_delete_party_saga(),handle_post_user_saga(),handle_delete_user_saga(),handle_get_election_saga(),handle_post_election_saga(),handle_delete_election_saga(),handle_get_partyConnection_saga(),handle_delete_partyConnection_saga(),handle_post_partyConnection_saga(),handle_get_vote_saga(),handle_post_vote_saga()])
}

export default rootSaga;