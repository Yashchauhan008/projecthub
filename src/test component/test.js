// import React, { useState } from 'react';

// const FileUploadForm = () => {
//   const [file, setFile] = useState(null);

//   const handleFileChange = (e) => {
//     setFile(e.target.files[0]);
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const formData = new FormData();
//     formData.append('file', file);

//     try {
//       const response = await fetch('http://localhost:5000/upload', {
//         method: 'POST',
//         body: formData
//       });
//       if (response.ok) {
//         console.log('File uploaded successfully');
//       } else {
//         console.error('Failed to upload file');
//       }
//     } catch (error) {
//       console.error('Error uploading file:', error);
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <input type="file" onChange={handleFileChange} />
//       <button type="submit">Upload</button>
//     </form>
//   );
// };

// export default FileUploadForm;
// Signup.js------------------------------------------------------------
// import React, { useState } from 'react';
// import axios from 'axios';

// function Test1() {
//   const [formData, setFormData] = useState({
//     email: '',
//     username: '',
//     password: '',
//     profilePic: null, // Add profilePic field to hold the selected image file
//   });

//   const handleChange = (e) => {
//     if (e.target.name === 'profilePic') {
//       setFormData({ ...formData, profilePic: e.target.files[0] });
//     } else {
//       setFormData({ ...formData, [e.target.name]: e.target.value });
//     }
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const formDataToSend = new FormData();
//       formDataToSend.append('email', formData.email);
//       formDataToSend.append('username', formData.username);
//       formDataToSend.append('password', formData.password);
//       formDataToSend.append('profilePic', formData.profilePic); // Append the image file to the form data

//       const res = await axios.post('http://localhost:5000/user/signup', formDataToSend, {
//         headers: {
//           'Content-Type': 'multipart/form-data', // Set content type to multipart/form-data for file upload
//         },
//       });
//       console.log(res.data);
//       // Redirect or show success message
//     } catch (error) {
//       console.error('Error:', error.response.data);
//       // Show error message
//     }
//   };

//   return (
//     <div>
//       <h2>Signup</h2>
//       <form onSubmit={handleSubmit}>
//         <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email" />
//         <input type="text" name="username" value={formData.username} onChange={handleChange} placeholder="Username" />
//         <input type="password" name="password" value={formData.password} onChange={handleChange} placeholder="Password" />
//         {/* Add input field for image upload */}
//         <input type="file" name="profilePic" onChange={handleChange} />
//         <button type="submit">Signup</button>
//       </form>
//     </div>
//   );
// }

// export default Test1;
// UserDetails.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function UserDetails() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUserDetails = async () => {
      try {
        const userId = window.location.pathname.split('/').pop();
        console.log('User ID:', userId); // Check if user ID is extracted correctly
        const res = await axios.get(`http://localhost:5000/user/${userId}`);
        console.log('Response:', res.data); // Check the response data from the backend
        setUser(res.data);
      } catch (error) {
        console.error('Error fetching user details:', error);
      }
    };
  
    fetchUserDetails();
  }, []);
  

  return (
    <div>
      <h2>User Details</h2>
      {user ? (
        <div>
          <p>ID: {user._id}</p>
          <p>Email: {user.email}</p>
          <p>Username: {user.username}</p>
          {user.profilePic && ( // Check if profilePic exists
            <div>
              <p>Profile Picture:</p>
              <img src={`http://localhost:5000/${user.profilePic}`} alt="Profile" style={{ maxWidth: '200px' }} />
            </div>
          )}
          {/* Display other user details */}
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default UserDetails;
