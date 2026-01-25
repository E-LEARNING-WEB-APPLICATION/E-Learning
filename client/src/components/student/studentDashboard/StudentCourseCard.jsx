import React from "react";

const StudentCourseCard = ({ course }) => {

    
    return (
        <div
            className="col-md-3"
            key={course.id}>
            <div className="card shadow-sm h-100">
                {/* Image */}
                <img
                    src={course.thumbnail}
                    onError={(e) =>
                        (e.target.src =
                            "https://picsum.photos/seed/fallback/300/200")
                    }
                    className="card-img-top rounded-top"
                    alt={course.title}
                    style={{
                        height: "150px",
                        objectFit: "cover",
                    }}
                />

                <div className="card-body">
                    <div style={{ height: 60 }}>
                        <h5 className="fw-bold">{course.title}</h5>
                    </div>

                    <p className="text-muted small mb-1">{course.duration}</p>

                    <p className="text-warning mb-2">
                        ⭐ {course.rating} ({course.reviews} reviews)
                    </p>

                    {/* Price */}
                    <p className="fw-bold text-primary">
                        ₹{course.fees}
                        {course.discount > 0 && (
                            <span className="text-muted text-decoration-line-through ms-2">
                                ₹
                                {Math.round(
                                    course.fees *
                                        (100 / (100 - course.discount))
                                )}
                            </span>
                        )}
                    </p>
                    <button className="btn btn-primary w-100 mb-1" >
                        View Course
                    </button>
                </div>
            </div>
        </div>
    );
};

export default StudentCourseCard;
