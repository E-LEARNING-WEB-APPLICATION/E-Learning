import React, { useState } from 'react'
import './AddSections.css'
import { useLocation, useNavigate, useParams } from 'react-router-dom'
import { addTheSection } from './../../../services/Instructor/section'
import { toast } from "react-toastify";



function AddSection() {

   

    const { courseId } = useParams();
    const location = useLocation()
    const courseName = location.state?.courseName;
    

    console.log(courseName)

    const [sectionNumber,setSectionNumber] = useState(0);
    const [sectionTitle , setSectionTitle] = useState("")
    const [sectionDesc,setSectionDesc] = useState("")

    const navigate = useNavigate()


    async function onSectionAdd()
    {
        const data = 
        {
            courseId,
            courseName,
            sectionNumber,
            sectionTitle,
            sectionDesc
        }

        try
        {
           const response = await addTheSection(data)
           if(response.status === 201)
            
           toast.success("Section Added SuccessFully")
           navigate(-1)
        }
        catch(error)
        {
            console.log(error)
             toast.error("Failed to Add Section")
        }
       
        
    }


    return (
        <div className="add-section-container">

            <h1 className="section-heading">
                Add Section for {courseName} Course
            </h1>


            <div className="form-group">
                <label htmlFor="sectionNumber">Enter Section Number</label>
                <input type="number" className="form-control" id="sectionNumber" 
                onChange={(e) =>
                {
                    setSectionNumber(e.target.value)
                }} 

                />
            </div>
            <div className="form-group">
                <label htmlFor="sectionTitle">Enter Section Title</label>
                <input type="text" className="form-control" id="sectionTitle" 
                onChange={(e) =>
                {
                    setSectionTitle(e.target.value)
                    
                }} 

                />
            </div>
           
            
            <div className="form-group">
                <label htmlFor="sectionDesc">Enter Section Description</label>
                <textarea className="form-control text-area" id="sectionDesc" rows={3} defaultValue={""}
                onChange={(e) =>
                {
                    setSectionDesc(e.target.value)
                    
                }} 
                 />
            </div>
            <div>
                <button type="button" className="btn btn-primary" onClick={onSectionAdd}>Add Section</button>

            </div>
        </div>

    )
}

export default AddSection
