// import React, { useState, useEffect } from 'react'
// import axios from "axios";
// import { Link, useNavigate } from "react-router-dom";
// import styles from "./styles.module.css";

// const Signup = () => {
	
// 	const [users, setUsers] = useState([])
//     const [email, setEmail] = useState('')
//     const [username, setUsername] = useState('')
//     const [password, setPassword] = useState('')
//     const [bio, setbio] = useState('')
//     const [country, setcountry] = useState('')
//     const [workPlace, setworkPlace] = useState('')
//     const [profilePic, setprofilePic] = useState('')

//     const navigate = useNavigate();


//     useEffect(() => {
//         fetchUsers();
//     }, [])

//     const fetchUsers = () => {
//         axios
//         .get('http://localhost:5000/register')
//         .then((res) => {
//             // console.log(res.data)
//         })
//     }


//     const handleSubmit = (event) => {
//         event.preventDefault();
//         axios
//         .post('http://localhost:5000/user/signup', { email, username, password, bio, country, workPlace, profilePic  })
//         .then(() => {
//             alert('Registration Successful')
//             setEmail('')
//             setUsername('')
//             setPassword('')
// 			setbio('')
// 			setcountry('')
// 			setworkPlace('')
// 			setprofilePic('')
//             fetchUsers();
//             navigate('/login')
//         })
//         .catch((error) => {
//             console.log('Unable to register user')
//         })

//     }

// 	return (
// 		<div className={styles.signup_container}>
// 			<div className={styles.signup_form_container}>
// 				<div className={styles.left}>
// 					<h1>Welcome Back</h1>
// 					<Link to="/login">
// 						<button type="button" className={styles.white_btn}>
// 							Sing in
// 						</button>
// 					</Link>
// 				</div>
// 				<div className={styles.right}>
// 					<form className={styles.form_container} onSubmit={handleSubmit}>
// 						<h1>Create Account</h1>
// 						<input
// 							type="email"
// 							placeholder="email"
// 							name="email"
// 							onChange={(e) => setEmail(e.target.value)}
// 							value={email}
// 							required
// 							className={styles.input}
// 						/>
// 						<input
// 							type="text"
// 							placeholder="username"
// 							name="username"
// 							onChange={(e) => setUsername(e.target.value)}
// 							value={username}
// 							required
// 							className={styles.input}
// 						/>
// 						<input
// 							type="password"
// 							placeholder="Password"
// 							name="password"
// 							onChange={(e) => setPassword(e.target.value)}
// 							value={password}
// 							required
// 							className={styles.input}
// 						/>
// 						<input
// 							type="text"
// 							placeholder="bio"
// 							name="bio"
// 							onChange={(e) => setbio(e.target.value)}
// 							value={bio}
// 							required
// 							className={styles.input}
// 						/>
// 						<input
// 							type="text"
// 							placeholder="country"
// 							name="country"
// 							onChange={(e) => setcountry(e.target.value)}
// 							value={country}
// 							required
// 							className={styles.input}
// 						/>
// 						<input
// 							type="text"
// 							placeholder="workPlace"
// 							name="workPlace"
// 							onChange={(e) => setworkPlace(e.target.value)}
// 							value={workPlace}
// 							required
// 							className={styles.input}
// 						/>
// 						<input
// 							type="file"
// 							placeholder="profilePic"
// 							name="profilePic"
// 							onChange={(e) => setprofilePic(e.target.value)}
// 							value={profilePic}
// 							required
// 							className={styles.input}
// 						/>
// 						{/* {error && <div className={styles.error_msg}>{error}</div>} */}
// 						<button type="submit" className={styles.green_btn}>
// 							Sing Up
// 						</button>
// 					</form>
// 				</div>
// 			</div>
// 		</div>
// 	);
// };

// export default Signup;
import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import styles from './styles.module.css';

const Signup = () => {
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [bio, setBio] = useState('');
    const [country, setCountry] = useState('');
    const [workPlace, setWorkPlace] = useState('');
    const [profilePic, setProfilePic] = useState(null); // Store file object

    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const formData = new FormData();
            formData.append('email', email);
            formData.append('username', username);
            formData.append('password', password);
            formData.append('bio', bio);
            formData.append('country', country);
            formData.append('workPlace', workPlace);
            formData.append('profilePic', profilePic); // Append file object

            await axios.post('http://localhost:5000/user/signup', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data', // Set content type for file upload
                },
            });

            alert('Registration Successful');
            setEmail('');
            setUsername('');
            setPassword('');
            setBio('');
            setCountry('');
            setWorkPlace('');
            setProfilePic(null); // Reset file input

            navigate('/login');
        } catch (error) {
            console.error('Unable to register user:', error);
        }
    };

    const handleFileChange = (event) => {
        const file = event.target.files[0]; // Get the first file from the input
        setProfilePic(file); // Set the file object
    };

    return (
        <div className={styles.signup_container}>
            <div className={styles.signup_form_container}>
                <div className={styles.left}>
                    <h1>Welcome Back</h1>
                    <Link to="/login">
                        <button type="button" className={styles.white_btn}>
                            Sign in
                        </button>
                    </Link>
                </div>
                <div className={styles.right}>
                    <form className={styles.form_container} onSubmit={handleSubmit}>
                        <h1>Create Account</h1>
                        <input
                            type="email"
                            placeholder="email"
                            name="email"
                            onChange={(e) => setEmail(e.target.value)}
                            value={email}
                            required
                            className={styles.input}
                        />
                        <input
                            type="text"
                            placeholder="username"
                            name="username"
                            onChange={(e) => setUsername(e.target.value)}
                            value={username}
                            required
                            className={styles.input}
                        />
                        <input
                            type="password"
                            placeholder="Password"
                            name="password"
                            onChange={(e) => setPassword(e.target.value)}
                            value={password}
                            required
                            className={styles.input}
                        />
                        <input
                            type="text"
                            placeholder="bio"
                            name="bio"
                            onChange={(e) => setBio(e.target.value)}
                            value={bio}
                            required
                            className={styles.input}
                        />
                        <input
                            type="text"
                            placeholder="country"
                            name="country"
                            onChange={(e) => setCountry(e.target.value)}
                            value={country}
                            required
                            className={styles.input}
                        />
                        <input
                            type="text"
                            placeholder="workPlace"
                            name="workPlace"
                            onChange={(e) => setWorkPlace(e.target.value)}
                            value={workPlace}
                            required
                            className={styles.input}
                        />
                        <input
                            type="file"
                            name="profilePic"
                            onChange={handleFileChange} // Handle file input change
                            required
                            className={styles.input}
                        />
                        <button type="submit" className={styles.green_btn}>
                            Sign Up
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Signup;
