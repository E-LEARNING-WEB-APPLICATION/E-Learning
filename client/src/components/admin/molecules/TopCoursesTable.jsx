const TopCoursesTable = () => {
  return (
    <div className="col-12">
      <div className="p-3 shadow-sm rounded table-card">
        <h5>Top Courses</h5>

        <table className="table table-hover mt-3">
          <thead>
            <tr>
              <th>Course</th>
              <th>Instructor</th>
              <th>Enrollments</th>
              <th>Rating</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>React for Beginners</td>
              <td>John Doe</td>
              <td>2200</td>
              <td>4.8</td>
            </tr>
            <tr>
              <td>Python Mastery</td>
              <td>Sarah Lee</td>
              <td>1800</td>
              <td>4.6</td>
            </tr>
          </tbody>
        </table>

      </div>
    </div>
  );
};

export default TopCoursesTable;
