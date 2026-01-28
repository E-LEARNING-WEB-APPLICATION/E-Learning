"use client";
import { useState } from "react";
import "./AddAdminPage.css";
import { registerAdmin } from "@/services/authService";
import { toast } from "react-toastify";

export default function AddAdminPage() {
  const [form, setForm] = useState({
    email: "",
    password: "",
    firstName: "",
    lastName: "",
    dob: "",
    gender: "",
    phoneNo: "",
    bio: "",
    profilePic: null,
    address: {
      street: "",
      city: "",
      state: "",
      country: "",
      zipCode: "",
    },
  });

  const buildFormData = () => {
    const fd = new FormData();

    fd.append(
      "data",
      new Blob(
        [
          JSON.stringify({
            email: form.email,
            password: form.password,
            firstName: form.firstName,
            lastName: form.lastName,
            dob: form.dob,
            gender: form.gender,
            phoneNo: form.phoneNo,
            bio: form.bio,
            address: form.address,
          }),
        ],
        { type: "application/json" },
      ),
    );

    fd.append("profilePic", form.profilePic);
    return fd;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name.startsWith("address.")) {
      const key = name.split(".")[1];
      setForm({
        ...form,
        address: { ...form.address, [key]: value },
      });
    } else {
      setForm({ ...form, [name]: value });
    }
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setForm({ ...form, profilePic: file });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formdata = buildFormData();
    const res = await registerAdmin(formdata);
    if (res.success) {
      toast.success("Admin registered");
    } else {
      toast.error(res.message);
    }
  };

  return (
    <div className="add-admin-page container-fluid">
      <div className="page-header mb-4">
        <h2>Create New Admin</h2>
        <p className="text-muted">
          Add a new administrator with access to the admin panel
        </p>
      </div>

      <form onSubmit={handleSubmit} className="row g-4">
        {/* AUTH SECTION */}
        <Section title="Authentication">
          <Input
            col="col-md-6"
            label="Email"
            name="email"
            type="email"
            onChange={handleChange}
          />
          <Input
            col="col-md-6"
            label="Password"
            name="password"
            type="password"
            onChange={handleChange}
          />
        </Section>

        {/* PERSONAL INFO */}
        <Section title="Personal Information">
          <Input
            col="col-md-4"
            label="First Name"
            name="firstName"
            onChange={handleChange}
          />
          <Input
            col="col-md-4"
            label="Last Name"
            name="lastName"
            onChange={handleChange}
          />
          <Input
            col="col-md-4"
            label="Date of Birth"
            name="dob"
            type="date"
            onChange={handleChange}
          />

          <Select
            col="col-md-4"
            label="Gender"
            name="gender"
            onChange={handleChange}
          >
            <option value="">Select Gender</option>
            <option value="MALE">Male</option>
            <option value="FEMALE">Female</option>
            <option value="OTHER">Other</option>
          </Select>

          <Input
            col="col-md-4"
            label="Phone Number"
            name="phoneNo"
            onChange={handleChange}
          />
          <Input
            col="col-md-4"
            type="file"
            label="Profile Picture"
            accept="image/*"
            name="profilePic"
            onChange={handleFileChange}
          />

          <div className="col-12">
            <label className="form-label">Bio</label>
            <textarea
              className="form-control material-input"
              rows="3"
              name="bio"
              onChange={handleChange}
            />
          </div>
        </Section>

        {/* ADDRESS */}
        <Section title="Address">
          <Input
            col="col-md-6"
            label="Street"
            name="address.street"
            onChange={handleChange}
          />
          <Input
            col="col-md-3"
            label="City"
            name="address.city"
            onChange={handleChange}
          />
          <Input
            col="col-md-3"
            label="State"
            name="address.state"
            onChange={handleChange}
          />
          <Input
            col="col-md-3"
            label="Country"
            name="address.country"
            onChange={handleChange}
          />
          <Input
            col="col-md-3"
            label="Zip Code"
            name="address.zipCode"
            onChange={handleChange}
          />
        </Section>

        {/* ACTIONS */}
        <div className="col-12 text-end">
          <button className="btn btn-outline-secondary me-2 mt-2">
            Cancel
          </button>
          <button type="submit" className="btn btn-primary px-4">
            Create Admin
          </button>
        </div>
      </form>
    </div>
  );
}

function Section({ title, children }) {
  return (
    <div className="col-12">
      <div className="admin-card">
        <h6 className="section-title">{title}</h6>
        <div className="row g-3">{children}</div>
      </div>
    </div>
  );
}

function Input({ label, name, type = "text", col, onChange }) {
  return (
    <div className={col}>
      <label className="form-label">{label}</label>
      <input
        type={type}
        name={name}
        className="form-control material-input"
        onChange={onChange}
      />
    </div>
  );
}

function Select({ label, name, col, children, onChange }) {
  return (
    <div className={col}>
      <label className="form-label">{label}</label>
      <select
        name={name}
        className="form-select material-input"
        onChange={onChange}
      >
        {children}
      </select>
    </div>
  );
}
