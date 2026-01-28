import React, { useEffect, useState } from "react";
import "../AddedCourses/AddedCourses.css";
import { getAddedCourses } from "./../../../services/Instructor/addCourse.js";
import { useNavigate } from "react-router-dom";

function AddedCourses() {
  const navigator = useNavigate();
  const [data, setData] = useState([]);

  useEffect(() => {
    displayAllCourses();
  }, []);

  async function displayAllCourses() {
    const response = await getAddedCourses();
    setData(response);
  }

  function goToAddSection(courseName,courseId) {
    navigator(`add-section/${courseId}`, {
      state: {
        courseName,
      },
    });
  }

  function handleShowSections(courseName,courseId) {
    console.log("1",courseId,typeof(courseId))
    navigator(`show-sections/${courseId}`, {
      state: {
        courseName
      },
    });
  }

  return (
    <div className="container">
      <h1 className="page-heading">Added Courses</h1>

      <div className="myrow">
        {data.map((data, index) => {
          return (
            <div className="outer-div">
              <div key={index}>
                <div className="card mb-3 ">
                  <img
                    className="card-img-top "
                    src={data.thumbnail}
                    alt="Card image cap"
                    height={"150px"}
        
                  />
                  <div className="card-body">
                    <h5 className="card-title">{data.title}</h5>
                    <p className="card-text">{data.description}</p>

                    <div className="buttons">
                      <div>
                        <button
                          type="button"
                          className="btn btn-primary show-section-button"
                          onClick={() => {
                            handleShowSections(data.title,data.courseId);
                          }}
                        >
                          Show Sections
                        </button>
                      </div>

                      <div>
                        <button
                          type="button"
                          className="btn btn-primary add-section-button"
                          onClick={() => {
                            goToAddSection(data.title,data.courseId);
                          }}
                        >
                          Add Sections
                        </button>
                      </div>
                      <div>
                        <button
                          type="button"
                          className="btn btn-secondary edit-course-button"
                        >
                          Edit Course
                        </button>
                      </div>
                    </div>

                    <div className="publish-button">
                      <button
                        type="button"
                        className="btn btn-success publish-course-buttons"
                      >
                        Publish Course
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default AddedCourses;
