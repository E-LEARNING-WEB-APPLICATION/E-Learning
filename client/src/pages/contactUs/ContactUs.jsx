import React from "react";
import Form from "../../components/contactus/form/Form";
import ContactInfo from "./../../components/contactus/contactinfo/ContactInfo";
import Map from "./../../components/contactus/map/Map";
import Heading from './../../components/contactus/heading/Heading';

const ContactUs = () => {
    return (
        <div>
            <Heading/>
            <div className="row">
                <div className="col-md-6">
                    <Form />
                </div>
                <div className="col-md-6">
                    <ContactInfo />
                </div>
            </div>
            <div className="row">
                <Map />
            </div>
        </div>
    );
};

export default ContactUs;
