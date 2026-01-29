import axios from "axios";
 


export async function addTheSection( data ) 
{    
    const response = await axios.post('http://localhost:8080/api/v1/instructor/addSection',data , {
            headers: { 
            Authorization: `Bearer ${localStorage.getItem("token")}`
        } 
        })
    return response

}

export async function getAllSections( courseId ) 
{

    const response = await axios.get(`http://localhost:8080/api/v1/instructor/getCourseSections/${courseId}`,{
        headers:
        {
            Authorization: `Bearer ${localStorage.getItem("token")}`
        }
    })

    return response

}




export async function getSectionById(sectionId) {
  return axios.get(
    `http://localhost:8080/api/v1/instructor/getSection/${sectionId}`,
    {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    }
  );
}


export async function updateSection(sectionId, data) {
  return axios.put(
    `http://localhost:8080/api/v1/instructor/updateSection/${sectionId}`,
    data,
    {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    }
  );
}
