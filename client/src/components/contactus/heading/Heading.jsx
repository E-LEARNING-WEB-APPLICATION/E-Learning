import React from 'react'

const Heading = () => {
  return (
      <div>
          <div className="row">
              <div className="col-md-6">
                  <h1 className="display-1 fw-bold">Contact Us</h1>
              </div>
              <div
                  className="col-md-6 d-flex align-items-end "
                  style={{ height: "100px" }}>
                  Contact us if you have any questions or need assistance with
                  our services. <br />
                  Our team is always ready to help and guide you through your
                  queries.
              </div>
          </div>
      </div>
  );
}

export default Heading