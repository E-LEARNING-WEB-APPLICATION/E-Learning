import React, { useState } from "react";
import { FaPencilAlt } from "react-icons/fa";

const SkillsCard = ({ skills, allSkills, onSave }) => {
    const [editMode, setEditMode] = useState(false);
    const [selectedSkills, setSelectedSkills] = useState(skills);

    const toggleSkill = (skill) => {
        if (selectedSkills.includes(skill)) {
            setSelectedSkills(selectedSkills.filter((s) => s !== skill));
        } else {
            setSelectedSkills([...selectedSkills, skill]);
        }
    };

    const handleSave = () => {
        onSave(selectedSkills);
        setEditMode(false);
    };

    return (
        <div className="card p-4 shadow-sm border-0 rounded-4 mb-4 position-relative">
            {/* Pencil Icon */}
            <div
                className="edit-skill-icon"
                onClick={() => setEditMode(!editMode)}>
                <FaPencilAlt size={16} />
            </div>

            <h5 className="fw-bold text-primary mb-3">Skills</h5>

            {/* NORMAL VIEW */}
            {!editMode && (
                <div className="d-flex flex-wrap gap-2">
                    {skills.map((skill, i) => (
                        <span
                            key={i}
                            className="badge skill-badge px-3 py-2">
                            {skill}
                        </span>
                    ))}
                </div>
            )}

            {/* EDIT MODE VIEW */}
            {editMode && (
                <div className="mt-3">
                    <div className="d-flex flex-wrap gap-3">
                        {allSkills.map((skill, i) => (
                            <div
                                key={i}
                                className="form-check">
                                <input
                                    className="form-check-input"
                                    type="checkbox"
                                    checked={selectedSkills.includes(skill)}
                                    onChange={() => toggleSkill(skill)}
                                    id={skill}
                                />
                                <label
                                    className="form-check-label"
                                    htmlFor={skill}>
                                    {skill}
                                </label>
                            </div>
                        ))}
                    </div>

                    <div className="text-end mt-3">
                        <button
                            className="btn btn-secondary me-2"
                            onClick={() => {
                                setSelectedSkills(skills);
                                setEditMode(false);
                            }}>
                            Cancel
                        </button>

                        <button
                            className="btn btn-primary"
                            onClick={handleSave}>
                            Save
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default SkillsCard;
