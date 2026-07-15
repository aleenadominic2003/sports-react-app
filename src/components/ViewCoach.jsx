import React, { useEffect, useState } from 'react'

import axios from 'axios'


const ViewCoach = () => {
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
                        <th>Coach ID</th>
                        <th>Full Name</th>
                        <th>Email Profile</th>
                        <th>Phone Number</th>
                        <th>Specialization Sport</th>
                        <th>Certifications Held</th>
                        <th>Years of Active Experience</th>
                        <th>Monthly Contract Salary</th>
                        <th>Preferred Coaching Shift</th>
                        <th>Assigned Training Ground</th>
                        <th>Date of Hiring</th>
                        <th>Employement Status</th>
                    </tr>
                </thead>

                <tbody>
                    {data.map((value, index) => (
                        <tr key={index}>
                            <td>{value.CoachId}</td>
                            <td>{value.FullName}</td>
                            <td>{value.EmailProfile}</td>
                            <td>{value.PhoneNumber}</td>
                            <td>{value.SpecializationSport}</td>
                            <td>{value.CertificationsHeld}</td>
                            <td>{value.YearsofActiveExperience}</td>
                            <td>{value.MonthlyContractSalary}</td>
                            <td>{value.PreferredCoachingShift}</td>
                            <td>{value.AssignedTrainingGround}</td>
                            <td>{value.DateofHiring}</td>
                            <td>{value.EmployementStatus}</td>
                        </tr>
                    ))}
                </tbody>
            </table>

        </div>
    </div>
</div>
    )
}

export default ViewCoach