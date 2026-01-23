import axios from "axios";


export async function addCourse( formData) {
    const response = await axios.post('http://localhost:8080/api/v1/instructor/addCourse', formData,
        {
            headers: { 
            Authorization: `Bearer ${localStorage.getItem("token")}`
        } 
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