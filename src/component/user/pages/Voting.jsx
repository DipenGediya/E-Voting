import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { GET_PARTY_CONNECTION_PENDING } from '../../../redux-saga/admin/action';

const Voting = () => {

    let dispatch = useDispatch();
    const [partyId, setpartyId] = useState(null)

    let connectionData = useSelector((state) => state.connectionReducer.connection)

    let voteData = useSelector((state)=>state.voteReducer.vote)

    function getId(id) {
        setpartyId(id)
    }

    useEffect(() => {
        dispatch({ type: GET_PARTY_CONNECTION_PENDING })
    }, [])



    function postVote() {
        let Data = {
            party:partyId,
            user:""
        }        
        
        console.log(Data,"from post vote");
    }

    return (
        <>
            <div className="voting p-2 w-100 mt-4">
                <button className="vote-button btn btn-outline-primary" onClick={postVote}>Submit</button>

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
                                        <td> <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" onClick={()=>getId(val.party?._id)} /></td>
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