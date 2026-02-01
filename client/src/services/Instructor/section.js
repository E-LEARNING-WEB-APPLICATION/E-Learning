import { API_URL } from "@/utils/apiClient";
import axios from "axios";
 


export async function addTheSection( data ) 
{    
    const response = await axios.post(`${API_URL}/api/v1/instructor/addSection`,data , {
            headers: { 
            Authorization: `Bearer ${localStorage.getItem("token")}`
        } 
        })
    return response

}

export async function getAllSections( courseId ) 
{

    const response = await axios.get(`${API_URL}/api/v1/instructor/getCourseSections/${courseId}`,{
        headers:
        {
            Authorization: `Bearer ${localStorage.getItem("token")}`
        }
    })

    return response

}




export async function getSectionById(sectionId) {
  return axios.get(
    `${API_URL}/api/v1/instructor/getSection/${sectionId}`,
    {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    }
  );
}


export async function updateSection(sectionId, data) {
  return axios.put(
    `${API_URL}/api/v1/instructor/updateSection/${sectionId}`,
    data,
    {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    }
  );
}
