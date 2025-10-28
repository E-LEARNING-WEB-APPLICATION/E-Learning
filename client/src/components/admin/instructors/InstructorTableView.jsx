import React from 'react'

const InstructorTableView = ({instructors, handleRemove}) => {
  return (
    <div><div>
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
                <th>actions</th>
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
                    <td><button className='btn btn-danger' onClick={()=>{handleRemove(instructor.id)}}>remove</button></td>
                </tr>
            )
            })}
            </tbody>
        </table>
    </div></div>
  )
}

export default InstructorTableView