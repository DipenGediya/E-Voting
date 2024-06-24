import React from 'react'

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
  return (
    <>
      <section className="profile ms-3 p-2 w-100">
        <h1>Profile</h1>
        <div className="profile-card text-bg-light p-3 rounded">
          {
            userDetails.map((val, index) => {
              return (
                <>
                  <p>CardNo :-</p>
                  <p>Name :-</p>
                  <p>Father Name :-</p>
                  <p>Gender :-</p>
                  <p>Birth Date :-</p>
                  <p>Address :-</p>
                  <p>Assembly No and Name :-</p>
                  <p>Part No and Name :-</p>
                  <p>Password :-</p>
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