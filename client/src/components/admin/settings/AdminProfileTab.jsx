import {
  updateAdminPassword,
  updateAdminProfile,
} from "@/services/admin/authService";
import { useState } from "react";
import {
  FaLock,
  FaMapMarkerAlt,
  FaPhone,
  FaSave,
  FaUser,
} from "react-icons/fa";
import { toast } from "react-toastify";

export const AdminProfileTab = () => {
  const [profilePic, setProfilePic] = useState(null);

  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    dob: "",
    gender: "",
    phoneNo: "",
    bio: "",
    address: {
      street: "",
      addressLine1: "",
      city: "",
      state: "",
      country: "",
      zipCode: "",
    },
  });

  const [passwordForm, setPasswordForm] = useState({
    oldPassword: "",
    newPassword: "",
  });

  const [confirmPassword, setConfirmPassword] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name.startsWith("address.")) {
      const key = name.split(".")[1];
      setForm((prev) => ({
        ...prev,
        address: { ...prev.address, [key]: value },
      }));
    } else {
      setForm((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleProfileSubmit = async () => {
    const formData = new FormData();

    formData.append(
      "data",
      new Blob([JSON.stringify(form)], {
        type: "application/json",
      }),
    );

    if (profilePic) {
      formData.append("profilePic", profilePic);
    }

    await updateAdminProfile(formData);
    toast.success("Profile updated successfully");
  };

  const handlePasswordSubmit = async () => {
    try {
      if (passwordForm.newPassword !== confirmPassword) {
        throw new Error("passwords do not match");
      }
      await updateAdminPassword(passwordForm);
      setPasswordForm({
        oldPassword: "",
        newPassword: "",
      });
      setConfirmPassword("");
      toast.success("Password updated successfully");
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <div className="row g-4">
      {/* Profile Form */}
      <div className="col-lg-8">
        <div className="settings-card">
          <h5 className="fw-bold mb-3">
            <FaUser className="me-2 text-primary" />
            Profile Information
          </h5>

          <div className="row g-3">
            <Input
              label="First Name"
              name="firstName"
              value={form.firstName}
              onChange={handleChange}
            />
            <Input
              label="Last Name"
              name="lastName"
              value={form.lastName}
              onChange={handleChange}
            />
            <Input
              label="Date of Birth"
              type="date"
              name="dob"
              value={form.dob}
              onChange={handleChange}
            />
            <SelectInput
              label="Gender"
              name="gender"
              value={form.gender}
              onChange={handleChange}
              options={[
                { label: "Male", value: "MALE" },
                { label: "Female", value: "FEMALE" },
              ]}
            />

            <Input
              label="Phone Number"
              name="phoneNo"
              value={form.phoneNo}
              onChange={handleChange}
              icon={<FaPhone />}
            />

            <div className="col-12">
              <label className="form-label">Bio</label>
              <textarea
                className="form-control"
                rows={3}
                name="bio"
                value={form.bio}
                onChange={handleChange}
              />
            </div>

            <div className="col-12">
              <label className="form-label">Profile Picture</label>
              <input
                type="file"
                className="form-control"
                onChange={(e) => setProfilePic(e.target.files[0])}
              />
            </div>
          </div>

          {/* Address */}
          <hr className="my-4" />
          <h6 className="fw-bold mb-3">
            <FaMapMarkerAlt className="me-2 text-danger" />
            Address
          </h6>

          <div className="row g-3">
            <Input
              label="Street"
              name="address.street"
              value={form.address.street}
              onChange={handleChange}
            />
            <Input
              label="Address Line 1"
              name="address.addressLine1"
              value={form.address.addressLine1}
              onChange={handleChange}
            />
            <Input
              label="City"
              name="address.city"
              value={form.address.city}
              onChange={handleChange}
            />
            <Input
              label="State"
              name="address.state"
              value={form.address.state}
              onChange={handleChange}
            />
            <Input
              label="Country"
              name="address.country"
              value={form.address.country}
              onChange={handleChange}
            />
            <Input
              label="Zip Code"
              name="address.zipCode"
              value={form.address.zipCode}
              onChange={handleChange}
            />
          </div>

          <div className="text-end mt-4">
            <button
              className="btn btn-primary px-4"
              onClick={handleProfileSubmit}
            >
              <FaSave className="me-2" />
              Save Changes
            </button>
          </div>
        </div>
      </div>

      {/* Password */}
      <div className="col-lg-4">
        <div className="settings-card">
          <h5 className="fw-bold mb-3">
            <FaLock className="me-2 text-warning" />
            Change Password
          </h5>

          <div className="mb-3">
            <label className="form-label">Current Password</label>
            <input
              type="password"
              className="form-control"
              value={passwordForm.oldPassword}
              onChange={(e) =>
                setPasswordForm({
                  ...passwordForm,
                  oldPassword: e.target.value,
                })
              }
            />
          </div>

          <div className="mb-3">
            <label className="form-label">New Password</label>
            <input
              type="password"
              className="form-control"
              value={passwordForm.newPassword}
              onChange={(e) =>
                setPasswordForm({
                  ...passwordForm,
                  newPassword: e.target.value,
                })
              }
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Confirm Password</label>
            <input
              type="password"
              className="form-control"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>

          <button
            className="btn btn-outline-warning w-100"
            onClick={handlePasswordSubmit}
          >
            Update Password
          </button>
        </div>
      </div>
    </div>
  );
};

const Input = ({ label, name, type = "text", value, onChange, icon }) => (
  <div className="col-md-6">
    <label className="form-label">{label}</label>
    <div className="input-group">
      {icon && <span className="input-group-text">{icon}</span>}
      <input
        type={type}
        name={name}
        className="form-control"
        value={value}
        onChange={onChange}
      />
    </div>
  </div>
);

const SelectInput = ({ label, name, value, onChange, options, icon }) => (
  <div className="col-md-6">
    <label className="form-label">{label}</label>
    <div className="input-group">
      {icon && <span className="input-group-text">{icon}</span>}
      <select
        className="form-select"
        name={name}
        value={value}
        onChange={onChange}
      >
        <option value="">Select {label}</option>
        {options.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
    </div>
  </div>
);
