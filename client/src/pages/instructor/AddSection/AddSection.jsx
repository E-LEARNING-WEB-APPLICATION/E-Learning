import React, { useState } from 'react'
import './AddSections.css'
import { useLocation, useNavigate } from 'react-router-dom'
import { addTheSection } from './../../../services/Instructor/section'
import { useDispatch, useSelector } from 'react-redux'
import { add } from './../../../slices/section/sectionSlice'




function AddSection() {


    const sections = useSelector((store)=>
    {
        return store.sections.value
    })

    const dispatch = useDispatch()
   // console.log("Sections in Add Section - ",sections)
    const navigate = useNavigate()
    const location = useLocation()
    const { courseName } = location.state
    const [sectionNumber,setSectionNumber] = useState(0);
    const [sectionTitle , setSectionTitle] = useState("")
    const [sectionDesc,setSectionDesc] = useState("")

   

    function onSectionAdd()
    {
        const data = 
        {
            courseName,
            sectionNumber,
            sectionTitle,
            sectionDesc
        }
       const sectionData =  addTheSection(data)
       if(sectionData != null)
       {   
          const newData = [...sections,sectionData]
        //  console.log("New data in add section ",newData)
          dispatch(add(newData))
        window.alert("Section Added Successfully")
        navigate(-1)
       }
       else
       {
        window.alert("Error while adding Section")
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
