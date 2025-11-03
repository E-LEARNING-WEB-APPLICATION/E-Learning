import React from "react";
import ProfileHeader from "./../../../components/student/studentProfile/profileHeader/ProfileHeader";
import ProfileInfo from "./../../../components/student/studentProfile/profileInfo/ProfileInfo";
import EducationBlock from "./../../../components/student/studentProfile/educationblock/EducationBlock";
import AddressBlock from "./../../../components/student/studentProfile/addressBlock/AddressBlock";
import Heading from "./../../../components/student/studentProfile/heading/Heading";
const StudentProfile = () => {
    return (
          <div className="container">
                <Heading/>
              <div className="row">
                  <div className="col-md-4">
                      <ProfileHeader />
                      <ProfileInfo />
                  </div>
                  <div className="col-md-8">
                      <AddressBlock />
                      <EducationBlock />
                  </div>
              </div>
        </div>
    );
};

export default StudentProfile;
