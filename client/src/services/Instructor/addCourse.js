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

    const data = [
        {
        courseName : "React",
        courseDesc : "This is the Courses Description of React.This is the Courses Description of React.This is the Courses Description of React.This is the Courses Description of React.This is the Courses Description of React.",
        image : "./../../../public/images/react.png"
        },

        {
        courseName : "NodeJs",
        courseDesc : "This is the Courses Description of React.This is the Courses Description of NodeJs.This is the Courses Description of NodeJs.This is the Courses Description of React.This is the Courses Description of NodeJs.",
        image : "./../../../public/images/node.png"
        },

        {
        courseName : "Java",
        courseDesc : "This is the Courses Description of Java.This is the Courses Description of Java.This is the Courses Description of Java.This is the Courses Description of Java.This is the Courses Description of Java.",
        image : "./../../../public/images/java.png"
        },

        {
        courseName : "SpringBoot",
        courseDesc : "This is the Courses Description of SpringBoot.This is the Courses Description of SpringBoot.This is the Courses Description of SpringBoot.This is the Courses Description of SpringBoot.This is the Courses Description of SpringBoot.",
        image : "./../../../public/images/spring.png"
        },

]

return data

    
}