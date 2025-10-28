import React from "react";
import "./EducationBlock";
const EducationBlock = () => {
    return (
        <div>
            <div className="container row p-3 border shadow-sm mb-3">
                <div className="col">
                    <div className="row row-cols-1 row-cols-md-2 mt-3 mb-3">
                        {/* Card 1 */}
                        <div className="col">
                            <div
                                className="card p-3 border shadow-sm"
                                style={{ justifyContent: "center" }}>
                                <h5 className="fw-semibold text-primary">
                                    Degree:{" "}
                                    <span className="text-dark">B.Tech</span>
                                </h5>
                                <h5 className="fw-semibold text-primary">
                                    Field of Study:{" "}
                                    <span className="text-dark">
                                        Computer Science
                                    </span>
                                </h5>
                                <h5 className="fw-semibold text-primary">
                                    Institute:{" "}
                                    <span className="text-dark">
                                        MIT-WPU, Pune
                                    </span>
                                </h5>
                                <h5 className="fw-semibold text-primary">
                                    Grade:{" "}
                                    <span className="text-dark">8.4 CGPA</span>
                                </h5>
                                <h5 className="fw-semibold text-primary">
                                    Description:{" "}
                                    <span className="text-dark">
                                        Focused on full-stack web development
                                        and AI-based coursework.
                                    </span>
                                </h5>
                                <h5 className="fw-semibold text-primary">
                                    Duration:{" "}
                                    <span className="text-dark">
                                        Aug 2021 – May 2025
                                    </span>
                                </h5>
                            </div>
                        </div>

                        {/* Card 2 */}
                        <div className="col">
                            <div
                                className="card p-3 border shadow-sm"
                                style={{ justifyContent: "center" }}>
                                <h5 className="fw-semibold text-primary">
                                    Degree:{" "}
                                    <span className="text-dark">
                                        HSC (12th Grade)
                                    </span>
                                </h5>
                                <h5 className="fw-semibold text-primary">
                                    Field of Study:{" "}
                                    <span className="text-dark">
                                        Science (PCM)
                                    </span>
                                </h5>
                                <h5 className="fw-semibold text-primary">
                                    Institute:{" "}
                                    <span className="text-dark">
                                        Modern College, Pune
                                    </span>
                                </h5>
                                <h5 className="fw-semibold text-primary">
                                    Grade:{" "}
                                    <span className="text-dark">86%</span>
                                </h5>
                                <h5 className="fw-semibold text-primary">
                                    Description:{" "}
                                    <span className="text-dark">
                                        Completed Higher Secondary Education
                                        with distinction in Physics and
                                        Mathematics.
                                    </span>
                                </h5>
                                <h5 className="fw-semibold text-primary">
                                    Duration:{" "}
                                    <span className="text-dark">
                                        Jun 2019 – Mar 2021
                                    </span>
                                </h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EducationBlock;
