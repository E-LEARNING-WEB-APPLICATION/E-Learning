import axios from "axios";


export async function addCourse( formData) {
    const response = await axios.post('http://localhost:5193/addCourse', formData,
        {
            headers: { "Content-Type": "multipart/form-data" }
        }
    )
    return response;
}

export async function getAddedCourses() {

  const response =  await axios.get('http://localhost:8080/api/v1/instructor/getAllInstructorCourses',
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
    `http://localhost:8080/api/v1/courses/${courseId}`,
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
    `http://localhost:8080/api/v1/instructor/updateCourse/${courseId}`,
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
