import axios from "axios";


export async function addTopic( formData ) 
{    
     const response = await axios.post('http://localhost:8080/api/v1/instructor/addTopic', formData,
        {
            headers: { "Content-Type": "multipart/form-data" ,
                Authorization: `Bearer ${localStorage.getItem("token")}`
            }
        }
    )

    return response
}


export async function getTopics( sectionId ) 
{    
     const response = await axios.get(`http://localhost:8080/api/v1/instructor/getTopics/${sectionId.sectionId}`,
        {
            headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`
            }
        }
    )

    return response
}



export async function getTopicById(topicId) {
  return axios.get(
    `http://localhost:8080/api/v1/instructor/getTopic/${topicId}`,
    {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    }
  );
}

export async function updateTopic(formData) {
  return axios.put(
    "http://localhost:8080/api/v1/instructor/updateTopic",
    formData,
    {
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    }
  );
}



