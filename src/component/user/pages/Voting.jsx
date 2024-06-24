import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { GET_PARTY_CONNECTION_PENDING } from '../../../redux-saga/admin/action';

const Voting = () => {

    let dispatch = useDispatch();

    let connectionData = useSelector((state) => state.connectionReducer.connection)

    useEffect(() => {
        dispatch({ type: GET_PARTY_CONNECTION_PENDING })
    }, [])
    return (
        <>
            <div className="voting p-2 w-100 mt-4">
                <button className="vote-button btn btn-outline-primary">Submit</button>

                <table className='table table-hover mt-4'>
                    <thead>
                        <tr>
                            <th>NO</th>
                            <th>PARTY LOGO</th>
                            <th>PARTY NAME</th>
                            <th>ELECTION NAME</th>            
                            <th>VOTE</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            connectionData.map((val, index) => {
                                return (
                                    <tr>
                                        <td>{index + 1}</td>
                                        <td><img src={val.party?.party_logo} width="35px" alt="" /></td>
                                        <td>{val.party?.party_name}</td>
                                        <td>{val.election?.election_name}</td>
                                        <td></td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default Voting