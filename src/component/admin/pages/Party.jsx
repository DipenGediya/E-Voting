import React, { useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { DELETE_PARTY_PENDING, GET_PARTY_PENDING, POST_PARTY_PENDING } from '../../../redux-saga/admin/action'

const Party = () => {

  let dispatch = useDispatch()


  let party_name = useRef()
  let party_logo = useRef()
  let short_code = useRef()

  function addParty() {
    let party = {
      party_name: party_name.current.value,
      party_logo: party_logo.current.files[0],
      short_code: short_code.current.value,
    }

    console.log(party)

    let formdata = new FormData()

    formdata.append("party_name", party.party_name)
    formdata.append("party_logo", party.party_logo)
    formdata.append("short_code", party.short_code)

    dispatch({ type: POST_PARTY_PENDING, payload: formdata })
  }

  let partyData = useSelector((state) => state.partyReducer.party)



  useEffect(() => {
    dispatch({ type: GET_PARTY_PENDING })
  }, [])

  function deleteParty(id) {
    console.log(id);
    dispatch({ type: DELETE_PARTY_PENDING, payload: id })
  }

  // console.log(partyData);

  return (
    <>
      <section className="parties w-100 p-2 mt-4">
        <div className="party-data d-flex justify-content-between">
          <input type="search" />
          {/* <!-- Button trigger modal --> */}
          <button type="button" class="btn btn-outline-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
            CREATE PARTY
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
                    <label>PARTY NAME :-</label><br />
                    <input type="text" className='w-100' ref={party_name} placeholder='ENTER PARTY NAME' />
                  </div>
                  <div className='mb-2'>
                    <label>PARTY LOGO :-</label><br />
                    <input type="file" className='w-100' ref={party_logo} />
                  </div>
                  <div className='mb-2'>
                    <label>PARTY SHORT CODE :-</label><br />
                    <input type="text" className='w-100' ref={short_code} placeholder='ENTER PARTY SHORT NAME' />
                  </div>
                </div>
                <div class="modal-footer">
                  <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                  <button type="button" class="btn btn-primary" onClick={addParty}>Save changes</button>
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
                <th>PARTY LOGO</th>
                <th>PARTY NAME</th>
                <th>SHORT CODE</th>
                <th>DELETE</th>
              </tr>
            </thead>
            <tbody>

              {
                partyData?.map((val, index) => {
                  return (
                    <tr key={index}>
                      <td>{index + 1}</td>
                      <td>{val.party_name}</td>
                      <td><img src={val.party_logo} width="40px" /></td>
                      <td>{val.short_code}</td>
                      <td><button className='btn btn-outline-primary' onClick={() => deleteParty(val._id)}><i class="fa-solid fa-trash-can"></i></button></td>
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

export default Party