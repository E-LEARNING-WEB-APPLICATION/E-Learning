import React, { useState } from "react";
import "./AdminCategoryPage.css";

const AdminCategoryPage = () => {
  const [categoryForm, setCategoryForm] = useState({
    name: "",
    description: "",
    keywords: "",
    image: null,
  });

  const [previewImg, setPreviewImg] = useState(null);

  const [categories, setCategories] = useState([
    {
      id: 1,
      name: "Programming",
      description: "Courses related to coding and software development.",
      keywords: "Java, React, Python",
      image: "https://via.placeholder.com/80",
    },
    {
      id: 2,
      name: "Business",
      description: "Business strategy, marketing, finance.",
      keywords: "startup, finance",
      image: "https://via.placeholder.com/80",
    },
  ]);

  const handleChange = (e) => {
    setCategoryForm({ ...categoryForm, [e.target.name]: e.target.value });
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    setCategoryForm({ ...categoryForm, image: file });

    if (file) setPreviewImg(URL.createObjectURL(file));
  };

  const handleAddCategory = (e) => {
    e.preventDefault();

    const newCategory = {
      id: Date.now(),
      name: categoryForm.name,
      description: categoryForm.description,
      keywords: categoryForm.keywords,
      image: previewImg || "https://via.placeholder.com/80",
    };

    setCategories([...categories, newCategory]);

    // Reset form
    setCategoryForm({
      name: "",
      description: "",
      keywords: "",
      image: null,
    });
    setPreviewImg(null);
  };

  const handleDelete = (id) => {
    setCategories(categories.filter((cat) => cat.id !== id));
  };

  return (
    <div className="container py-4 category-page">
      {/* Page Header */}
      <div className="mb-4">
        <h2 className="fw-bold">Manage Course Categories</h2>
        <p className="text-muted">
          Add new categories and manage existing ones.
        </p>
      </div>

      {/* Add Category Section */}
      <div className="add-category-card p-4 shadow-sm rounded mb-5">
        <h4 className="fw-bold mb-3">Add New Category</h4>

        <form onSubmit={handleAddCategory}>
          <div className="row g-3">
            {/* Category Name */}
            <div className="col-md-6">
              <label className="form-label fw-semibold">Category Name</label>
              <input
                type="text"
                name="name"
                value={categoryForm.name}
                onChange={handleChange}
                className="form-control"
                placeholder="e.g. Web Development"
                required
              />
            </div>

            {/* Keywords */}
            <div className="col-md-6">
              <label className="form-label fw-semibold">Keywords</label>
              <input
                type="text"
                name="keywords"
                value={categoryForm.keywords}
                onChange={handleChange}
                className="form-control"
                placeholder="Comma separated tags"
              />
            </div>

            {/* Description */}
            <div className="col-12">
              <label className="form-label fw-semibold">Description</label>
              <textarea
                name="description"
                value={categoryForm.description}
                onChange={handleChange}
                className="form-control"
                rows="3"
                placeholder="Short description..."
              ></textarea>
            </div>

            {/* Image Upload */}
            <div className="col-md-6">
              <label className="form-label fw-semibold">Category Image</label>
              <input
                type="file"
                className="form-control"
                accept="image/*"
                onChange={handleImageUpload}
              />
            </div>

            {/* Image Preview */}
            <div className="col-md-6 d-flex align-items-center">
              {previewImg ? (
                <img
                  src={previewImg}
                  alt="Preview"
                  className="img-thumbnail"
                  style={{
                    width: "120px",
                    height: "120px",
                    objectFit: "cover",
                  }}
                />
              ) : (
                <p className="text-muted">No image selected</p>
              )}
            </div>

            {/* Submit Button */}
            <div className="col-12">
              <button className="btn btn-primary px-4 mt-2">
                + Add Category
              </button>
            </div>
          </div>
        </form>
      </div>

      {/* Categories Table */}
      <div className="shadow-sm p-4 rounded bg-white">
        <h4 className="fw-bold mb-3">All Categories</h4>

        <table className="table table-bordered table-striped">
          <thead className="table-light">
            <tr>
              <th>#</th>
              <th>Image</th>
              <th>Name</th>
              <th>Description</th>
              <th>Keywords</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>
            {categories.map((cat, i) => (
              <tr key={cat.id}>
                <td>{i + 1}</td>
                <td>
                  <img
                    src={cat.image}
                    alt={cat.name}
                    width="60"
                    className="rounded"
                  />
                </td>
                <td>{cat.name}</td>
                <td>{cat.description}</td>
                <td>{cat.keywords}</td>
                <td>
                  <button className="btn btn-warning btn-sm me-2">Edit</button>
                  <button
                    className="btn btn-danger btn-sm"
                    onClick={() => handleDelete(cat.id)}
                  >
                    Remove
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminCategoryPage;
