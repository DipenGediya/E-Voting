import React, { useEffect, useState } from 'react'

const Profile = () => {

  // "cardNo": "TESTCARD01",
  //           "name": "USER1",
  //           "fatherName": "USER1",
  //           "sex": "male",
  //           "dob": "2024-05-14",
  //           "address": "navjivan ,surat",
  //           "assemblyNoandName": "utran-8",
  //           "partNoandName": "utran",
  //           "password": "123",

  const [userDetails, setuserDetails] = useState([])

  // let userDetails = localStorage.getItem("userDetails")

  useEffect(() => {
    setuserDetails(localStorage.getItem("userDetails"))
  }, [])
  return (
    <>
      <section className="profile ms-3 p-2 w-100">
        <h1>Profile</h1>
        <div className="profile-card text-bg-light p-3 rounded">
          {
            userDetails.map((val, index) => {
              return (
                <>
                  <p>CardNo :- {val.cardNo}</p>
                  <p>Name :- {val.name}</p>
                  <p>Father Name :- {val.fatherName}</p>
                  <p>Gender :- {val.sex}</p>
                  <p>Birth Date :- {val.dob}</p>
                  <p>Address :- {val.address}</p>
                  <p>Assembly No and Name :- {val.assemblyNoandName}</p>
                  <p>Part No and Name :- {val.partNoandName}</p>
                  <p>Password :- {val.password}</p>
                </>
              )
            })
          }
        </div>
      </section>
    </>
  )
}

export default Profile