import React from "react";

const AboutUs = () => {
    return (
        <div style={{ backgroundColor: "#fff" }}>
            {/* Hero Section */}
            <section
                className="text-center py-5 text-white"
                style={{
                    background:
                        "linear-gradient(90deg, #6366f1 0%, #8b5cf6 100%)",
                }}>
                <Container>
                    <h1 className="display-4 fw-bold mb-3">
                        Empower Your Learning Journey
                    </h1>
                    <p className="lead mb-4">
                        We connect passionate learners with world-class
                        instructors worldwide.
                    </p>
                    <Button
                        variant="light"
                        size="lg"
                        className="fw-semibold text-primary px-4 py-2">
                        Explore Courses
                    </Button>
                </Container>
            </section>

            {/* Mission Section */}
            <section className="py-5 bg-light text-center">
                <Container>
                    <h2 className="fw-bold mb-3">Our Mission</h2>
                    <p
                        className="fs-5 text-secondary mx-auto"
                        style={{ maxWidth: "800px" }}>
                        We believe education should be accessible, flexible, and
                        inspiring. Our platform helps learners around the world
                        gain real-world skills from industry experts.
                    </p>
                </Container>
            </section>

            {/* Story Section */}
            <section className="py-5">
                <Container>
                    <Row className="align-items-center">
                        <Col
                            md={6}
                            className="mb-4 mb-md-0">
                            <Image
                                src="learning.jpg"
                                alt="Learning"
                                rounded
                                fluid
                                className="shadow"
                            />
                        </Col>
                        <Col md={6}>
                            <h3 className="fw-semibold mb-3">How We Started</h3>
                            <p className="text-secondary fs-5">
                                Our journey began with a simple idea — to make
                                quality education available to everyone. Today,
                                we’re a global community of learners and
                                educators shaping the future of learning.
                            </p>
                        </Col>
                    </Row>
                </Container>
            </section>

            {/* Values Section */}
            <section className="py-5 bg-light">
                <Container>
                    <h2 className="fw-bold text-center mb-5">
                        Our Core Values
                    </h2>
                    <Row className="g-4">
                        {[
                            {
                                title: "Innovation",
                                text: "We embrace creativity and technology to transform how people learn.",
                            },
                            {
                                title: "Accessibility",
                                text: "Education should be available to everyone, everywhere.",
                            },
                            {
                                title: "Community",
                                text: "We foster a global network of learners and instructors supporting each other.",
                            },
                            {
                                title: "Excellence",
                                text: "We strive for the highest standards in content, teaching, and experience.",
                            },
                        ].map((value, index) => (
                            <Col
                                md={6}
                                lg={3}
                                key={index}>
                                <Card className="h-100 border-0 shadow-sm text-center p-3 hover-shadow transition">
                                    <Card.Body>
                                        <h5 className="fw-bold mb-3 text-primary">
                                            {value.title}
                                        </h5>
                                        <Card.Text className="text-secondary fs-6">
                                            {value.text}
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                        ))}
                    </Row>
                </Container>
            </section>

            {/* Team / Community Section */}
            <section className="py-5 text-center">
                <Container>
                    <h2 className="fw-bold mb-5">
                        Our Global Learning Community
                    </h2>
                    <Row className="g-4">
                        <Col md={4}>
                            <Card className="border-0 shadow-sm">
                                <Card.Img
                                    variant="top"
                                    src="instructor1.jpg"
                                    alt="Instructor"
                                />
                                <Card.Body>
                                    <h5 className="fw-semibold mb-2">
                                        Alex Johnson
                                    </h5>
                                    <p className="text-secondary mb-0">
                                        Instructor, Web Development
                                    </p>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col md={4}>
                            <Card className="border-0 shadow-sm">
                                <Card.Img
                                    variant="top"
                                    src="student1.jpg"
                                    alt="Student"
                                />
                                <Card.Body>
                                    <h5 className="fw-semibold mb-2">
                                        Maria Lopez
                                    </h5>
                                    <p className="text-secondary mb-0">
                                        Learner, Data Science — “I landed my
                                        first tech job thanks to these courses!”
                                    </p>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col md={4}>
                            <Card className="border-0 shadow-sm p-4 bg-light">
                                <h1 className="fw-bold text-primary">500K+</h1>
                                <p className="text-secondary">
                                    Learners worldwide
                                </p>
                                <h1 className="fw-bold text-primary">1200+</h1>
                                <p className="text-secondary">Instructors</p>
                                <h1 className="fw-bold text-primary">80+</h1>
                                <p className="text-secondary">Countries</p>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </section>

            {/* Call To Action */}
            <section className="py-5 bg-dark text-light text-center">
                <Container>
                    <h2 className="fw-bold mb-3">Learning is a journey.</h2>
                    <p className="fs-5 mb-4">
                        Start yours with us today — whether you’re here to learn
                        or to teach.
                    </p>
                    <Button
                        variant="light"
                        size="lg"
                        className="px-5 py-2 fw-semibold text-primary">
                        Join Our Community
                    </Button>
                </Container>
            </section>
        </div>
    );
};

export default AboutUs;
