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
        <div className="show-topics-container">
  
  <h1 className="course-title">{courseName}</h1>
  <h1 className="section-title">Section {sectionNumber} – {sectionTitle}</h1>

  <div className="topics-list">

    {allTopics.length > 0 &&
      allTopics.map((data, index) => {
        return (
          sectionTitle === data.sectionName && (
            <div className="topic-card" key={index}>
              
              <div className="card-body">
                <h5 className="card-title">
                  Topic {data.topicNumber} – {data.topicName}
                </h5>

                <p className="card-text">{data.topicDesc}</p>

                <button type="button" className="btn btn-secondary update-btn">
                  Update Topic
                </button>
              </div>

              <video className="topic-video" src={data.video} controls></video>
            </div>
          )
        );
      })}

  </div>

</div>

    )
}

export default ShowTopic
