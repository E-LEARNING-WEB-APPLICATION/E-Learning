import { useEffect, useState } from "react";
import "./EditCourse.css";
import {
  getCourseById,
  updateCourse,
} from "@/services/Instructor/addCourse";
import { fetchCategoriesNormalized } from "@/services/admin/categoryService";
import { toast } from "react-toastify";
import Loader from "@/components/shared/Loader";
import { useNavigate, useParams } from "react-router-dom";

function EditCourse() {
  const navigate = useNavigate();
  const { courseId } = useParams();

  /* =========================
     STATE
     ========================= */
  const [categories, setCategories] = useState([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [loading, setLoading] = useState(true);

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
     FETCH DATA
     ========================= */
  useEffect(() => {
    const loadData = async () => {
      try {
        const [courseRes, categoryRes] = await Promise.all([
          getCourseById(courseId),
          fetchCategoriesNormalized(),
        ]);

        if (categoryRes.success) {
          setCategories(categoryRes.data || []);
        }

        setForm({
          courseName: courseRes.courseName,
          courseDesc: courseRes.courseDesc,
          fees: courseRes.fees,
          discountPercentage: courseRes.discountPercentage,
          categoryId: courseRes.categoryId,
          hour: parseInt(courseRes.courseDuration), 
          image: null,
          video: null,
        });
      } 
      catch (error)
      {
        console.log(error)
        toast.error("Failed to load course details");
      } 
      finally {
        setLoading(false);
      }
    };

    loadData();
  }, [courseId]);

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
      if (value !== null && value !== "") {
        formData.append(key, value);
      }
    });

    const res = await updateCourse(courseId, formData);

    if (res.success) {
      toast.success("Course updated successfully");
      navigate("/instructor/AddedCourses");
    } else {
      toast.error(res.message || "Failed to update course");
    }

    setIsSubmitting(false);
  };

  if (loading) return <Loader text="Loading course..." />;

  /* =========================
     UI
     ========================= */
  return (
    <div className="container">
      <div className="add-course-main">
        <h1 className="page-title">Edit Course</h1>

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
              value={form.courseName}
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
              value={form.courseDesc}
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
                value={form.fees}
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
                value={form.discountPercentage}
                onChange={handleChange}
              />
            </div>
          </div>

          {/* Image */}
          <div className="mb-3">
            <label>Course Thumbnail (optional)</label>
            <input
              type="file"
              name="image"
              accept="image/*"
              className="form-control"
              onChange={handleChange}
            />
          </div>

          {/* Video */}
          <div className="mb-3">
            <label>Intro Video (optional)</label>
            <input
              type="file"
              name="video"
              accept="video/*"
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
              value={form.hour}
              onChange={handleChange}
            />
          </div>

          {/* Loader */}
          {isSubmitting && <Loader text="Updating course..." />}

          {/* Submit */}
          <button
            type="submit"
            className="btn btn-primary w-100"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Updating..." : "Update Course"}
          </button>
        </form>
      </div>
    </div>
  );
}

export default EditCourse;
