import React, { useState } from "react";
import "./crud.css";

const EditProjectForm = ({ project, onUpdate, onCancel }) => {
  const [projectName, setProjectName] = useState(project.projectName);
  const [projectDesc, setProjectDesc] = useState(project.projectDesc);
  const [projectImg, setProjectImg] = useState(project.profilePic);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        `http://localhost:5000/project/updateproject/${project._id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ projectName, projectDesc, projectImg }),
        }
      );

      if (response.ok) {
        const updatedProject = await response.json();
        onUpdate(updatedProject); // Call the onUpdate callback with the updated project
      } else {
        console.error("Failed to update project");
      }
    } catch (error) {
      console.error("Error updating project:", error);
    }
  };

  const handleCancel = () => {
    onCancel(); // Call the onCancel callback
  };

  return (
    <div className="editcnt">
      <h2>Edit Project</h2>

      <form onSubmit={handleSubmit} className="editform">
        <input
          type="text"
          placeholder="Project Name"
          value={projectName}
          className="input1"
          onChange={(e) => setProjectName(e.target.value)}
        />
        <textarea
          placeholder="Project Description"
          value={projectDesc}
          className="input1"
          onChange={(e) => setProjectDesc(e.target.value)}
        />
        <input
          className="input1"
          type="text"
          placeholder="Project Image URL"
          value={projectImg}
          onChange={(e) => setProjectImg(e.target.value)}
        />
        <div>
          <button type="submit" className="cbtn" placeholder="Update Project">
            Update
          </button>
          <br/>
          <button type="button" className="cbtn" onClick={handleCancel}>
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditProjectForm;
