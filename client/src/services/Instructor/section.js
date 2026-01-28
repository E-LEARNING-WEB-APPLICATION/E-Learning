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

    const response = await axios.get(`http://localhost:8080/api/v1/instructor/getCourseSections/${courseId.courseId}`,{
        headers:
        {
            Authorization: `Bearer ${localStorage.getItem("token")}`
        }
    })

    return response

}
