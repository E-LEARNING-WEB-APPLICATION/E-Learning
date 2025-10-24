import React from 'react'
import { FaHeart, FaTrash } from 'react-icons/fa';
import './WishList.css'

const WishList = () => {

    const wishlistCourses = [
        {
            id: 1,
            title: "Complete React Bootcamp",
            desc: "Master React, Hooks, and state management with real-world projects.",
            price: 1499,
            img: "https://picsum.photos/400/250?random=1"
        },
        {
            id: 2,
            title: "Java Programming Essentials",
            desc: "Build strong Java fundamentals for backend and Android development.",
            price: 999,
            img: "https://picsum.photos/400/250?random=2"
        },
        {
            id: 3,
            title: "UI/UX Design Mastery",
            desc: "Learn Figma, prototyping, and modern design principles.",
            price: 1299,
            img: "https://picsum.photos/400/250?random=3"
        },
        {
            id: 4,
            title: "Python for Data Science",
            desc: "Learn Python, NumPy, Pandas, and visualization to kickstart your data science journey.",
            price: 1199,
            img: "https://picsum.photos/400/250?random=4"
        },
        {
            id: 5,
            title: "Full-Stack Web Development",
            desc: "Master frontend and backend using React, Node.js, and MySQL from scratch.",
            price: 1799,
            img: "https://picsum.photos/400/250?random=5"
        },
        {
            id: 6,
            title: "Advanced Java with Spring Boot",
            desc: "Deep dive into Spring Boot, REST APIs, and real-world backend architectures.",
            price: 1599,
            img: "https://picsum.photos/400/250?random=6"
        },
        {
            id: 7,
            title: "Machine Learning Fundamentals",
            desc: "Understand core ML concepts and build models using Scikit-learn and Python.",
            price: 1899,
            img: "https://picsum.photos/400/250?random=7"
        },
        {
            id: 8,
            title: "Android App Development",
            desc: "Develop Android apps using Java and Kotlin with hands-on projects.",
            price: 1399,
            img: "https://picsum.photos/400/250?random=8"
        }

    ];

    return (
        <div className='wishlist-container container py-5'>
            <h2 className="text-center mb-4 wishlist-title" style={{ textDecoration: "underline" }}>
                <FaHeart className="me-2 text-danger" /> My Wishlist
            </h2>

            <div className='row g-4'>
                {wishlistCourses.map((course) => (
                    <div className='col-12 col-sm-6 col-md-4 col-lg-3 mb-4' key={course.id}>
                        <div className='card wishlist-card shadow-sm h-100'>
                            <img
                                className='card-img-top'
                                src={course.img}
                                alt={course.title}
                            />
                            <div className='card-body d-flex flex-column'>
                                <h5 className='card-title fw-semibold'>{course.title}</h5>
                                <p className='card-text text-muted small flex-grow-1' >
                                    {course.desc}
                                </p>
                                <div className='d-flex justify-content-between align-items-center mt-3'>
                                    <span className='fw-bold fs-6 text-primary'>
                                        ₹{course.price}
                                    </span>
                                    <button className="btn btn-outline-danger btn-sm d-flex align-items-center">
                                        <FaTrash className="me-2" />
                                        Remove
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default WishList