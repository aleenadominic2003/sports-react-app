import React, { useEffect, useState } from 'react'

import axios from 'axios'


const ViewPlayer = () => {
    const [data, changeData] = useState([])

    const fetchData = () => {
        axios.post("").then(
            (response) => {
                changeData(response.data)
            }
        ).catch()
    }

    useEffect(
        () => {
            fetchData()
        }, []
    )

    return (
        

            <div className="container">
            
    <div className="row">
        <div className="col-12">

            <table className="table table-bordered">
                <thead>
                    <tr>
                        <th>Player ID</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Date of Birth</th>
                        <th>Gender</th>
                        <th>Primary Contact Number</th>
                        <th>Email Address</th>
                        <th>Emergency Contact Name</th>
                        <th>Selected Primary Sport</th>
                        <th>Skill Level</th>
                        <th>Membership Joining Date</th>
                        <th>Medical Clearance Status</th>
                    </tr>
                </thead>

                <tbody>
                    {data.map((value, index) => (
                        <tr key={index}>
                            <td>{value.PlayerId}</td>
                            <td>{value.FirstName}</td>
                            <td>{value.Lastname}</td>
                            <td>{value.Dob}</td>
                            <td>{value.Gender}</td>
                            <td>{value.ContactNumber}</td>
                            <td>{value.Email}</td>
                            <td>{value.EmergencyContactName}</td>
                            <td>{value.SelectedPrimarySport}</td>
                            <td>{value.SkillLevel}</td>
                            <td>{value.MembershipJoiningDate}</td>
                            <td>{value.MedicalClearanceStatus}</td>
                        </tr>
                    ))}
                </tbody>
            </table>

        </div>
    </div>
</div>
    )
}

export default ViewPlayer