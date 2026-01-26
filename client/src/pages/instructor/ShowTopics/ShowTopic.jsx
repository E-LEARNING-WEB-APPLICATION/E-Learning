import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { toast } from "react-toastify";
import "./ShowTopics.css";
import { fetchTopicsBySection } from "@/services/Instructor/topicService";

function ShowTopics() {
  const { state } = useLocation();
  const { sectionId } = state;

  const [topics, setTopics] = useState([]);
  const [loading, setLoading] = useState(false);

  /* =========================
     FETCH TOPICS
     ========================= */
  useEffect(() => {
    if (!sectionId) return;

    const loadTopics = async () => {
      setLoading(true);

      const res = await fetchTopicsBySection(sectionId);
      console.log("topics: ");
      console.log(res);
      /*
        Expected response:
        {
          success: boolean,
          data: Topic[]
        }
      */
      if (res.success) {
        setTopics(res.data || []);
      } else {
        toast.error(res.message || "Failed to load topics");
      }

      setLoading(false);
    };

    loadTopics();
  }, [sectionId]);

  return (
    <div className="show-topics-container">
      <h1 className="page-title">Topics</h1>

      {loading && <p className="text-center">Loading topics...</p>}

      {!loading && topics.length === 0 && (
        <p className="text-center text-muted">
          No topics added for this section yet.
        </p>
      )}

      <div className="topics-list">
        {topics.map((topic) => (
          <div className="topic-card" key={topic.topicId}>
            <div className="topic-video-wrapper">
              <video className="topic-video" src={topic.videoUrl} controls />
            </div>

            <div className="topic-content">
              <h5 className="topic-title">{topic.title}</h5>

              <p className="topic-description">
                {topic.description || "No description provided"}
              </p>

              {(topic.hour || topic.min) && (
                <p className="topic-duration">
                  Duration: {topic.hour ?? 0}h {topic.min ?? 0}m
                </p>
              )}

              <button className="btn btn-outline-secondary btn-sm" disabled>
                Update Topic
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ShowTopics;
