const CompletionGauge = ({ percentage }) => {
  return (
    <div className="d-flex flex-column align-items-center justify-content-center w-100 h-100">
      <div
        className="progress-circle"
        style={{
          width: "70%",
          height: "70%",
          maxWidth: 180,
          maxHeight: 180,
          borderRadius: "50%",
          border: "12px solid #10b981",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: "28px",
        }}
      >
        {percentage}%
      </div>
      <p className="mt-3 fw-semibold">Completion Rate</p>
    </div>
  );
};

export default CompletionGauge;
