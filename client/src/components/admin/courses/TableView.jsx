import React from 'react'

const TableView = ({courses}) => {
  return (
    <div>
        <table className='table'>
            <thead>
                <tr>
                    <td>course id</td>
                    <td>name</td>
                    <td>category</td>
                    <td>instructor</td>
                    <td>price</td>
                </tr>
            </thead>
            <tbody>
                {courses.map((course)=>{
                    return <tr key={course.course_id}>
                        <td>{course.course_id}</td>
                        <td>{course.course_name}</td>
                        <td>{course.category}</td>
                        <td>{course.instructor_name}</td>
                        <td>{course.fees}</td>
                    </tr>
                })}
            </tbody>
        </table>
    </div>
  )
}

export default TableView