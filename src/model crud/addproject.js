import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import styles from './styles.module.css';
import { getUsername } from '../middeleware/auth'; // Import getUsername function from middleware

const Addproject = () => {
    const [projectName, setProjectName] = useState('');
    const [projectDesc, setProjectDesc] = useState('');
    const [projectImg, setProjectImg] = useState('');

    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();
        const username = getUsername(); // Get username from middleware

        try {
            const response = await axios.post('http://localhost:5000/project/addproject', {
                projectName,
                projectDesc,
                projectImg,
                username
            });
            const savedProject = response.data;
            console.log('Project uploaded successfully:', savedProject);
            // Redirect to profile page or any other page after successful upload
            navigate('/');
        } catch (error) {
            console.error('Error uploading project:', error);
            // Handle error (e.g., display error message to user)
        }
    };

    return (
        <div className={styles.signup_container}>
            <div className={styles.signup_form_container}>
                <div className={styles.right}>
                    <form className={styles.form_container} onSubmit={handleSubmit}>
                        <h1>Create Project</h1>
                        <input
                            type="text"
                            placeholder="Title"
                            name="title"
                            onChange={(e) => setProjectName(e.target.value)}
                            value={projectName}
                            required
                            className={styles.input}
                        />
                        <input
                            type="text"
                            placeholder="Project Description"
                            name="projectDesc"
                            onChange={(e) => setProjectDesc(e.target.value)}
                            value={projectDesc}
                            required
                            className={styles.input}
                        />
                        <input
                            type="file"
                            placeholder="Image URL"
                            name="projectImg"
                            onChange={(e) => setProjectImg(e.target.value)}
                            value={projectImg}
                            required
                            className={styles.input}
                        />
                        <button type="submit" className={styles.green_btn}>
                            Upload
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Addproject;
