import React, { useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { DELETE_USER_PENDING, GET_USER_PENDING, POST_USER_PENDING } from '../../../redux-saga/admin/action';

const User = () => {

  // "cardNo": "TESTCARD01",
  //           "name": "USER1",
  //           "fatherName": "USER1",
  //           "sex": "male",
  //           "dob": "2024-05-14",
  //           "address": "navjivan ,surat",
  //           "assemblyNoandName": "utran-8",
  //           "partNoandName": "utran",
  //           "password": "123",

  let dispatch = useDispatch()

  let cardNo = useRef();
  let name = useRef()
  let fatherName = useRef()
  let sex = useRef()
  let dob = useRef()
  let address = useRef()
  let assemblyNoandName = useRef()
  let partNoandName = useRef()
  let password = useRef()

  function addUser() {
    let user = {
      cardNo: cardNo.current.value,
      name: name.current.value,
      fatherName: fatherName.current.value,
      sex: sex.current.value,
      dob: dob.current.value,
      address: address.current.value,
      assemblyNoandName: assemblyNoandName.current.value,
      partNoandName: partNoandName.current.value,
      password: password.current.value
    }

    console.log(user);

    dispatch({ type: POST_USER_PENDING, payload: user })
  }

  let userData = useSelector((state) => state.userReducer.user)

  // console.log(userData);

  useEffect(() => {
    dispatch({ type: GET_USER_PENDING })
  }, [])

  function deleteUser(id) {
    console.log(id);
    dispatch({ type: DELETE_USER_PENDING, payload: id })
  }

  return (
    <section className="user w-100 p-2 mt-4">
      <div className="user-data d-flex justify-content-between">
        <input type="search" />
        {/* <!-- Button trigger modal --> */}
        <button type="button" class="btn btn-outline-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
          CREATE USER
        </button>

        {/* <!-- Modal --> */}
        <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h1 class="modal-title fs-5" id="exampleModalLabel">USER DETAILS</h1>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div class="modal-body">
                <div className='mb-2'>
                  <label>CARD NO :-</label><br />
                  <input type="text" className='w-100' ref={cardNo} required />
                </div>
                <div className='mb-2'>
                  <label>NAME :-</label><br />
                  <input type="text" className='w-100' ref={name} required />
                </div>
                <div className='mb-2'>
                  <label>FATHER NAME :-</label><br />
                  <input type="text" className='w-100' ref={fatherName} required />
                </div>
                <div className='mb-2'>
                  <label>SEX :-</label><br />
                  <input type="text" className='w-100' ref={sex} required />
                </div>
                <div className='mb-2'>
                  <label>BIRTH DATE :-</label><br />
                  <input type="date" className='w-100' ref={dob} required />
                </div>
                <div className='mb-2'>
                  <label>ADDRESS :-</label><br />
                  <textarea rows="3" className='w-100' ref={address} required />
                </div>
                <div className='mb-2'>
                  <label>ASSEMBLY NO AND NAME :-</label><br />
                  <input type="text" className='w-100' ref={assemblyNoandName} required />
                </div>
                <div className='mb-2'>
                  <label>PART NO AND NAME :-</label><br />
                  <input type="text" className='w-100' ref={partNoandName} required />
                </div>
                <div className='mb-2'>
                  <label>PASSWORD :-</label><br />
                  <input type="number" className='w-100' ref={password} required />
                </div>

              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                <button type="button" class="btn btn-primary" onClick={addUser} >Save</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="user-table mt-4">
        <table className="table table-hover">
          <thead>
            <tr>
              <th>NO</th>
              <th>CARD NO.</th>
              <th>NAME</th>
              <th>FATHER NAME</th>
              <th>GENDER</th>
              <th>BIRTH DATE</th>
              <th>DELETE</th>
            </tr>
          </thead>
          <tbody>
            {
              userData.map((val, index) => {
                return (
                  <tr key={index}>
                    <th>{index + 1}</th>
                    <td>{val.cardNo}</td>
                    <td>{val.name}</td>
                    <td>{val.fatherName}</td>
                    <td>{val.sex}</td>
                    <td>{val.dob}</td>
                    <td><button className='btn btn-outline-primary' onClick={() => deleteUser(val._id)}><i class="fa-solid fa-trash-can"></i></button></td>
                  </tr>
                )

              })
            }
          </tbody>
        </table>
      </div>
    </section>
  )
}

export default User