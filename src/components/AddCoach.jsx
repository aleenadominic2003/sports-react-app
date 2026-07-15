import axios from "axios";
import React, { useState } from "react";
import NavigationBar from "./NavigationBar";

const AddCoach = () => {

    const [input, changeInput] = useState({
        CoachId: "",
        FullName: "",
        EmailProfile: "",
        PhoneNumber: "",
        SpecializationSport: "",
        CertificationsHeld: "",
        YearsOfActiveExperience: "",
        MonthlyContractSalary: "",
        PreferredCoachingShift: "",
        AssignedTrainingGround: "",
        DateOfHiring: "",
        EmploymentStatus: ""
    });

    const inputHandler = (event) => {
        changeInput({
            ...input,
            [event.target.name]: event.target.value
        });
    };

    const readValues = () => {
        console.log(input);

        axios.post("http://localhost:4000/add-coach", input)
            .then((response) => {
                alert("Coach Added Successfully");
                console.log(response.data);
            })
            .catch((error) => {
                alert("Failed to Add Coach");
                console.log(error);
            });
    };

    return (
        <div className="container mt-5">
            <NavigationBar />
            <div className="row justify-content-center">
                <div className="col col-12 col-sm-10 col-md-8 col-lg-7">

                    <div className="card shadow p-4">

                        <h2 className="text-center mb-4">Add Coach</h2>

                        <div className="mb-3">
                            <label className="form-label">Coach ID</label>
                            <input
                                type="text"
                                className="form-control"
                                name="CoachId"
                                value={input.CoachId}
                                onChange={inputHandler}
                            />
                        </div>

                        <div className="mb-3">
                            <label className="form-label">Full Name</label>
                            <input
                                type="text"
                                className="form-control"
                                name="FullName"
                                value={input.FullName}
                                onChange={inputHandler}
                            />
                        </div>

                        <div className="mb-3">
                            <label className="form-label">Email Profile</label>
                            <input
                                type="text"
                                className="form-control"
                                name="EmailProfile"
                                value={input.EmailProfile}
                                onChange={inputHandler}
                            />
                        </div>

                        <div className="mb-3">
                            <label className="form-label">Phone Number</label>
                            <input
                                type="text"
                                className="form-control"
                                name="PhoneNumber"
                                value={input.PhoneNumber}
                                onChange={inputHandler}
                            />
                        </div>

                        <div className="mb-3">
                            <label className="form-label">Specialization Sport</label>
                            <input
                                type="text"
                                className="form-control"
                                name="SpecializationSport"
                                value={input.SpecializationSport}
                                onChange={inputHandler}
                            />
                        </div>

                        <div className="mb-3">
                            <label className="form-label">Certifications Held</label>
                            <input
                                type="text"
                                className="form-control"
                                name="CertificationsHeld"
                                value={input.CertificationsHeld}
                                onChange={inputHandler}
                            />
                        </div>

                        <div className="mb-3">
                            <label className="form-label">Years of Active Experience</label>
                            <input
                                type="text"
                                className="form-control"
                                name="YearsOfActiveExperience"
                                value={input.YearsOfActiveExperience}
                                onChange={inputHandler}
                            />
                        </div>

                        <div className="mb-3">
                            <label className="form-label">Monthly Contract Salary</label>
                            <input
                                type="text"
                                className="form-control"
                                name="MonthlyContractSalaryy"
                                value={input.MonthlyContractSalaryy}
                                onChange={inputHandler}
                            />
                        </div>

                        <div className="mb-3">
                            <label className="form-label">Preferred Coaching Shift</label>
                            <select
                                className="form-control"
                                name="PreferredCoachingShift"
                                value={input.PreferredCoachingShift}
                                onChange={inputHandler}
                            >
                                <option value="">Select Shift</option>
                                <option>Morning</option>
                                <option>Afternoon</option>
                                <option>Evening</option>
                            </select>
                        </div>

                        <div className="mb-3">
                            <label className="form-label">Assigned Training Ground</label>
                            <input
                                type="text"
                                className="form-control"
                                name="AssignedTrainingGround"
                                value={input.AssignedTrainingGround}
                                onChange={inputHandler}
                            />
                        </div>

                        <div className="mb-3">
                            <label className="form-label">Date of Hiring</label>
                            <input
                                type="text"
                                className="form-control"
                                name="DateOfHiring"
                                value={input.DateOfHiring}
                                onChange={inputHandler}
                            />
                        </div>

                        <div className="mb-3">
                            <label className="form-label">Employment Status</label>
                            <select
                                className="form-control"
                                name="EmploymentStatus"
                                value={input.EmploymentStatus}
                                onChange={inputHandler}
                            >
                                <option value="">Select Status</option>
                                <option>Active</option>
                                <option>Resigned</option>
                            </select>
                        </div>

                        <div className="text-center">
                            <button
                                className="btn btn-success"
                                onClick={readValues}
                            >
                                Add Coach
                            </button>
                        </div>

                    </div>

                </div>
            </div>
        </div>
    );
};

export default AddCoach;