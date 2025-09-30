-- AUTH table (only authentication related info)
CREATE TABLE auth (
    auth_id INT PRIMARY KEY AUTO_INCREMENT,
    email VARCHAR(255) UNIQUE NOT NULL,
    password_hash VARCHAR(255) NOT NULL,
    role ENUM('student','instructor','admin') NOT NULL,
    status ENUM('active','inactive') DEFAULT 'active',
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

-- USER PROFILE (1:1 with auth)
CREATE TABLE user_profile (
    profile_id INT PRIMARY KEY AUTO_INCREMENT,
    auth_id INT UNIQUE NOT NULL,
    fname VARCHAR(50),
    lname VARCHAR(50),
    dob DATE,
    gender ENUM('male','female','other'),
    profile_pic VARCHAR(255),
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (auth_id) REFERENCES auth(auth_id)
);

-- EDUCATION DETAILS (1:N with student/instructor)
CREATE TABLE education_details (
    edu_id INT PRIMARY KEY AUTO_INCREMENT,
    profile_id INT NOT NULL,
    degree VARCHAR(100),
    field_of_study VARCHAR(100),
    institute VARCHAR(150),
    grade VARCHAR(20),
    description TEXT,
    start_date DATE,
    end_date DATE,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (profile_id) REFERENCES user_profile(profile_id)
);

-- STUDENT DETAILS (1:1 with user_profile)
CREATE TABLE student_details (
    student_id INT PRIMARY KEY AUTO_INCREMENT,
    profile_id INT UNIQUE NOT NULL,
    total_courses_enrolled INT DEFAULT 0,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (profile_id) REFERENCES user_profile(profile_id)
);

-- INSTRUCTOR DETAILS (1:1 with user_profile)
CREATE TABLE instructor_details (
    instructor_id INT PRIMARY KEY AUTO_INCREMENT,
    profile_id INT UNIQUE NOT NULL,
    title VARCHAR(100),
    bio TEXT,
    mobile_number VARCHAR(20),
    status ENUM('active','inactive') DEFAULT 'inactive',
    is_approved BOOLEAN DEFAULT FALSE,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (profile_id) REFERENCES user_profile(profile_id),
);

-- ADDRESS
CREATE TABLE address (
    address_id INT PRIMARY KEY AUTO_INCREMENT,
    profile_id INT NOT NULL,
    address_line1 VARCHAR(255),
    address_line2 VARCHAR(255),
    city VARCHAR(100),
    state VARCHAR(100),
    pincode VARCHAR(20),
    country VARCHAR(100),
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (profile_id) REFERENCES user_profile(profile_id)
);

-- CATEGORY
CREATE TABLE category (
    category_id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(100) NOT NULL,
    description TEXT,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

-- COURSES
CREATE TABLE courses (
    course_id INT PRIMARY KEY AUTO_INCREMENT,
    category_id INT,
    instructor_id INT,
    course_name VARCHAR(150) NOT NULL,
    course_desc TEXT,
    fees DECIMAL(10,2),
    discount_percentage DECIMAL(5,2),
    course_thumbnail VARCHAR(255),
    course_intro_video VARCHAR(255),
    course_duration VARCHAR(50),
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (category_id) REFERENCES category(category_id),
    FOREIGN KEY (instructor_id) REFERENCES instructor_details(instructor_id)
);

-- SECTIONS
CREATE TABLE sections (
    section_id INT PRIMARY KEY AUTO_INCREMENT,
    course_id INT,
    section_name VARCHAR(150),
    section_description TEXT,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (course_id) REFERENCES courses(course_id)
);

-- TOPICS
CREATE TABLE topics (
    topic_id INT PRIMARY KEY AUTO_INCREMENT,
    section_id INT,
    topic_name VARCHAR(150),
    topic_description TEXT,
    topic_video VARCHAR(255),
    topic_notes TEXT,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (section_id) REFERENCES sections(section_id)
);

-- BOOKING (junction table: student ↔ course ↔ payment)
CREATE TABLE booking_course (
    booking_id INT PRIMARY KEY AUTO_INCREMENT,
    student_id INT,
    course_id INT,
    payment_id INT UNIQUE,
    date_of_purchase DATETIME DEFAULT CURRENT_TIMESTAMP,
    course_price DECIMAL(10,2),
    price_paid DECIMAL(10,2),
    FOREIGN KEY (student_id) REFERENCES student_details(student_id),
    FOREIGN KEY (course_id) REFERENCES courses(course_id),
    FOREIGN KEY (payment_id) REFERENCES transactions(transaction_id)
);

-- TRANSACTIONS
CREATE TABLE transactions (
    transaction_id INT PRIMARY KEY AUTO_INCREMENT,
    mode_of_payment ENUM('card','upi','netbanking','wallet','cash'),
    amount DECIMAL(10,2),
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

-- FEEDBACK (student ↔ course, 1 student can give 1 feedback per course)
CREATE TABLE feedback (
    feedback_id INT PRIMARY KEY AUTO_INCREMENT,
    student_id INT,
    course_id INT,
    rating DECIMAL(2,1),
    comment TEXT,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (student_id) REFERENCES student_details(student_id),
    FOREIGN KEY (course_id) REFERENCES courses(course_id),
    UNIQUE(student_id, course_id) -- prevents duplicate feedback
);
