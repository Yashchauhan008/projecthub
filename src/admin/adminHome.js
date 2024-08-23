import React, { useEffect, useState } from "react";
import Searchbar from "../searchbar/searchbar";
import "./admin.css";
import proj1 from "../assets/proj1.jpg";
import avatar from "../assets/avtr.jpg";
import EditProjectForm from '../model crud/editproject';
import EditUserForm from '../model crud/edituser'; // Import the EditUserForm component

const AdminHome = () => {
  const [isChecked, setIsChecked] = useState(false);
  const [users, setUsers] = useState([]);
  const [projects, setProjects] = useState([]);
  const [editingProject, setEditingProject] = useState(null);
  const [editingUser, setEditingUser] = useState(null); // State for editing user

  const handleCheckboxToggle = () => {
    setIsChecked(!isChecked);
  };

  const fetchUsers = async () => {
    try {
      const response = await fetch("http://localhost:5000/user");
      if (!response.ok) {
        throw new Error("Failed to fetch users in admin");
      }
      const users = await response.json();
      setUsers(users);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchProjects = async () => {
    try {
      const response = await fetch("http://localhost:5000/project");
      if (!response.ok) {
        throw new Error("Failed to fetch users in admin");
      }
      const projects = await response.json();
      setProjects(projects);
      console.log(projects);
    } catch (error) {
      console.log(error);
    }
  };

  const deleteProject = async (projectId) => {
    try {
      const response = await fetch(`http://localhost:5000/project/deleteproject/${projectId}`, {
        method: "DELETE",
      });
      if (!response.ok) {
        throw new Error("Failed to delete project");
      }
      const updatedProjects = projects.filter((project) => project._id !== projectId);
      setProjects(updatedProjects);
    } catch (error) {
      console.log(error);
    }
  };

  const deleteUser = async (userId) => {
    try {
      const response = await fetch(`http://localhost:5000/user/${userId}`, {
        method: "DELETE",
      });
      if (!response.ok) {
        throw new Error("Failed to delete user");
      }
      const updatedUsers = users.filter((user) => user._id !== userId);
      setUsers(updatedUsers);
    } catch (error) {
      console.log(error);
    }
  };

  const handleEditProject = (project) => {
    setEditingProject(project);
  };

  const handleCancelEditProject = () => {
    setEditingProject(null);
  };

  const handleUpdateProject = (updatedProject) => {
    setEditingProject(null);
    const updatedProjects = projects.map((project) =>
      project._id === updatedProject._id ? updatedProject : project
    );
    setProjects(updatedProjects);
  };

  const handleEditUser = (user) => {
    setEditingUser(user);
  };

  const handleCancelEditUser = () => {
    setEditingUser(null);
  };

  const handleUpdateUser = (updatedUser) => {
    setEditingUser(null);
    setUsers(prevUsers => prevUsers.map(user =>
      user._id === updatedUser._id ? updatedUser : user
    ));
  };
  
  

  useEffect(() => {
    fetchUsers();
    fetchProjects();
  }, []);

  return (
    <>
      <div className="admin">
        <div className="search">
          <Searchbar />
        </div>
        <input
          id="checkbox_toggle"
          type="checkbox"
          className="check"
          checked={isChecked}
          onChange={handleCheckboxToggle}
        />
        <div className="checkbox">
          <label className="slide" htmlFor="checkbox_toggle">
            <label className="toggle" htmlFor="checkbox_toggle"></label>
            <label className="text" htmlFor="checkbox_toggle">
              users
            </label>
            <label className="text" htmlFor="checkbox_toggle">
              projects
            </label>
          </label>
        </div>
        <div className="crudcnt">
          {isChecked ? (
            <div className="projcrud">
              <h2>Projects</h2>
              {editingProject ? (
                <EditProjectForm
                  project={editingProject}
                  onUpdate={handleUpdateProject}
                  onCancel={handleCancelEditProject}
                />
              ) : (
                <div className="crudlists">
                  {projects.map((project, index) => (
                    <div key={index} className="projcard">
                      <img src={project.profilePic} alt="project pic" />
                      <div className="projdet">
                        <h3>{project.projectName}</h3>
                        <h4>{project.projectDesc}</h4>
                      </div>
                      <div className="crudbtns">
                        <button
                          type="button"
                          className="cbtn"
                          onClick={() => handleEditProject(project)}
                        >
                          Edit
                        </button>
                        <button
                          type="button"
                          className="cbtn"
                          onClick={() => deleteProject(project._id)}
                        >
                          Delete
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ) : (
            <div className="usercrud">
              <h2>Users</h2>
              {editingUser ? (
                <EditUserForm
                  user={editingUser}
                  onUpdate={handleUpdateUser}
                  onCancel={handleCancelEditUser}
                />
              ) : (
                <div className="crudlists">
                  {users.map((user, index) => (
                    <div key={index} className="projcard">
                      <img src={user.profilePic} alt="profile pic" />
                      <div className="projdet">
                        <h3>{user.username}</h3>
                        <h4>{user.bio}</h4>
                      </div>
                      <div className="crudbtns">
                        <button
                          type="button"
                          className="cbtn"
                          onClick={() => handleEditUser(user)}
                        >
                          Edit
                        </button>
                        <button
                          type="button"
                          className="cbtn"
                          onClick={() => deleteUser(user._id)}
                        >
                          Delete
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default AdminHome;