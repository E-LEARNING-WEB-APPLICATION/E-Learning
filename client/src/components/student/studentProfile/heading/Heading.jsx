import React from 'react'

const Heading = () => {
  return (
      <div>
          <div className="row container mb-3">
              <div className="col-md-6">
                  <h1 className="display-1 fw-bold">Profile</h1>
              </div>
              <div
                  className="col-md-6 d-flex align-items-end"
                  style={{ height: "100px" }}>
                  Your profile reflects your academic growth and learning
                  milestones. <br />
                  Keep it updated to highlight your educational achievements and
                  future goals.
              </div>
          </div>
      </div>
  );
}

export default Heading