import { useState, useEffect, useRef } from "react";
import "./InstructorSearchSelect.css";

export default function InstructorSearchSelect({
  instructors,
  selectedInstructor,
  onChange,
}) {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");

  const dropdownRef = useRef(null);

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Filter instructors (search on name + email)
  const filtered = instructors.filter(
    (i) =>
      i.name.toLowerCase().includes(query.toLowerCase()) ||
      i.email.toLowerCase().includes(query.toLowerCase())
  );

  const selected = instructors.find((i) => i.id === selectedInstructor);

  return (
    <div className="instructor-select-wrapper" ref={dropdownRef}>
      {/* Search input */}
      <div className="select-input" onClick={() => setOpen(!open)}>
        {selected ? (
          <div className="selected-item">
            <div className="info">
              <div className="name">{selected.name}</div>
              <div className="email">{selected.email}</div>
            </div>
          </div>
        ) : (
          <span className="placeholder">Select an Instructor...</span>
        )}
      </div>

      {open && (
        <div className="dropdown-panel">
          <input
            className="search-input"
            placeholder="Search by name or email..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            autoFocus
          />

          <div className="dropdown-list">
            {filtered.length === 0 && (
              <div className="no-results">No instructors found</div>
            )}

            {filtered.map((i) => (
              <div
                key={i.id}
                className="dropdown-item p-1"
                onClick={() => {
                  onChange(i.id);
                  setOpen(false);
                  setQuery("");
                }}
              >
                <img src={i.profile_pic} alt="pic" className="avatar" />

                <div className="info">
                  <div className="name">{i.name}</div>
                  <div className="email">{i.email}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
