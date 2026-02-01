import { useState, useEffect, useRef } from "react";
import "./CourseFilterBar.css";

export default function CourseFilterBar({
  courses,
  selectedCourse,
  onSelect,
}) {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const dropdownRef = useRef(null);

  // Close on outside click
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () =>
      document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Filter courses by title
  const filtered = courses.filter((c) =>
    c.title.toLowerCase().includes(query.toLowerCase())
  );

  const selected = courses.find((c) => c.id === selectedCourse);

  return (
    <div className="course-select-wrapper" ref={dropdownRef}>
      {/* Selected input */}
      <div className="select-input" onClick={() => setOpen(!open)}>
        {selected ? (
          <div className="selected-item">
            <img
              src={selected.thumbnail}
              alt="thumb"
              className="avatar"
            />
            <div className="info">
              <div className="name">{selected.title}</div>
              <div className="meta">
                {selected.duration} days • ₹{selected.fees}
              </div>
            </div>
          </div>
        ) : (
          <span className="placeholder">Select a course...</span>
        )}
      </div>

      {open && (
        <div className="dropdown-panel">
          <input
            className="search-input"
            placeholder="Search course by title..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            autoFocus
          />

          <div className="dropdown-list">
            {filtered.length === 0 && (
              <div className="no-results">No courses found</div>
            )}

            {filtered.map((c) => (
              <div
                key={c.id}
                className="dropdown-item"
                onClick={() => {
                  onSelect(c.id);
                  setOpen(false);
                  setQuery("");
                }}
              >
                <img
                  src={c.thumbnail}
                  alt="thumb"
                  className="avatar"
                />

                <div className="info">
                  <div className="name">{c.title}</div>
                  <div className="meta">
                    {c.duration} days • ₹{c.fees}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
