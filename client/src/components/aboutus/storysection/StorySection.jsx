import React from "react";
import "./StorySection.css";

const StorySection = () => {
    return (
        <div>
            <section className="story-section py-5 bg-white">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-md-6 mb-4 mb-md-0">
                            <img
                                src="https://picsum.photos/200/300"
                                alt="Learning"
                                className="img-fluid rounded shadow story-image"
                            />
                        </div>
                        <div className="col-md-6">
                            <h3 className="fw-semibold mb-3 text-primary">
                                How We Started
                            </h3>
                            <p className="text-secondary fs-5">
                                Our journey began with a simple idea — to make
                                quality education available to everyone. Today,
                                we’re a global community of learners and
                                educators shaping the future of learning.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default StorySection;
