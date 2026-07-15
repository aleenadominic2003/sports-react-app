import axios from "axios";
import React, { useState } from "react";
import NavigationBar from "./NavigationBar";

const AddTeam = () => {

    const [input, changeInput] = useState(
        {
            TeamId: "",
            OfficialTeamName: "",
            AssociatedSportCategory: "",
            AssignedHeadCoachId: "",
            TeamCaptainName: "",
            MaximumSquadSizeLimit: "",
            HomeVenueStadiumName: "",
            PrimaryKitJerseyColor: "",
            SponsorshipBrandPartner: "",
            CurrentTournamentDivision: "",
            CreationFormationDate: "",
            AnnualOperatingBudget: ""
        }
    )

    const inputHandler = (event) => {
        changeInput({
            ...input,
            [event.target.name]: event.target.value
        })
    }

    const readValues = () => {
        console.log(input)

        axios.post("http://localhost:4000/add-team", input)
            .then((response) => {
                alert("Team Added Successfully")
                console.log(response.data)
            })
            .catch((error) => {
                alert("Failed to Add Team")
                console.log(error)
            })
    }

    return (
        <div className="container mt-5">
            <NavigationBar />
            <div className="row justify-content-center">
                <div className="col col-12 col-sm-10 col-md-8 col-lg-7">

                    <div className="card shadow p-4">

                        <h2 className="text-center mb-4">Add Team</h2>

                        <div className="mb-3">
                            <label className="form-label">Team ID</label>
                            <input
                                type="text"
                                className="form-control"
                                name="TeamId"
                                value={input.TeamId}
                                onChange={inputHandler}
                            />
                        </div>

                        <div className="mb-3">
                            <label className="form-label">Official Team Name</label>
                            <input
                                type="text"
                                className="form-control"
                                name="OfficialTeamName"
                                value={input.OfficialTeamName}
                                onChange={inputHandler}
                            />
                        </div>

                        <div className="mb-3">
                            <label className="form-label">Associated Sport Category</label>
                            <input
                                type="text"
                                className="form-control"
                                name="AssociatedSportCategory"
                                value={input.AssociatedSportCategory}
                                onChange={inputHandler}
                            />
                        </div>

                        <div className="mb-3">
                            <label className="form-label">Assigned Head Coach ID</label>
                            <input
                                type="text"
                                className="form-control"
                                name="AssignedHeadCoachId"
                                value={input.AssignedHeadCoachId}
                                onChange={inputHandler}
                            />
                        </div>

                        <div className="mb-3">
                            <label className="form-label">Team Captain Name</label>
                            <input
                                type="text"
                                className="form-control"
                                name="TeamCaptainName"
                                value={input.TeamCaptainName}
                                onChange={inputHandler}
                            />
                        </div>

                        <div className="mb-3">
                            <label className="form-label">Maximum Squad Size</label>
                            <input
                                type="text"
                                className="form-control"
                                name="MaximumSquadSizeLimit"
                                value={input.MaximumSquadSizeLimit}
                                onChange={inputHandler}
                            />
                        </div>

                        <div className="mb-3">
                            <label className="form-label">Home Venue / Stadium</label>
                            <input
                                type="text"
                                className="form-control"
                                name="HomeVenueStadiumName"
                                value={input.HomeVenueStadiumName}
                                onChange={inputHandler}
                            />
                        </div>

                        <div className="mb-3">
                            <label className="form-label">Primary Jersey Color</label>
                            <input
                                type="text"
                                className="form-control"
                                name="PrimaryKitJerseyColor"
                                value={input.PrimaryKitJerseyColor}
                                onChange={inputHandler}
                            />
                        </div>

                        <div className="mb-3">
                            <label className="form-label">Sponsorship Brand Partner</label>
                            <input
                                type="text"
                                className="form-control"
                                name="SponsorshipBrandPartner"
                                value={input.SponsorshipBrandPartner}
                                onChange={inputHandler}
                            />
                        </div>

                        <div className="mb-3">
                            <label className="form-label">Current Tournament Division</label>
                            <input
                                type="text"
                                className="form-control"
                                name="CurrentTournamentDivision"
                                value={input.CurrentTournamentDivision}
                                onChange={inputHandler}
                            />
                        </div>

                        <div className="mb-3">
                            <label className="form-label">Formation Date</label>
                            <input
                                type="text"
                                className="form-control"
                                name="CreationFormationDate"
                                value={input.CreationFormationDate}
                                onChange={inputHandler}
                            />
                        </div>

                        <div className="mb-3">
                            <label className="form-label">Annual Operating Budget</label>
                            <input
                                type="number"
                                className="form-control"
                                name="AnnualOperatingBudget"
                                value={input.AnnualOperatingBudget}
                                onChange={inputHandler}
                            />
                        </div>

                        <div className="text-center">
                            <button
                                className="btn btn-success"
                                onClick={readValues}
                            >
                                Add Team
                            </button>
                        </div>

                    </div>

                </div>
            </div>
        </div>
    )
}

export default AddTeam;