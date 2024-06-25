import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { GET_PARTY_PENDING, GET_VOTE_PENDING } from '../../../redux-saga/admin/action'

const Dashboard = () => {
    let dispatch = useDispatch()

    let partyData = useSelector((state) => state.partyReducer.party)

    let voteData = useSelector((state) => state.voteReducer.vote)

    useEffect(() => {
        dispatch({ type: GET_PARTY_PENDING })
        dispatch({ type: GET_VOTE_PENDING })
    }, [])

    // console.log(partyData, "from dashboard")
    console.log(voteData, "from dashboard")

    return (
        <>
            <section className="home p-2 w-100">

                <div className="boxes text-center my-4 d-flex justify-content-between">
                    <div className="box">
                        <span>{partyData.length}</span><br />
                        <span style={{ fontSize: "40px" }}>Total Party</span>
                    </div>
                    <div className="box">
                        <span>{voteData?.length}</span><br />
                        <span style={{ fontSize: "40px" }}>Total Vote</span>
                    </div>
                    <div className="box">
                        <span>1</span>
                    </div>

                </div>

                {/* <Tables logo="PARTY LOGO" name="PARTY LOGO" code="PARTY CODE" voting="VOTING NO" data={partyData} /> */}

                <table className="table table-hover">
                    <thead>
                        <tr>
                            <th>NO</th>
                            <th>PARTY LOGO</th>
                            <th>PARTY NAME</th>
                            <th>SHORT CODE</th>
                            <th>VOTING NO.</th>
                        </tr>
                    </thead>
                    <tbody>
                        {partyData.map((val, index) => (
                            <tr key={index}>
                                <th>{index + 1}</th>
                                <td><img src={val.party_logo} width="50px" alt="" /></td>
                                <td>{val.party_name}</td>
                                <td>{val.short_code}</td>
                                                                
                            </tr>
                        ))}
                    </tbody>
                </table>
            </section>
        </>
    )
}

export default Dashboard
