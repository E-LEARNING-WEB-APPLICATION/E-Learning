import { useEffect, useState } from 'react';
import './ShowTopics.css'
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { getTopics } from '@/services/Instructor/topic';

function ShowTopic() {

  const navigate = useNavigate()
  const sectionId = useParams("sectionId")
  const [allTopics,setTopics] = useState([])
  useEffect(()=>
    {
      getAllTopics(sectionId)
    },[])

    async function getAllTopics(sectionId)
    {
      try
      {
        const response =  await getTopics(sectionId)
        setTopics(response.data)
        

      }
      catch(error)
      {
        console.log(error)
        toast.error("Failed to Fetch Topics")
      }

    }


    function handleEditTopic(topicId)
    {
      navigate(`/instructor/addedCourses/show-sections/update-topic/${topicId}`)
    }
  

    return (
        <div className="show-topics-container">
  
  <h1 className="course-title">{}</h1>
  <h1 className="section-title">Section {} – {}</h1>

  <div className="topics-list">

    {allTopics.length > 0 &&
      allTopics.map((data, index) => {
        return (
           (
            <div className="topic-card" key={index}>
              
              <div className="card-body">
                <h5 className="card-title">
                  Topic {data.topicNumber} – {data.title}
                </h5>

                <p className="card-text">{data.description}</p>

                <button onClick={()=>
                {
                  handleEditTopic(data.topicId)
                }} type="button" className="btn btn-secondary update-btn">
                  Update Topic
                </button>
              </div>

              <video className="topic-video" src={data.videoUrl} controls></video>
            </div>
          )
        );
      })}

  </div>

</div>

    )
}

export default ShowTopic

