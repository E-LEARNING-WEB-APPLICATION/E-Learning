import { useState } from "react";
import "./Form.css";

const Form = () => {
    const [form, setForm] = useState({
        name: "",
        phoneno: "",
        email: "",
        comment: "",
    });
    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        })
    }



    return (
        <div className="contact-container ">
            <h5 className="contact-title">GET IN TOUCH</h5>
            <form className="contact-form">
                <div className="row">
                    <div className="col-md-6 mb-3">
                        <label className="form-label">NAME</label>
                        <input
                            name="name"
                            //e -> synchronize based event(onclick,onchange,onsubmit,etc are its properties)
                            //...form -> gets the previous values of the form(Spread Operator)
                            //e.target.name -> to pick which property to be updated the "name" here is the 'name' in input tag [name="name"]
                            //e.target.value -> to get the value dynamically
                            onChange={handleChange}
                            type="text"
                            className="form-control"
                            value={form.name}
                            placeholder="Enter your name*"
                        />
                    </div>
                    <div className="col-md-6 mb-3">
                        <label className="form-label">PHONE NUMBER</label>
                        <input
                            name="phoneno"
                            onChange={handleChange}
                            type="tel"
                            className="form-control"
                            value={form.phoneno}
                            placeholder="Enter your phone number*"
                        />
                    </div>
                </div>
                <div className="mb-3">
                    <label className="form-label">EMAIL</label>
                    <input
                        name="email"
                        onChange={handleChange}
                        type="email"
                        className="form-control"
                        placeholder="Enter your email*"
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">YOUR MESSAGE</label>
                    <textarea
                        name="comment"
                        onChange={handleChange}
                        className="form-control"
                        rows="4"
                        placeholder="Type your message here..."></textarea>
                </div>
                <div className="text-center">
                    <button
                        type="submit"
                        className="btn btn-primary send-btn"
                        onClick={(e) => {
                            e.preventDefault();
                            console.log(form);
                            setForm({
                                name: "",
                                phoneno: "",
                                email: "",
                                comment: "",
                            });
                        }}>
                        SEND MESSAGE
                    </button>
                </div>
            </form>
        </div>
    );
};

export default Form;
