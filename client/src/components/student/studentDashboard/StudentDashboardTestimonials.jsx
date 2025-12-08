import React, { useState } from "react";
import { FaQuoteLeft, FaStar } from "react-icons/fa";

export default function StudentDashboardTestimonials({ sampleTestimonials }) {
    const [index, setIndex] = useState(0);

    const next = () => setIndex((i) => (i + 1) % sampleTestimonials.length);
    const prev = () =>
        setIndex(
            (i) =>
                (i - 1 + sampleTestimonials.length) % sampleTestimonials.length
        );

    const current = sampleTestimonials[index];

    return (
        <section className="py-5 bg-light">
            <div className="container">
                <div className="text-center mb-5">
                    <h2 className="fw-bold">What Our Students Say</h2>
                    <p className="text-muted">
                        Honest feedback from thousands of successful learners
                    </p>
                </div>

                <div className="row justify-content-center">
                    <div className="col-lg-7">
                        <div className="card shadow border-0 p-4 position-relative">
                            {/* Quote Icon */}
                            <FaQuoteLeft
                                className="position-absolute"
                                style={{
                                    top: "20px",
                                    left: "20px",
                                    opacity: 0.2,
                                    fontSize: "40px",
                                }}
                            />

                            {/* Student Info */}
                            <div className="text-center">
                                <img
                                    src={current.image}
                                    alt={current.name}
                                    className="rounded-circle mb-3 border"
                                    style={{
                                        width: "90px",
                                        height: "90px",
                                        objectFit: "cover",
                                    }}
                                />

                                <h5 className="fw-bold mb-0">{current.name}</h5>
                                <p className="text-primary small">
                                    {current.course}
                                </p>

                                {/* Rating */}
                                <div className="mb-3">
                                    {Array.from({ length: current.rating }).map(
                                        (_, i) => (
                                            <FaStar
                                                key={i}
                                                className="text-warning me-1"
                                            />
                                        )
                                    )}
                                </div>

                                <p className="text-muted">{current.review}</p>
                            </div>

                            {/* Navigation */}
                            <div className="d-flex justify-content-between mt-4">
                                <button
                                    className="btn btn-outline-primary rounded-circle"
                                    onClick={prev}>
                                    ❮
                                </button>
                                <button
                                    className="btn btn-outline-primary rounded-circle"
                                    onClick={next}>
                                    ❯
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Dots Pagination */}
                <div className="d-flex justify-content-center mt-4 gap-2">
                    {sampleTestimonials.map((_, i) => (
                        <div
                            key={i}
                            onClick={() => setIndex(i)}
                            className={`rounded-pill ${
                                i === index ? "bg-primary" : "bg-secondary"
                            }`}
                            style={{
                                width: i === index ? "25px" : "10px",
                                height: "10px",
                                cursor: "pointer",
                            }}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
