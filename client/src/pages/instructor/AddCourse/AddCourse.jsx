import React, {  useEffect, useState } from "react";
import "./AddCourse.css";
import { addCourse } from "../../../services/Instructor/addCourse";
import { toast } from "react-toastify";
import { useRef } from "react";
import Loader from "@/components/shared/Loader";
import { useNavigate } from "react-router-dom";
import Form from "./../../../components/contactus/form/Form";
import { fetchCategoriesNormalized } from "@/services/admin/categoryService";

function AddCourse() {
    const [category, setCategory] = useState([]);

    const buttonRef = useRef(null);
    const [courseName, setCourseName] = useState("");
    const [courseDesc, setCourseDesc] = useState("");
    const [fees, setFees] = useState(0);
    const [discountPercentage, setDiscountPercentage] = useState(0);
    const [image, setImage] = useState(null);
    const [video, setVideo] = useState(null);
    const [categoryId, setCategoryId] = useState("");
    const [hour, setHour] = useState("");
    const [load, setLoad] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const fetch = async () => {
            try {
                const data = await fetchCategoriesNormalized();
                console.log(data);
                setCategory(data);
            } catch (error) {
                toast.error(error.message);
            }
        };

        fetch();
    }, []);

    async function handleAddCourse(e) {
        e.preventDefault();
        buttonRef.current.disabled = true;
        setLoad(true);
        const formData = new FormData();
        formData.append("courseName", courseName);
        formData.append("courseDesc", courseDesc);
        formData.append("fees", fees);
        formData.append("categoryId", categoryId);
        formData.append("discountPercentage", discountPercentage);
        formData.append("hour", hour);
        formData.append("image", image);
        formData.append("video", video);

        const response = await addCourse(formData);
        console.log(response);
        if (response.data.success) {
            toast.success("Course Registered Successfully");
        } else {
            toast.error("Course Not Added");
        }
        buttonRef.current.disabled = false;
        setLoad(false);
        navigate("/instructor/AddedCourses");
    }

    return (
        <div className="container">
            <div className="add-course-main">
                <h1>Add Course</h1>

                <form onSubmit={handleAddCourse}>
                    <div className="form-group mb-3">
                        <label htmlFor="courseName">Course Name</label>
                        <input
                            type="text"
                            required
                            className="form-control"
                            id="courseName"
                            onChange={(e) => {
                                setCourseName(e.target.value);
                            }}
                        />
                    </div>
                    <div className="form-group mb-3">
                        <label htmlFor="courseDesc">Course Description</label>
                        <textarea
                            required
                            className="form-control"
                            id="courseDesc"
                            rows="3"
                            onChange={(e) => {
                                setCourseDesc(e.target.value);
                            }}></textarea>
                    </div>
                    <div className="form-group mb-3">
                        <label htmlFor="category">Category</label>
                        <select
                            id="category"
                            className="form-control"
                            required
                            value={categoryId}
                            onChange={(e) => setCategoryId(e.target.value)}>
                            <option value="">-- Select Category --</option>

                            {category.map((cat) => (
                                <option
                                    key={cat.id}
                                    value={cat.id}>
                                    {cat.title}
                                </option>
                            ))}
                        </select>
                    </div>

                    <div className="form-group mb-3">
                        <label htmlFor="fees">Fees</label>
                        <input
                            required
                            type="number"
                            step="1"
                            className="form-control"
                            id="fees"
                            onChange={(e) => {
                                setFees(e.target.value);
                            }}
                        />
                    </div>

                    <div className="form-group mb-3">
                        <label htmlFor="discount">Discount %</label>
                        <input
                            required
                            type="number"
                            className="form-control"
                            id="discount"
                            onChange={(e) => {
                                setDiscountPercentage(e.target.value);
                            }}
                        />
                    </div>

                    <div className=" form-group mb-3">
                        <label
                            htmlFor="formFile"
                            className="form-label">
                            Upload Image
                        </label>
                        <input
                            required
                            className="form-control"
                            type="file"
                            id="formFile"
                            accept="image/*"
                            onChange={(e) => {
                                setImage(e.target.files[0]);
                            }}
                        />
                    </div>

                    <div className="form-group mb-3">
                        <label
                            htmlFor="introVideo"
                            className="form-label">
                            Choose Intro Video
                        </label>
                        <input
                            type="file"
                            className="form-control"
                            id="introVideo"
                            accept="video/*"
                            required
                            onChange={(e) => {
                                setVideo(e.target.files[0]);
                            }}
                        />
                    </div>

                    <div className="mb-3">
                        <label className="form-label">
                            Course Duration (Hours &amp; Minutes)
                        </label>
                        <div className="input-group">
                            <input
                                required
                                type="number"
                                className="form-control"
                                placeholder="Hours"
                                min={0}
                                max={23}
                                name="hours"
                                onChange={(e) => {
                                    setHour(e.target.value);
                                }}
                            />
                        </div>
                    </div>

                    {load && <Loader text="Adding Course" />}

                    <button
                        ref={buttonRef}
                        type="submit"
                        className="btn btn-primary mb-3">
                        Submit
                    </button>
                </form>
            </div>
        </div>
    );
}

export default AddCourse;

// courseId           INT PRIMARY KEY AUTO_INCREMENT
// c_id               INT REFERENCES category(cId)
// iId                INT REFERENCES instructor_details(iId)
// course_name        VARCHAR(100)
// course_desc        TEXT
// fees               DECIMAL(10,2)
// discount_percentage DECIMAL(5,2)
// course_thumbnail   VARCHAR(255)
// course_intro_video VARCHAR(255)
// course_duration    VARCHAR(50)
// created_at         DATETIME DEFAULT CURRENT_TIMESTAMP
