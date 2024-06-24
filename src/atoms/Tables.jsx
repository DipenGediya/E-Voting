import React from 'react'

const Tables = ({ logo, name, code, voting, m_logo, m_name, m_code, m_voting, data }) => {

    // console.log(data, "from table");
    return (
        <>
            <table class="table table-hover">
                <thead>
                    <tr>
                        <th>NO</th>
                        <th>{logo}</th>
                        <th>{name}</th>
                        <th>{code}</th>
                        <th>{voting}</th>
                    </tr>
                </thead>
                <tbody>

                    {
                        // data.map((val, index) => {
                        //     <tr>
                        //         <th>{index + 1}</th>
                        //         <td>{val.party_logo}</td>
                        //         <td>{val.party_name}</td>
                        //         <td>{val.short_code}</td>
                        //         {/* <td>{val.voting}</td> */}
                        //     </tr>
                        // })
                    }


                </tbody>
            </table>
        </>
    )
}

export default Tables