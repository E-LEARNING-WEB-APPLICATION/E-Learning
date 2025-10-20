import React from 'react'
import {useLocation, useNavigate } from 'react-router-dom';
import './ShowSections.css'
import { useSelector } from 'react-redux';

function ShowSection() {

    const location = useLocation()
    const topics = useSelector((store) =>
    {
        return store.topics.value
    })
    console.log("topics in show section",topics)
    const sectionData = useSelector((store) =>
    {
        return store.sections.value
    })
   //console.log("sections in show section",sectionData)
    
    const Navigate = useNavigate()
    const data = location.state
   // const sectionData = data.sectionData
    const  courseName  = data.courseName
    
    //console.log("data -" ,data)
    //console.log("Section data - " ,sectionData)
    //console.log("Course Name - " ,courseName)

    function handleAddTopics(data)
    {
       console.log("data - ",data)
       Navigate("add-topic",{
        state : {
            data
        }
       })
    }

    function handleShowTopics(sectionNumber,sectionTitle)
    {
        //console.log("section number and title in showsections - ",sectionNumber,sectionTitle)
        Navigate("show-topics",{
            state : {
                sectionNumber ,
                sectionTitle ,
                courseName
            }
        })
    }



  return (
    <div>
    <center>
        <h1>Sections for The Course {sectionData.courseName}</h1>
          </center>
          {
              sectionData &&
              sectionData.map((data,index) => {
                  return data.courseName === courseName &&
                  <div key={index}>
                      <div className="card" >
                          <div className="card-header">
                             <h4>Section No - {data.sectionNumber}</h4> 
                          </div>
                          <div className="card-body">
                              <h3 className="card-title">{data.sectionTitle}</h3>
                              <p className="card-text">{data.sectionDesc}</p>
                              <button type="button " className="btn btn-primary sections-buttons" onClick={()=>
                              {
                                      handleShowTopics(data.sectionNumber,data.sectionTitle)
                              }}
                              
                              >Show Topics</button>


                              <button type="button " className="btn btn-primary sections-buttons" onClick={()=>
                              {
                                handleAddTopics(data)
                              }}>Add Topics</button>
                              <button type="button " className="btn btn-secondary sections-buttons">Edit Section</button>
                              <button type="button " className="btn btn-danger sections-buttons">Delete Section</button>
                          </div>
                      </div>
                      </div>
              })

          }

      </div>
  )
}

export default ShowSection

