
import React, { useEffect, useState } from "react";

import { useLocation, useNavigate, useParams } from "react-router-dom";
import { getSectionById, updateSection } from "../../../services/Instructor/section";
import { toast } from "react-toastify";
import "./EditSection.css"



function EditSection() {
  const { sectionId } = useParams();
  const location = useLocation();
  const navigate = useNavigate();

  const courseName = location.state?.courseName;

  const [sectionNumber, setSectionNumber] = useState(0);
  const [sectionTitle, setSectionTitle] = useState("");
  const [sectionDesc, setSectionDesc] = useState("");
  const [loading, setLoading] = useState(true);

  /* =========================
     FETCH SECTION
     ========================= */
  useEffect(() => {
    const loadSection = async () => {
      try {
        const res = await getSectionById(sectionId);
        const data = res.data;

        setSectionNumber(data.sectionNumber);
        setSectionTitle(data.sectionName);
        setSectionDesc(data.sectionDesc);
      } catch (error) {
        console.log(error)
        toast.error("Failed to load section");
      } finally {
        setLoading(false);
      }
    };

    loadSection();
  }, [sectionId]);

  /* =========================
     UPDATE SECTION
     ========================= */
  async function onSectionUpdate() {
    const payload = {
      sectionNumber,
      sectionTitle: sectionTitle,
      sectionDesc,
    };

    try {
      const response = await updateSection(sectionId, payload);

      if (response.status === 200) {
        toast.success("Section Updated Successfully");
        navigate(-1);
      }
    } catch (error) {
      console.error(error);
      toast.error("Failed to Update Section");
    }
  }

  if (loading) return <p className="text-center">Loading...</p>;

  /* =========================
     UI
     ========================= */
  return (
    <div className="add-section-container">
      <h1 className="section-heading">
        Edit Section for {courseName} Course
      </h1>

      <div className="form-group">
        <label htmlFor="sectionNumber">Enter Section Number</label>
        <input
          type="number"
          className="form-control"
          id="sectionNumber"
          value={sectionNumber}
          onChange={(e) => setSectionNumber(e.target.value)}
        />
      </div>

      <div className="form-group">
        <label htmlFor="sectionTitle">Enter Section Title</label>
        <input
          type="text"
          className="form-control"
          id="sectionTitle"
          value={sectionTitle}
          onChange={(e) => setSectionTitle(e.target.value)}
        />
      </div>

      <div className="form-group">
        <label htmlFor="sectionDesc">Enter Section Description</label>
        <textarea
          className="form-control text-area"
          id="sectionDesc"
          rows={3}
          value={sectionDesc}
          onChange={(e) => setSectionDesc(e.target.value)}
        />
      </div>

      <div>
        <button
          type="button"
          className="btn btn-primary"
          onClick={onSectionUpdate}
        >
          Update Section
        </button>
      </div>
    </div>
  );
}

export default EditSection;

