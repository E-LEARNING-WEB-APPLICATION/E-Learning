import React from "react";
import './ValuesSection.css'
const ValuesSection = () => {
    const values = [
        {
            title: "Innovation",
            desc: "We embrace creativity and technology to redefine learning experiences.",
        },
        {
            title: "Accessibility",
            desc: "We make education available for everyone, anywhere, anytime.",
        },
        {
            title: "Community",
            desc: "We grow together through shared knowledge and collaboration.",
        },
        {
            title: "Excellence",
            desc: "We pursue quality in everything—from courses to user experience.",
        },
    ];
    return (
        <section className="value-section py-5 bg-light">
            <div className="container text-center">
                      <h2 className="fw-bold mb-5 text-primary">Our Core Values</h2>
                      <div className="row">
                            {values.map((val, index) => (
                                  <div className="col-md-6 mb-4" key={index}>
                                        <div className="card h-100 shadow-sm value-card p-3">
                                              <div className="card-body">
                                                    <h5 className="fw-bold mb-3 text-primary">
                                                          {val.title}
                                                    </h5>
                                                    <p className="text-secondary">
                                                          {val.desc}
                                                    </p>
                                              </div>
                                        </div>
                              </div>
                        ))}
                      </div>
            </div>
        </section>
    );
};

export default ValuesSection;
