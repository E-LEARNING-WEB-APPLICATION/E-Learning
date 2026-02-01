import { API_URL } from "@/utils/apiClient";
import axios from "axios";


export async function addCourse( formData) {
    const response = await axios.post(`${API_URL}/addCourse`, formData,
        {
            headers: { "Content-Type": "multipart/form-data" }
        }
    )
    return response;
}

export async function getAddedCourses() {

  const response =  await axios.get(`${API_URL}/api/v1/instructor/getAllInstructorCourses`,
    {
            headers: { 
            Authorization: `Bearer ${localStorage.getItem("token")}`
        } 
        }
  )

  const data = await response.data

  console.log(data)
  return data
}



export async function getCourseById(courseId) {
  const response = await axios.get(
    `${API_URL}/api/v1/courses/${courseId}`,
    {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    }
  );
  return response.data;
}


export async function updateCourse(courseId, formData) {
  const response = await axios.put(
    `${API_URL}/api/v1/instructor/updateCourse/${courseId}`,
    formData,
    {
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    }
  );
  return response.data;
}



export async function fetchCoursesData()
{
 const response = await axios.get(`${API_URL}/api/v1/instructor/getData`,
    {
      headers:
      {
        Authorization: `Bearer ${localStorage.getItem("token")}`
      }
    }
  )
  return response
}


export async function getStudents(courseId)
{
  const response = await axios.get(`${API_URL}/api/v1/instructor/getStudentsLists/${courseId}`,{
    headers:
    {
      Authorization: `Bearer ${localStorage.getItem("token")}`
    }
  })

  return response;
}




export async function setPublish(courseId, isPublished) {
  const response = await axios.put(
    `${API_URL}/api/v1/instructor/changePublish/${courseId}`,
    null,
    {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`
      },
      params: {
        isPublished: isPublished
      }
    }
  );

  return response;
}

