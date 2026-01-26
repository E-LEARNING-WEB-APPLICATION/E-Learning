import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "./AddSections.css";

import { createSection } from "@/services/Instructor/sectionService";

function AddSection() {
  const navigate = useNavigate();
  const { state } = useLocation();
  const { courseData } = state;

  const [form, setForm] = useState({
    title: "",
    description: "",
  });

  const [loading, setLoading] = useState(false);

  /* =========================
     FORM HANDLERS
     ========================= */
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  /* =========================
     CREATE SECTION
     ========================= */
  const handleAddSection = async () => {
    if (!form.title.trim()) {
      toast.error("Section title is required");
      return;
    }

    setLoading(true);

    const res = await createSection(courseData.courseId, {
      title: form.title,
      description: form.description,
    });

    setLoading(false);

    if (res.success) {
      toast.success("Section created successfully");

      // Navigate back to sections page
      navigate(-1);
    } else {
      toast.error(res.message || "Failed to create section");
    }
  };

  return (
    <div className="add-section-page">
      <div className="add-section-card">
        <h2 className="card-title">
          Add Section to <span>{courseData.title}</span>
        </h2>

        <div className="form-group mb-3">
          <label className="form-label">Section Title</label>
          <input
            name="title"
            type="text"
            className="form-control"
            placeholder="e.g. Introduction to Spring Boot"
            value={form.title}
            onChange={handleChange}
          />
        </div>

        <div className="form-group mb-4">
          <label className="form-label">Section Description</label>
          <textarea
            name="description"
            className="form-control"
            rows={4}
            placeholder="Brief overview of what this section covers"
            value={form.description}
            onChange={handleChange}
          />
        </div>

        <div className="d-flex gap-2">
          <button
            className="btn btn-primary"
            onClick={handleAddSection}
            disabled={loading}
          >
            {loading ? "Creating..." : "Add Section"}
          </button>

          <button
            className="btn btn-outline-secondary"
            onClick={() => navigate(-1)}
            disabled={loading}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddSection;
