import React from 'react'
import NavigationBar from './NavigationBar'

const Home = () => {
    return (
        <div>
            <NavigationBar />

            <div className="container mt-5">

                <div className="row">
                    <div className="col col-12">

                        <div className="card shadow p-4">

                            <h1 className="text-center text-primary">
                                Sports Club Management System
                            </h1>

                            <hr />

                            <p className="text-center fs-5">
                                Welcome to the Sports Club Management System.
                                This application helps the administration manage
                                Players, Coaches, and Teams efficiently.
                            </p>

                            <div className="row mt-4">

                                <div className="col-md-4 mb-3">
                                    <div className="card border-primary h-100">
                                        <div className="card-body">
                                            <h4 className="text-primary">
                                                Player Registration
                                            </h4>
                                            <p>
                                                Register new players by entering
                                                player details such as contact,
                                                sport, skill level, membership,
                                                and medical clearance status.
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-md-4 mb-3">
                                    <div className="card border-success h-100">
                                        <div className="card-body">
                                            <h4 className="text-success">
                                                Coach Management
                                            </h4>
                                            <p>
                                                Maintain coach profiles including
                                                specialization, certifications,
                                                experience, salary, and employment
                                                status.
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-md-4 mb-3">
                                    <div className="card border-warning h-100">
                                        <div className="card-body">
                                            <h4 className="text-warning">
                                                Team Management
                                            </h4>
                                            <p>
                                                Create tournament teams by assigning
                                                coaches, captains, venues, sponsors,
                                                and operating budgets.
                                            </p>
                                        </div>
                                    </div>
                                </div>

                            </div>

                            <div className="alert alert-info mt-4 text-center">
                                <strong>Modules Available</strong><br />
                                ✔ Add Players &nbsp; | &nbsp;
                                ✔ View Players &nbsp; | &nbsp;
                                ✔ Add Coaches &nbsp; | &nbsp;
                                ✔ View Coaches &nbsp; | &nbsp;
                                ✔ Add Teams &nbsp; | &nbsp;
                                ✔ View Teams
                            </div>

                        </div>

                    </div>
                </div>

            </div>

        </div>
    )
}

export default Home