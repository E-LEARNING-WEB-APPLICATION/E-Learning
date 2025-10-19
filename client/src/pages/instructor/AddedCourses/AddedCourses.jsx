import React, { useEffect, useState } from 'react'
import '../AddedCourses/AddedCourses.css'
import { getAddedCourses } from './../../../services/Instructor/addCourse.js'


function AddedCourses() {

    const [data , setData] = useState([]);

    useEffect(()=>{
        displayAllCourses()
    },[])

    async function displayAllCourses()
    {
        const response = await getAddedCourses()
        setData(response);
        console.log(response)

    }
    
    return (
        <div>
        <center>
            <h1> Added Courses</h1>
        </center>
        {
            data.map((data,index)=>
            {
                return  <div key={index}>
                <div className="card mb-3">
                <img className="card-img-top" src={data.image} alt="Card image cap" height={"150px"}/>
                <div className="card-body">
                    <h5 className="card-title">{data.courseName}</h5>
                    <p className="card-text">{data.courseDesc}</p>
                    <div >
                        <div>
                            <button type="button" className="btn btn-primary added-courses-buttons">Add Topics</button>
                            <button type="button" className="btn btn-secondary added-courses-buttons">Edit Course</button>
                            <button type="button" className="btn btn-success added-courses-buttons">Publish Course</button>
                        </div>

                    </div>
                </div>
            </div>
            </div>
            })
        }

        </div>
    )
}

export default AddedCourses


{/* <div className="card mb-3">
                <img className="card-img-top" src={data[0].image} alt="Card image cap" height={"150px"}/>
                <div className="card-body">
                    <h5 className="card-title">Course Name</h5>
                    <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                    <div >
                        <div>
                            <button type="button" className="btn btn-primary added-courses-buttons">Add Topics</button>
                            <button type="button" className="btn btn-secondary added-courses-buttons">Edit Course</button>
                            <button type="button" className="btn btn-success added-courses-buttons">Publish Course</button>
                        </div>

                    </div>
                </div>
            </div> */}
