import React from "react";
import "./CommunitySection.css";

const CommunitySection = () => {
    return (
        <section className="community-section py-5 bg-white text-center">
            <div className="container">
                <h2 className="fw-bold mb-5 text-primary">
                    Our Global Community
                </h2>
                <div className="row g-4">
                    <div className="col-md-4">
                        <div className="card p-3 border shadow-sm">
                            <img
                                src="https://picsum.photos/100/100"
                                alt="Instructor"
                                className="rounded-circle mb-3 community-img"
                            />
                            <h5 className="fw-semibold text-primary">
                                Expert Instructors
                            </h5>
                            <p className="text-secondary">
                                Learn from experienced professionals who bring
                                real-world insights.
                            </p>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card p-3 border shadow-sm">
                            <img
                                src="https://picsum.photos/100/100"
                                alt="Learners"
                                className="rounded-circle mb-3 community-img"
                            />
                            <h5 className="fw-semibold text-primary">
                                Passionate Learners
                            </h5>
                            <p className="text-secondary">
                                Join millions of learners transforming their
                                careers and lives.
                            </p>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card p-3 border shadow-sm bg-light">
                            <h1 className="fw-bold text-primary">500K+</h1>
                            <p className="text-secondary">Learners worldwide</p>
                            <h1 className="fw-bold text-primary">1200+</h1>
                            <p className="text-secondary">Instructors</p>
                            <h1 className="fw-bold text-primary">80+</h1>
                            <p className="text-secondary">Countries</p>
                            <h1 className="fw-bold text-primary">15K+</h1>
                            <p className="text-secondary">Courses Available</p>
                            <h1 className="fw-bold text-primary">2M+</h1>
                            <p className="text-secondary">Certificates Issued</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CommunitySection;
