import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Loader from "@/components/shared/Loader";
import { getTopicById, updateTopic } from "../../../services/Instructor/topic";

function UpdateTopic() {
  const { topicId } = useParams();
  const navigate = useNavigate();

  const [loading, setLoading] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [sectionInfo, setSectionInfo] = useState(null);

  const [topicNumber, setTopicNumber] = useState("");
  const [topicName, setTopicName] = useState("");
  const [topicDesc, setTopicDesc] = useState("");
  const [hour, setHour] = useState("");
  const [min, setMin] = useState("");
  const [video, setVideo] = useState(null);
 

  /* -----------------------------------------
     Fetch topic details (SAFE ON REFRESH)
  ------------------------------------------*/
  useEffect(() => {
    fetchTopic();
  }, []);

  const fetchTopic = async () => {
    try {
      const res = await getTopicById(topicId);
      const topic = res.data;

      setTopicNumber(topic.topicNumber);
      setTopicName(topic.title);
      setTopicDesc(topic.description);
      setHour(topic.hour);
      setMin(topic.min);
      setSectionInfo(topic.section);

    } catch (error) {
        console.log(error)
      toast.error("Unable to load topic details");
    } finally {
      setLoading(false);
    }
  };

  /* -----------------------------------------
     Update Topic
  ------------------------------------------*/
  const handleUpdateTopic = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData();
    formData.append("topicId", topicId);
    formData.append("topicNumber", topicNumber);
    formData.append("topicName", topicName);
    formData.append("topicDesc", topicDesc);
    formData.append("hour", hour);
    formData.append("min", min);

    if (video) {
      formData.append("video", video);
    }

    try {
      await updateTopic(formData);
      toast.success("Topic updated successfully");
      navigate(-1); // go back
    } catch (error) {
        console.log(error)
      toast.error("Failed to update topic");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (loading) return <Loader text="Loading topic..." />;

  /* -----------------------------------------
     UI
  ------------------------------------------*/
  return (
    <div className="container mt-4">
      <div className="card shadow">
        <div className="card-header bg-warning text-dark">
          <h4 className="mb-0">Update Topic</h4>
        </div>

        <div className="card-body">
          {sectionInfo && (
            <h6 className="mb-3 text-muted">
              Section {sectionInfo.sectionNumber} - {sectionInfo.sectionTitle}
            </h6>
          )}

          <form onSubmit={handleUpdateTopic}>

            <input
              type="number"
              className="form-control mb-3"
              placeholder="Topic Number"
              value={topicNumber}
              onChange={(e) => setTopicNumber(e.target.value)}
              required
            />

            <input
              type="text"
              className="form-control mb-3"
              placeholder="Topic Name"
              value={topicName}
              onChange={(e) => setTopicName(e.target.value)}
              required
            />

            <textarea
              className="form-control mb-3"
              placeholder="Topic Description"
              value={topicDesc}
              onChange={(e) => setTopicDesc(e.target.value)}
              rows="4"
              required
            />

            <input
              type="file"
              className="form-control mb-3"
              accept="video/*"
              onChange={(e) => setVideo(e.target.files[0])}
            />

            <div className="input-group mb-4">
              <input
                type="number"
                className="form-control"
                placeholder="Hours"
                value={hour}
                onChange={(e) => setHour(e.target.value)}
              />
              <span className="input-group-text">:</span>
              <input
                type="number"
                className="form-control"
                placeholder="Minutes"
                value={min}
                onChange={(e) => setMin(e.target.value)}
              />
            </div>

            {isSubmitting && <Loader text="Updating topic..." />}

            <div className="d-flex gap-3">
              <button
                type="submit"
                className="btn btn-warning"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Updating..." : "Update Topic"}
              </button>

              <button
                type="button"
                className="btn btn-secondary"
                onClick={() => navigate(-1)}
              >
                Cancel
              </button>
            </div>

          </form>
        </div>
      </div>
    </div>
  );
}

export default UpdateTopic;
