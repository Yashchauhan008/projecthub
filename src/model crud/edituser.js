import React, { useState } from "react";
import "./crud.css";

const EditUserForm = ({ user, onUpdate, onCancel }) => {
  const [username, setUsername] = useState(user.username);
  const [bio, setBio] = useState(user.bio);
  const [country, setCountry] = useState(user.country);
  const [workPlace, setWorkPlace] = useState(user.workPlace);
  const [profilePic, setProfilePic] = useState(user.profilePic);
  const [email, setEmail] = useState(user.email);
  const [profilePicFile, setProfilePicFile] = useState(null); // Store file object

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append("username", username);
      formData.append("bio", bio);
      formData.append("country", country);
      formData.append("workPlace", workPlace);
      formData.append("email", email);
      formData.append("profilePic", profilePicFile); // Append file object

      const response = await fetch(`http://localhost:5000/user/update/${user._id}`, {
        method: "PUT",
        body: formData,
      });

      if (!response.ok) {
        throw new Error("Failed to update user");
      }

      const updatedUser = await response.json();
      console.log("User updated successfully:", updatedUser);
      onUpdate(updatedUser); // Update the user data in the parent component's state
    } catch (error) {
      console.error("Error updating user:", error);
      // Handle error (e.g., display an error message to the user)
    }
  };

  const handleCancel = () => {
    onCancel(); // Call the onCancel callback
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0]; // Get the first file from the input
    setProfilePicFile(file); // Set the file object
  };

  return (
    <div className="editcnt">
      <h2>Edit User</h2>
      <form onSubmit={handleSubmit} className="editform">
        <input
          type="text"
          placeholder="Username"
          value={username}
          className="input1"
          onChange={(e) => setUsername(e.target.value)}
        />
        <textarea
          placeholder="Bio"
          value={bio}
          className="input1"
          onChange={(e) => setBio(e.target.value)}
        />
        <input
          type="text"
          placeholder="Country"
          value={country}
          className="input1"
          onChange={(e) => setCountry(e.target.value)}
        />
        <input
          type="text"
          placeholder="Workplace"
          value={workPlace}
          className="input1"
          onChange={(e) => setWorkPlace(e.target.value)}
        />
        <input
          type="file"
          accept="image/*"
          onChange={handleFileChange} // Handle file input change
          className="input1"
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          className="input1"
          onChange={(e) => setEmail(e.target.value)}
        />
        <div>
          <button type="submit" className="cbtn">
            Update
          </button>
          <br />
          <button type="button" className="cbtn" onClick={handleCancel}>
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditUserForm;
