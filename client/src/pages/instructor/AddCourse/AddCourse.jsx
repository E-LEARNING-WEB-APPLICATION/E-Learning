import React, { useState } from 'react'
import './AddCourse.css'
import { addCourse } from '../../../services/Instructor/addCourse';
import { toast } from "react-toastify";

function AddCourse() {


    const [ courseName, setCourseName ] = useState("");
    const [ courseDesc, setCourseDesc ] = useState("");
    const [ fees, setFees ] = useState(0);
    const [ discountPercentage, setDiscountPercentage ] = useState(0);
    const [ image, setImage ] = useState(null);
    const [ video, setVideo ] = useState(null);
    const [ hour, setHour ] = useState("");
  


    async function handleAddCourse()
    {
        const formData = new FormData();
        formData.append("courseName", courseName);
        formData.append("courseDesc", courseDesc);
        formData.append("fees", fees);
        formData.append("discountPercentage", discountPercentage);
        formData.append("hour", hour);
        formData.append("image", image);
        formData.append("video", video);

        const response =  await addCourse(formData)
        console.log(response);
        if(response.data.success)
        {
            toast.success("Course Registered Successfully")
            
        }
        else
        {
            toast.error("Course Not Added")
        }

    }

    return (

        <div className='container'> 

        <div className='add-course-main'>
            <h1>Add Course</h1>

            

                <div className="form-group mb-3">
                    <label htmlFor="courseName">Course Name</label>
                    <input type="text" className="form-control" id="courseName" onChange={(e) => {
                        setCourseName(e.target.value)
                    }} />

                </div>
                <div className="form-group mb-3">
                    <label htmlFor="courseDesc">Course Description</label>
                    <textarea className="form-control" id="courseDesc" rows="3"
                        onChange={(e) => {
                            setCourseDesc(e.target.value)
                        }}
                    ></textarea>
                </div>

                <div className="form-group mb-3">
                    <label htmlFor="fees">Fees</label>
                    <input type="number" step="0.01" className="form-control" id="fees"
                        onChange={(e) => {
                            setFees(e.target.value)
                        }}
                    />

                </div>

                <div className="form-group mb-3">
                    <label htmlFor="discount">Discount %</label>
                    <input type="number" className="form-control" id="discount"
                        onChange={(e) => {
                            setDiscountPercentage(e.target.value)
                        }}
                    />

                </div>

                <div className=" form-group mb-3">
                    <label htmlFor="formFile" className="form-label">Upload Image</label>
                    <input className="form-control" type="file" id="formFile" accept="image/*"

                        onChange={(e) => {
                            setImage(e.target.files[0])
                        }}
                    />
                </div>

                <div className="form-group mb-3">
                    <label htmlFor="introVideo" className="form-label">Choose Intro Video</label>
                    <input
                        type="file"
                        className="form-control"
                        id="introVideo"
                        accept="video/*"
                        required
                        onChange={(e) => {
                            setVideo(e.target.files[0])
                        }}
                    />
                </div>

                <div className="mb-3">
                    <label className="form-label">Course Duration (Hours &amp; Minutes)</label>
                    <div className="input-group">
                        <input type="number" className="form-control" placeholder="Hours" min={0} max={23} name="hours" onChange={(e) => {
                            setHour(e.target.value)
                        }} />
                
                      
                    </div>
                </div>

                <button type="submit" className="btn btn-primary mb-3" onClick={handleAddCourse}>Submit</button>
            
     

        </div>

        </div>
    )
}

export default AddCourse

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