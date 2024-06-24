import React, { useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { DELETE_PARTY_CONNECTION_PENDING, GET_ELECTION_PENDING, GET_PARTY_CONNECTION_PENDING, GET_PARTY_PENDING, GET_USER_PENDING, POST_PARTY_CONNECTION_PENDING } from '../../../redux-saga/admin/action'

const Connection = () => {

  let dispatch = useDispatch()

  let partyData = useSelector((state) => state.partyReducer.party)
  let electionData = useSelector((state) => state.electionReducer.election)

  let party = useRef();
  let election = useRef()

  function addConnection() {
    let connection = {
      party: party.current.value,
      election: election.current.value,
    }
    console.log(connection);

    dispatch({ type: POST_PARTY_CONNECTION_PENDING, payload: connection })
  }

  function deleteConnection(id) {
    console.log(id);
    dispatch({ type: DELETE_PARTY_CONNECTION_PENDING, payload: id })
  }

  let connectionData = useSelector((state) => state.connectionReducer.connection)
  console.log(connectionData, "vauoeh");

  useEffect(() => {
    dispatch({ type: GET_PARTY_CONNECTION_PENDING });
    dispatch({ type: GET_PARTY_PENDING });
    dispatch({ type: GET_ELECTION_PENDING });
  }, [])

  return (
    <>
      <section className="connection w-100 p-2 mt-4">
        <div className="connection-data d-flex justify-content-between">
          <input type="search" />
          {/* <!-- Button trigger modal --> */}          
          <button type="button" class="btn btn-outline-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
            CREATE PARTY CONNECTION
          </button>

          {/* <!-- Modal --> */}
          <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
              <div class="modal-content">
                <div class="modal-header">
                  <h1 class="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
                  <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                  <div className='mb-2'>
                    <label>ELECTION NAME :-</label><br />
                    <select className='w-100 p-1' ref={election}>
                      {
                        electionData.map((val, index) => {
                          return (
                            <>
                              <option value={val._id}>{val.election_name}</option>
                            </>
                          )
                        })
                      }
                    </select>
                  </div>
                  <div className='mb-2'>
                    <label>PARTY NAME :-</label><br />
                    <select className='w-100' ref={party}>
                      {
                        partyData.map((val, index) => {
                          return (
                            <>
                              <option value={val._id}>{val.party_name}</option>
                            </>
                          )
                        })
                      }
                    </select>
                  </div>
                </div>
                <div class="modal-footer">
                  <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                  <button type="button" class="btn btn-primary" onClick={addConnection}>Save changes</button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="party-table mt-4">
          <table className="table table-hover">
            <thead>
              <tr>
                <th>NO</th>
                <th>PARTY NAME</th>
                <th>ELECTION NAME</th>
                <th>DELETE</th>
              </tr>
            </thead>
            <tbody>
              {
                connectionData.map((val, index) => {
                  return (
                    <tr>
                      <td>{index + 1}</td>
                      <td>{val.party?.party_name}</td>
                      <td>{val.election?.election_name}</td>
                      <td><button className='btn btn-outline-primary' onClick={() => deleteConnection(val._id)}><i class="fa-solid fa-trash-can"></i></button></td>
                    </tr>
                  )
                })
              }
            </tbody>
          </table>
        </div>
      </section>
    </>
  )
}

export default Connection