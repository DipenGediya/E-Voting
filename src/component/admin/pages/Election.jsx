import React, { useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { DELETE_ELECTION_PENDING, GET_ELECTION_PENDING, POST_ELECTION_PENDING } from '../../../redux-saga/admin/action'

const Election = () => {

  let dispatch = useDispatch()

  let election_name = useRef()
  let date = useRef()

  function addElection() {
    let election = {
      election_name: election_name.current.value,
      date: date.current.value
    }

    console.log(election);

    dispatch({ type: POST_ELECTION_PENDING, payload: election })
  }

  function deleteElection(id) {
    dispatch({ type: DELETE_ELECTION_PENDING, payload: id })
  }

  let electionData = useSelector((state) => state.electionReducer.election)
  console.log(electionData);

  useEffect(() => {
    dispatch({ type: GET_ELECTION_PENDING })
  }, [])

  return (
    <>
      <section className="election w-100 p-2 mt-4">
        <div className="election-data d-flex justify-content-between">
          <input type="search" />
          {/* <!-- Button trigger modal --> */}
          <button type="button" class="btn btn-outline-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
            CREATE ELECTION
          </button>

          {/* <!-- Modal --> */}
          <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
              <div class="modal-content">
                <div class="modal-header">
                  <h1 class="modal-title fs-5" id="exampleModalLabel">Election Data</h1>
                  <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                  <div className='mb-2'>
                    <label>ELECTION NAME :-</label><br />
                    <input type="text" ref={election_name} className='w-100' />
                  </div>
                  <div className='mb-2'>
                    <label>ELECTION DATE :-</label><br />
                    <input type="date" ref={date} className='w-100' />
                  </div>

                </div>
                <div class="modal-footer">
                  <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                  <button type="button" class="btn btn-primary" onClick={addElection}>Save changes</button>
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
                <th>ELECTION NAME</th>
                <th>ELECTION DATE</th>
                <th>DELETE</th>
              </tr>
            </thead>
            <tbody>
              {
                electionData?.map((val, index) => {
                  return (
                    <tr key={index}>
                      <td>{index + 1}</td>
                      <td>{val.election_name}</td>
                      <td>{val.date}</td>
                      <td><button className='btn btn-outline-primary' onClick={() => deleteElection(val._id)}><i class="fa-solid fa-trash-can"></i></button></td>
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

export default Election