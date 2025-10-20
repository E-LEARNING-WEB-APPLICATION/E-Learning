import React from 'react'
import { useSelector } from 'react-redux'
import { useLocation } from 'react-router-dom'

import './ShowTopics.css'

function ShowTopic() {
    const location = useLocation()
    const allTopics = useSelector((store) => {
        return store.topics.value
    })

    console.log("all topics from redux", allTopics)

    const { sectionNumber, sectionTitle, courseName } = location.state
    // console.log("section number and title",sectionNumber,sectionTitle)
    return (
        <div>
            <center><h1> {courseName} </h1></center>
            <center><h1> Section  {sectionNumber} - {sectionTitle} </h1></center>

            <div>

                {allTopics.length > 0 && allTopics.map((data, index) => {
                  return sectionTitle == data.sectionName  &&  <div className="card" key={index}>
                        <div className="card-body">
                            <h5 className="card-title">Topic {data.topicNumber} - {data.topicName}</h5>
                            <p className="card-text">{data.topicDesc}</p>
                            <div> <button type="button" className="btn btn-secondary">Update Topic</button></div>
                        </div>
                        <center><video className='card-img-top topic-video' src={data.video} controls > </video></center>
                    </div>
                })}

            </div>

        </div>
    )
}

export default ShowTopic


{/* <div className="card">
                    <div className="card-body">
                    {   allTopics.length > 0 && <h5 className="card-title">Topic {allTopics[0].topicNumber} - {allTopics[0].topicName}</h5> }
                        <p className="card-text">{allTopics[0].topicDesc}</p>
                        <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                    </div>
                   <center><video className='card-img-top topic-video' src= {allTopics[0].video} controls > </video></center> 
                </div> */}