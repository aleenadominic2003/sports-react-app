import React, { useEffect, useState } from 'react'

import axios from 'axios'


const ViewTeam = () => {
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
                        <th>Team ID</th>
                        <th>Official Team Name</th>
                        <th>Associated Sport Category</th>
                        <th>Assigned Head Coach ID</th>
                        <th>Team Captain Name</th>
                        <th>Maximum Squad Size Limit</th>
                        <th>Stadium Name</th>
                        <th>Primary Kit/Jersey Color</th>
                        <th>Sponsorship Brand Partner</th>
                        <th>Current Tournament Division</th>
                        <th>Creation</th>
                        <th>Annual Opening Budget</th>
                    </tr>
                </thead>

                <tbody>
                    {data.map((value, index) => (
                        <tr key={index}>
                            <td>{value.TeamId}</td>
                            <td>{value.OfficialTeamName}</td>
                            <td>{value.AssociatedSportCategory}</td>
                            <td>{value.AssignedHeadCoachId}</td>
                            <td>{value.TeamCaptainName}</td>
                            <td>{value.MaximumSquadSizeLimit}</td>
                            <td>{value.HomeVenueStadiumName}</td>
                            <td>{value.PrimaryKitJerseyColor}</td>
                            <td>{value.SponsorshipBrandPartner}</td>
                            <td>{value.CurrentTournamentDivision}</td>
                            <td>{value.CreaationFormationDate}</td>
                            <td>{value.AnnualOperatingBudget}</td>
                        </tr>
                    ))}
                </tbody>
            </table>

        </div>
    </div>
</div>
    )
}

export default ViewTeam