const RecentActivity = () => {
  return (
    <div className="col-12">
      <div className="p-3 shadow-sm rounded table-card">
        <h5>Recent Enrollments & Reviews</h5>

        <ul className="list-group mt-3">
          <li className="list-group-item">
            <strong>Omkar</strong> enrolled in <strong>Node.js Bootcamp</strong>
            <span className="float-end text-muted">2 hrs ago</span>
          </li>

          <li className="list-group-item">
            <strong>Riya</strong> reviewed <strong>React Mastery</strong>: ⭐⭐⭐⭐☆
          </li>
        </ul>
      </div>
    </div>
  );
};

export default RecentActivity;
