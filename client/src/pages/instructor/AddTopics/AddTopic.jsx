import { addTopic } from '../../../services/Instructor/topic';
import React, { useState } from 'react'
import { useLocation} from 'react-router-dom'
import { useSelector, useDispatch } from "react-redux";
import { add } from '../../../slices/topics/topicSlice';

function AddTopic() {

  const topics = useSelector((state) => state.topics.value)
  const dispatch = useDispatch()


  const location = useLocation()
  const data = location.state.data

  const [topicNumber, setTopicNumber] = useState(0);
  const [topicName, setTopicName] = useState("");
  const [topicDesc, setTopicDesc] = useState("");

  const [video, setVideo] = useState(null);
  const [hour, setHour] = useState("");
  const [min, setMin] = useState("");


  async function handleAddTopic() {
    const formData = new FormData();
    formData.append("courseName", data.courseName);
    formData.append("sectionNumber", data.sectionNumber);
    formData.append("sectionName", data.sectionTitle);
    formData.append("topicNumber", topicNumber);
    formData.append("topicName", topicName);
    formData.append("topicDesc", topicDesc);
    formData.append("hour", hour);
    formData.append("min", min);
    formData.append("video", video);

  const response =  addTopic(formData)
   //    console.log("Response" ,response)
      const topicData = {
        courseName : response.get("courseName"),
        sectionNumber : response.get("sectionNumber"),
        sectionName : response.get("sectionName"),
        topicNumber : response.get("topicNumber"),
        topicName : response.get("topicName"),
        topicDesc : response.get("topicDesc"),
        hour : response.get("hour"),
        min : response.get("min"),
        video :  URL.createObjectURL(response.get("video")),
        

      }
   
     const newData = [...topics,topicData]

      dispatch(add(newData));


  }


  return (
    <div>
      <center>
        <h1> {data.courseName}</h1>
        <h3> Section {data.sectionNumber} - {data.sectionTitle}</h3>
      </center>

      <div>

        <div className="form-group mb-3">
          <label htmlFor="topicNumber">Topic Number</label>
          <input type="number" className="form-control" id="topicNumber" onChange={(e) => {
            setTopicNumber(e.target.value)
          }} />

        </div>


        <div className="form-group mb-3">
          <label htmlFor="topicName">Topic Name</label>
          <input type="text" className="form-control" id="topicName" onChange={(e) => {
            setTopicName(e.target.value)
          }} />

        </div>

        <div className="form-group mb-3">
          <label htmlFor="topicDesc">Topic Description</label>
          <textarea className="form-control" id="topicDesc" rows="3"
            onChange={(e) => {
              setTopicDesc(e.target.value)
            }}
          ></textarea>
        </div>



        <div className="form-group mb-3">
          <label htmlFor="topicVideo" className="form-label">Choose Topic Video</label>
          <input
            type="file"
            className="form-control"
            id="topicVideo"
            accept="video/*"
            required
            onChange={(e) => {
              setVideo(e.target.files[0])
            }}
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Video Duration (Hours &amp; Minutes)</label>
          <div className="input-group">
            <input type="number" className="form-control" placeholder="Hours" min={0} max={23} name="hours" onChange={(e) => {
              setHour(e.target.value)
            }} />
            <span className="input-group-text">:</span>
            <input type="number" className="form-control" placeholder="Minutes" min={0} max={59} name="minutes"
              onChange={(e) => {
                setMin(e.target.value)
              }}

            />
          </div>
        </div>

        <button type="submit" className="btn btn-primary mb-3" onClick={handleAddTopic}>Submit</button>
      </div>
    </div>
  )
}

export default AddTopic
