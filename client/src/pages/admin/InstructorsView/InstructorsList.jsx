import React, { useEffect, useState } from 'react'
import instructorData from '../../../../DummyData/Instructors.json'

const InstructorsList = () => {

    const [instructors, setInstructors] = useState([])

    const fetchInstructors = () => {
        setInstructors(instructorData);
    }

    useEffect(()=>{
        fetchInstructors()
    },[])

  return (
    <div>
        <table className='table'>
            <thead>
             <tr>
                <th>id</th>
                <th>name</th>
                <th>dob</th>
                <th>email</th>
                <th>mobile</th>
                <th>education</th>
                <th>status</th>
             </tr>
            </thead>
            <tbody>
                
        {instructors.map((instructor)=>{
            return(
                <tr key={instructor.id}>
                    <td>{instructor.id}</td>
                    <td>{instructor.fname}</td>
                    <td>{instructor.dob}</td>
                    <td>{instructor.email}</td>
                    <td>{instructor.mobile}</td>
                    <td>{instructor.education.degree}</td>
                    <td className={instructor.isApproved ? 'bg-success': 'bg-danger'}>{instructor.isApproved ? "approved": "not approved"}</td>
                </tr>
            )
            })}
            </tbody>
        </table>
    </div>
  )
}

export default InstructorsList