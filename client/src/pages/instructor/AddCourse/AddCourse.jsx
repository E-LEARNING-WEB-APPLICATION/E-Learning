import { useEffect, useState } from "react";
import "./AddCourse.css";
import { addCourse } from "@/services/Instructor/courseService";
import { fetchCategoriesNormalized } from "@/services/admin/categoryService";
import { toast } from "react-toastify";
import Loader from "@/components/shared/Loader";
import { useNavigate } from "react-router-dom";

function AddCourse() {
  const navigate = useNavigate();

  /* =========================
     STATE
     ========================= */
  const [categories, setCategories] = useState([]);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [form, setForm] = useState({
    courseName: "",
    courseDesc: "",
    fees: "",
    discountPercentage: "",
    categoryId: "",
    hour: "",
    image: null,
    video: null,
  });

  /* =========================
     FETCH CATEGORIES
     ========================= */
  useEffect(() => {
    const loadCategories = async () => {
      const res = await fetchCategoriesNormalized();
      if (res.success) {
        setCategories(res.data || []);
      } else {
        toast.error("Failed to load categories");
      }
    };

    loadCategories();
  }, []);

  /* =========================
     HANDLERS
     ========================= */
  const handleChange = (e) => {
    const { name, value, files } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: files ? files[0] : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setIsSubmitting(true);

    const formData = new FormData();
    Object.entries(form).forEach(([key, value]) => {
      formData.append(key, value);
    });

    const res = await addCourse(formData);

    if (res.success) {
      toast.success("Course created successfully");
      navigate("/instructor/AddedCourses");
    } else {
      toast.error(res.message || "Failed to add course");
    }

    setIsSubmitting(false);
  };

  /* =========================
     UI
     ========================= */
  return (
    <div className="container">
      <div className="add-course-main">
        <h1 className="page-title">Add New Course</h1>

        <form
          onSubmit={handleSubmit}
          className={isSubmitting ? "disabled" : ""}
        >
          {/* Course Name */}
          <div className="form-group mb-3">
            <label>Course Name</label>
            <input
              type="text"
              name="courseName"
              required
              className="form-control"
              onChange={handleChange}
            />
          </div>

          {/* Description */}
          <div className="form-group mb-3">
            <label>Description</label>
            <textarea
              name="courseDesc"
              required
              className="form-control"
              rows="3"
              onChange={handleChange}
            />
          </div>

          {/* Category */}
          <div className="form-group mb-3">
            <label>Category</label>
            <select
              name="categoryId"
              required
              className="form-control"
              value={form.categoryId}
              onChange={handleChange}
            >
              <option value="">-- Select Category --</option>
              {categories.map((cat) => (
                <option key={cat.id} value={cat.id}>
                  {cat.title}
                </option>
              ))}
            </select>
          </div>

          {/* Fees & Discount */}
          <div className="row">
            <div className="col-md-6 mb-3">
              <label>Fees</label>
              <input
                type="number"
                name="fees"
                required
                className="form-control"
                onChange={handleChange}
              />
            </div>

            <div className="col-md-6 mb-3">
              <label>Discount %</label>
              <input
                type="number"
                name="discountPercentage"
                required
                className="form-control"
                onChange={handleChange}
              />
            </div>
          </div>

          {/* Image */}
          <div className="mb-3">
            <label>Course Thumbnail</label>
            <input
              type="file"
              name="image"
              accept="image/*"
              required
              className="form-control"
              onChange={handleChange}
            />
          </div>

          {/* Video */}
          <div className="mb-3">
            <label>Intro Video</label>
            <input
              type="file"
              name="video"
              accept="video/*"
              required
              className="form-control"
              onChange={handleChange}
            />
          </div>

          {/* Duration */}
          <div className="mb-4">
            <label>Course Duration (Hours)</label>
            <input
              type="number"
              name="hour"
              min={0}
              required
              className="form-control"
              onChange={handleChange}
            />
          </div>

          {/* Loader */}
          {isSubmitting && <Loader text="Creating course..." />}

          {/* Submit */}
          <button
            type="submit"
            className="btn btn-primary w-100"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Submitting..." : "Create Course"}
          </button>
        </form>
      </div>
    </div>
  );
}

export default AddCourse;
