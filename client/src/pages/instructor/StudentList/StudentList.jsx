import { getStudents } from '@/services/Instructor/addCourse';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';

function StudentList() {


   const { courseId } = useParams();
   
    const [data,setData]= useState([])
  
          useEffect(()=>
        {
            getStudentsLists(courseId)
        },[])

        async function getStudentsLists (courseId)
        {
            try
            {
               const response =  await getStudents(courseId);
               setData(response.data)
            }
            catch(error)
            {
                console.log(error)
                toast.error("Error While Fetching Students")
            }
           
        }


  return (
    <div>
      <table className="table">
      <thead>
        <tr>
          <th>#</th>
          <th>Profile Pic</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>DOB</th>
          <th>Gender</th>
          <th>Phone No</th>
          <th>Address</th>
          <th>Course Purchased On</th>
        </tr>
      </thead>

      <tbody>
        {data && data.length > 0 ? (
          data.map((item, index) => (
            <tr key={item.id || index}>
              <th>{index + 1}</th>

              <td>
                <img
                  src={item.profilePic}
                  alt="Profile"
                  width="40"
                  height="40"
                  className="rounded-circle"
                />
              </td>

              <td>{item.firstName}</td>
              <td>{item.lastName}</td>
              <td>{item.dob}</td>
              <td>{item.gender}</td>
              <td>{item.phoneNo}</td>
              <td>{item.address}</td>
              <td>{item.coursePurchasedOn}</td>
            </tr>
          ))
        ) : (
          <tr>
            <td colSpan="9" className="text-center">
              No data available
            </td>
          </tr>
        )}
      </tbody>
    </table>
      
    </div>
  )
}

export default StudentList
