import React from 'react'

const GridView = ({courses}) => {
  return (
    <div className="row">
          {courses.map((course) => {
            return (
              <div className="col-3" key={course.course_id}>
                <div className="card" style={{width: "18rem"}}>
                  <img
                    src={course.course_thumbnail}
                    className="card-img-top"
                    alt={course.course_name}
                  />
                  <div className="card-body">
                    <h5 className="card-title">{course.course_name}</h5>
                    <h6 className="card-title">{course.category}</h6>
                    <p className="card-text">{course.course_desc}</p>
                    {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
  )
}

export default GridView