import { updateSkill } from "@/services/Student/profileService";
import React, { useState, useEffect } from "react";
import { FaPencilAlt } from "react-icons/fa";
import { toast } from "react-toastify";

/**
 * SkillsCard Component
 *
 * Props:
 * - skills      → List of skills currently assigned to the user
 * - allSkills   → Master list of all available skills
 * - onSave      → Callback function to save selected skills
 * - page        → Determines view-only or editable mode
 * - role        → Used to change heading text
 */
const SkillsCard = ({ skills, allSkills, onSave, page, role }) => {
    // Controls whether the card is in edit mode or view mode
    const [editMode, setEditMode] = useState(false);

    // Stores the currently selected skills (used in edit mode)
    const [selectedSkills, setSelectedSkills] = useState([]);

    /**
     * Sync local state with incoming skills
     * Ensures checkboxes are correctly pre-selected
     * when the skills prop changes
     */
    useEffect(() => {
        setSelectedSkills(skills);
    }, [skills]);
    /**
     * Adds or removes a skill from selectedSkills
     * - If skill already exists → remove it
     * - If skill does not exist → add it
     */
    const toggleSkill = (skill) => {
        const exists = selectedSkills.some((s) => s.id === skill.id);

        if (exists) {
            // Remove skill
            setSelectedSkills(selectedSkills.filter((s) => s.id !== skill.id));
        } else {
            // Add skill
            setSelectedSkills([...selectedSkills, skill]);
        }
    };
    const upgradeSkill = async (data) => {
        try {
            const response = await updateSkill(data);
            if (response.data.success) {
                toast.success(response.data.message)
                onSave(selectedSkills);
            } else {
                toast.error(response.data.message);
            }
        } catch (error) {
            toast.error(error.message);
        }
    };
    /**
     * Saves selected skills and exits edit mode
     */
    const handleSave = () => {
        
        upgradeSkill(selectedSkills);
        setEditMode(false);
    };

    return (
        <div className="card p-4 shadow-sm border-0 rounded-4 mb-4 position-relative">
            {/* Edit icon (hidden in view-only mode) */}
            {page !== "viewOnly" && (
                <div
                    className="edit-skill-icon"
                    onClick={() => setEditMode(!editMode)}>
                    <FaPencilAlt size={16} />
                </div>
            )}

            {/* Card title changes based on role */}
            <h5 className="fw-bold text-primary mb-3">
                {role === "student" ? "Skills" : "Specialization"}
            </h5>

            {/* ---------------- VIEW MODE ---------------- */}
            {!editMode && (
                <div className="d-flex flex-wrap gap-2">
                    {skills.map((skill) => (
                        <span
                            key={skill.id}
                            className="skill-badge px-3 py-2">
                            {skill.title}
                        </span>
                    ))}
                </div>
            )}

            {/* ---------------- EDIT MODE ---------------- */}
            {editMode && (
                <div className="mt-3">
                    {/* Checkbox list of all skills */}
                    <div className="d-flex flex-wrap gap-3">
                        {allSkills.map((skill) => (
                            <div
                                key={skill.id}
                                className="form-check">
                                <input
                                    className="form-check-input"
                                    type="checkbox"
                                    // Checkbox is checked if skill exists in selectedSkills
                                    checked={selectedSkills.some(
                                        (s) => s.id === skill.id,
                                    )}
                                    // Toggle skill on check/uncheck
                                    onChange={() => toggleSkill(skill)}
                                    id={skill.id}
                                />

                                <label
                                    className="form-check-label"
                                    htmlFor={skill.id}>
                                    {skill.title}
                                </label>
                            </div>
                        ))}
                    </div>

                    {/* Action buttons */}
                    <div className="text-end mt-3">
                        <button
                            className="btn btn-secondary me-2"
                            // Revert changes and exit edit mode
                            onClick={() => {
                                setSelectedSkills(skills);
                                setEditMode(false);
                            }}>
                            Cancel
                        </button>

                        <button
                            className="btn btn-primary"
                            // Save updated skills
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
