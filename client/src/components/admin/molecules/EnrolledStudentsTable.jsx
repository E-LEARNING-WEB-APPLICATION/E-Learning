import { useNavigate } from "react-router-dom";

const EnrolledStudentsTable = ({ data, loading, page, onPrev, onNext }) => {
  const navigate = useNavigate();

  return (
    <div className="shadow-sm p-4 rounded bg-white">
      <h4 className="fw-bold mb-3">Enrolled Students</h4>

      {loading ? (
        <div className="text-center py-4">Loading students...</div>
      ) : !data || data.content.length === 0 ? (
        <div className="text-center text-muted py-4">No students enrolled</div>
      ) : (
        <>
          <div className="table-responsive">
            <table className="table table-hover align-middle">
              <thead className="table-light">
                <tr>
                  <th>#</th>
                  <th>Student</th>
                  <th>Email</th>
                  <th>Purchased On</th>
                  <th>Price</th>
                  <th>Payment</th>
                </tr>
              </thead>

              <tbody>
                {data.content.map((s, i) => (
                  <tr key={s.bookingId}>
                    <td>{page * 10 + i + 1}</td>

                    <td
                      className="fw-semibold text-primary cursor-pointer"
                      onClick={() => navigate(`/admin/students/${s.studentId}`)}
                    >
                      {s.studentName}
                    </td>

                    <td>{s.studentEmail}</td>
                    <td>{new Date(s.paidAt).toLocaleDateString()}</td>
                    <td>
                      {s.currency} {s.pricePaid}
                    </td>
                    <td>{s.paymentMethod}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Pagination */}
          <div className="d-flex justify-content-center gap-2 mt-3">
            <button
              className="btn btn-outline-primary btn-sm"
              disabled={page === 0}
              onClick={onPrev}
            >
              Prev
            </button>
            <button
              className="btn btn-outline-primary btn-sm"
              disabled={data.last}
              onClick={onNext}
            >
              Next
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default EnrolledStudentsTable;
