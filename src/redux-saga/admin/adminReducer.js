import React from 'react'
import { DELETE_ELECTION_ERROR, DELETE_ELECTION_PENDING, DELETE_ELECTION_SUCCESS, DELETE_PARTY_CONNECTION_ERROR, DELETE_PARTY_CONNECTION_PENDING, DELETE_PARTY_CONNECTION_SUCCESS, DELETE_PARTY_ERROR, DELETE_PARTY_PENDING, DELETE_PARTY_SUCCESS, DELETE_USER_ERROR, DELETE_USER_PENDING, DELETE_USER_SUCCESS, GET_ELECTION_ERROR, GET_ELECTION_PENDING, GET_ELECTION_SUCCESS, GET_PARTY_CONNECTION_ERROR, GET_PARTY_CONNECTION_PENDING, GET_PARTY_CONNECTION_SUCCESS, GET_PARTY_ERROR, GET_PARTY_PENDING, GET_PARTY_SUCCESS, GET_USER_ERROR, GET_USER_PENDING, GET_USER_SUCCESS, POST_ELECTION_ERROR, POST_ELECTION_PENDING, POST_ELECTION_SUCCESS, POST_PARTY_CONNECTION_ERROR, POST_PARTY_CONNECTION_PENDING, POST_PARTY_CONNECTION_SUCCESS, POST_PARTY_ERROR, POST_PARTY_PENDING, POST_PARTY_SUCCESS, POST_USER_ERROR, POST_USER_PENDING, POST_USER_SUCCESS } from './action'

let initialState = {
    party: [],
    user: [],
    election: [],
    connection: [],
    isLoading: false,
    isError: null
}


const partyReducer = (state = initialState, action) => {
    // console.log(action, "from reducer");
    switch (action.type) {
        case (GET_PARTY_PENDING, POST_PARTY_PENDING, DELETE_PARTY_PENDING): {
            return {
                ...state,
                isLoading: true
            }
        }

        case GET_PARTY_SUCCESS: {
            return {
                isLoading: false,
                party: action.payload
            }
        }

        case POST_PARTY_SUCCESS: {
            return {
                isLoading: false,
                party: state.party.concat(action.payload)
            }
        }

        case DELETE_PARTY_SUCCESS: {
            return {
                isLoading: false,
                isError: state.party.filter((val) => val.id !== action.payload.id)
            }
        }

        case (GET_PARTY_ERROR, POST_PARTY_ERROR, DELETE_PARTY_ERROR): {
            return {
                isLoading: false,
                isError: action.party
            }
        }

        default: {
            return {
                ...state
            }
        }
    }
}

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case (GET_USER_PENDING, POST_USER_PENDING, DELETE_USER_PENDING): {
            return {
                ...state,
                isLoading: true
            }
        }

        case GET_USER_SUCCESS: {
            return {
                isLoading: false,
                user: action.payload
            }
        }

        case POST_USER_SUCCESS: {
            return {
                isLoading: false,
                user: state.user.concat(action.payload)
            }
        }

        case DELETE_USER_SUCCESS: {
            return {
                isLoading: false,
                isError: state.user.filter((val) => val.id !== action.payload.id)
            }
        }

        case (GET_USER_ERROR, POST_USER_ERROR, DELETE_USER_ERROR): {
            return {
                isLoading: false,
                isError: action.payload

            }
        }

        default: {
            return {
                ...state
            }
        }
    }

}

const electionReducer = (state = initialState, action) => {
    switch (action.type) {
        case (GET_ELECTION_PENDING, POST_ELECTION_PENDING, DELETE_ELECTION_PENDING): {
            return {
                ...state,
                isLoading: true
            }
        }

        case GET_ELECTION_SUCCESS: {
            return {
                isLoading: false,
                election: action.payload
            }
        }

        case POST_ELECTION_SUCCESS: {
            return {
                isLoading: false,
                election: state.election.concat(action.payload)
            }
        }

        case DELETE_ELECTION_SUCCESS: {
            return {
                isLoading: false,
                election: state.election.filter((val) => val.id !== action.payload.id)
            }
        }

        case (GET_ELECTION_ERROR, POST_ELECTION_ERROR, DELETE_ELECTION_ERROR): {
            return {
                isLoading: false,
                isError: action.payload
            }
        }

        default: {
            return {
                ...state
            }
        }
    }
}

const connectionReducer = (state = initialState, action) => {
    switch (action.type) {
        case (GET_PARTY_CONNECTION_PENDING, POST_PARTY_CONNECTION_PENDING, DELETE_PARTY_CONNECTION_PENDING): {
            return {
                ...state,
                isLoading: true
            }
        }

        case (GET_PARTY_CONNECTION_SUCCESS): {
            return {
                isLoading: false,
                connection: action.payload
            }
        }

        case POST_PARTY_CONNECTION_SUCCESS: {
            return {
                isLoading: false,
                connection: state.connection.concat(action.payload)
            }
        }

        case DELETE_PARTY_CONNECTION_SUCCESS: {
            return {
                isLoading: false,
                connection: state.connection.filter((val) => val.id !== action.payload.id)
            }
        }

        case (GET_PARTY_CONNECTION_ERROR, POST_PARTY_CONNECTION_ERROR, DELETE_PARTY_CONNECTION_ERROR): {
            return {
                isLoading: false,
                isError: action.payload
            }
        }

        default: {
            return {
                ...state
            }
        }
    }
}
export { partyReducer, userReducer, electionReducer, connectionReducer }