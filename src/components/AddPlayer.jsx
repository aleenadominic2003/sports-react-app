import axios from "axios";
import React, { useState } from "react";
import NavigationBar from "./NavigationBar";

const AddPlayer = () => {

    const [input, changeInput] = useState({
        PlayerId: "",
        FirstName: "",
        LastName: "",
        Dob: "",
        Gender: "",
        ContactNumber: "",
        Email: "",
        EmergencyContactName: "",
        SelectedPrimarySport: "",
        SkillLevel: "",
        MembershipJoiningDate: "",
        MedicalClearanceStatus: ""
    });

    const inputHandler = (event) => {
        changeInput({
            ...input,
            [event.target.name]: event.target.value
        });
    };

    const readValues = () => {
        console.log(input);

        axios.post("http://localhost:4000/add-player", input)
            .then((response) => {
                alert("Player Added Successfully");
                console.log(response.data);
            })
            .catch((error) => {
                alert("Failed to Add Player");
                console.log(error);
            });
    };

    return (
    
        <div className="container mt-5">
             <NavigationBar />
            <div className="row justify-content-center">
                <div className="col col-12 col-sm-10 col-md-8 col-lg-7">

                    <div className="card shadow p-4">

                        <h2 className="text-center mb-4">Add Player</h2>

                        <div className="mb-3">
                            <label className="form-label">Player ID</label>
                            <input
                                type="text"
                                className="form-control"
                                name="PlayerId"
                                value={input.PlayerId}
                                onChange={inputHandler}
                            />
                        </div>

                        <div className="mb-3">
                            <label className="form-label">First Name</label>
                            <input
                                type="text"
                                className="form-control"
                                name="FirstName"
                                value={input.FirstName}
                                onChange={inputHandler}
                            />
                        </div>

                        <div className="mb-3">
                            <label className="form-label">Last Name</label>
                            <input
                                type="text"
                                className="form-control"
                                name="LastName"
                                value={input.LastName}
                                onChange={inputHandler}
                            />
                        </div>

                        <div className="mb-3">
                            <label className="form-label">Date of Birth</label>
                            <input
                                type="text"
                                className="form-control"
                                name="Dob"
                                value={input.Dob}
                                onChange={inputHandler}
                            />
                        </div>

                        <div className="mb-3">
                            <label className="form-label">Gender</label>
                            <select
                                className="form-control"
                                name="Gender"
                                value={input.Gender}
                                onChange={inputHandler}
                            >
                                <option value="">Select Gender</option>
                                <option>Male</option>
                                <option>Female</option>
                                <option>Other</option>
                            </select>
                        </div>

                        <div className="mb-3">
                            <label className="form-label">Primary Contact Number</label>
                            <input
                                type="text"
                                className="form-control"
                                name="ContactNumber"
                                value={input.ContactNumber}
                                onChange={inputHandler}
                            />
                        </div>

                        <div className="mb-3">
                            <label className="form-label">Email Address</label>
                            <input
                                type="text"
                                className="form-control"
                                name="Email"
                                value={input.Email}
                                onChange={inputHandler}
                            />
                        </div>

                        <div className="mb-3">
                            <label className="form-label">Emergency Contact Name</label>
                            <input
                                type="text"
                                className="form-control"
                                name="EmergencyContactName"
                                value={input.EmergencyContactName}
                                onChange={inputHandler}
                            />
                        </div>

                        <div className="mb-3">
                            <label className="form-label">Selected Primary Sport</label>
                            <input
                                type="text"
                                className="form-control"
                                name="SelectedPrimarySport"
                                value={input.SelectedPrimarySport}
                                onChange={inputHandler}
                            />
                        </div>

                        <div className="mb-3">
                            <label className="form-label">Skill Level</label>
                            <select
                                className="form-control"
                                name="SkillLevel"
                                value={input.SkillLevel}
                                onChange={inputHandler}
                            >
                                <option value="">Select Skill Level</option>
                                <option>Beginner</option>
                                <option>Intermediate</option>
                                <option>Advanced</option>
                            </select>
                        </div>

                        <div className="mb-3">
                            <label className="form-label">Membership Joining Date</label>
                            <input
                                type="text"
                                className="form-control"
                                name="MembershipJoiningDate"
                                value={input.MembershipJoiningDate}
                                onChange={inputHandler}
                            />
                        </div>

                        <div className="mb-3">
                            <label className="form-label">Medical Clearance Status</label>
                            <select
                                className="form-control"
                                name="MedicalClearanceStatus"
                                value={input.MedicalClearanceStatus}
                                onChange={inputHandler}
                            >
                                <option value="">Select Status</option>
                                <option>Cleared</option>
                                <option>Pending</option>
                                <option>Not Cleared</option>
                            </select>
                        </div>

                        <div className="text-center">
                            <button
                                className="btn btn-primary"
                                onClick={readValues}
                            >
                                Add Player
                            </button>
                        </div>

                    </div>

                </div>
            </div>
        </div>
    );
};

export default AddPlayer;