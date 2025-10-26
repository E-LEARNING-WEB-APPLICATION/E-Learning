import React, { useEffect, useState } from 'react'
import instructorData from '../../../../DummyData/Instructors.json'

const InstructorRequests = () => {

    const [instructors, setInstructors] = useState([])

    const fetchInstructors = () => {
        setInstructors(instructorData.filter((instructor)=>{return !instructor.isApproved}));
    }

    const handleApprove = (id) => {
        //handle
    }

    const handleReject = (id) => {
        //handle
    }


    useEffect(()=>{
        fetchInstructors()
    },[])

  return (
    <div>
        <table className='table'>
            <thead>
             <tr>
                <th className='text-center'>id</th>
                <th className='text-center'>name</th>
                <th className='text-center'>dob</th>
                <th className='text-center'>email</th>
                <th className='text-center'>mobile</th>
                <th className='text-center'>education</th>
                <th className='text-center'>status</th>
             </tr>
            </thead>
            <tbody>
                
        {instructors.map((instructor)=>{
            return(
                <tr key={instructor.id}>
                    <td className='text-center'>{instructor.id}</td>
                    <td className='text-center'>{instructor.fname}</td>
                    <td className='text-center'>{instructor.dob}</td>
                    <td className='text-center'>{instructor.email}</td>
                    <td className='text-center'>{instructor.mobile}</td>
                    <td className='text-center'>{instructor.education.degree}</td>
                    <td className='text-center'>
                        <button type="button" className='btn btn-success mx-3' onClick={()=>{handleApprove(instructor.id)}}>approve</button>
                        <button type="button" className='btn btn-danger mx-3' onClick={()=>{handleReject(instructor.id)}}>reject</button>
                    </td>
                </tr>
            )
            })}
            </tbody>
        </table>
    </div>
  )
}

export default InstructorRequests