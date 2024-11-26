import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function SignUp() {
  const navigate = useNavigate();

  const [fullName, setFullName] = useState("");
  const [age, setAge] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [gender, setGender] = useState("");
  const [email, setEmail] = useState("");
  const [pwd, setPwd] = useState("");
  const [confPwd, setConfPwd] = useState("");
  const [error, setError] = useState("");

  const Register = async () => {
    if (!fullName || !age || !phoneNumber || !gender || !email || !pwd || !confPwd) {
      setError("All fields are required");
      return;
    }

    if (phoneNumber.length !== 11) {
      setError("Phone number must be exactly 11 digits.");
      return;
    }

    if (pwd !== confPwd) {
      setError("Passwords do not match.");
      return;
    }

    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if (!passwordRegex.test(pwd)) {
      setError("Password must be at least 8 characters long and contain at least one number, one uppercase letter, one lowercase letter, and one special character.");
      return;
    }

    const user = {
      fullName,
      age,
      phoneNumber,
      gender,
      email,
      pwd
    };

    try {
      const url = "http://localhost:3000/reg";
      const res = await axios.post(url, user);

      if (res.status === 200) {
        alert("User Registration Successful");
        console.log(res.data);
        setFullName("");
        setAge("");
        setPhoneNumber("");
        setGender("");
        setEmail("");
        setPwd("");
        setConfPwd("");
        navigate("/");
      } else {
        alert("User already registered");
      }
    } catch (err) {
      console.error(err);
      setError("Error registering user. Please try again.");
    }
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6 col-lg-4">
          <div className="card shadow-lg p-4">
            <h2 className="text-center mb-4">Sign Up</h2>

            {/* Error Message */}
            {error && <div className="alert alert-danger">{error}</div>}

            <div className="mb-3">
              <input
                onChange={(e) => setFullName(e.target.value)}
                type="text"
                className="form-control"
                placeholder="Full Name"
                value={fullName}
              />
            </div>

            <div className="mb-3">
              <input
                onChange={(e) => setAge(e.target.value)}
                type="number"
                className="form-control"
                placeholder="Age"
                value={age}
              />
            </div>

            <div className="mb-3">
              <input
                onChange={(e) => setPhoneNumber(e.target.value)}
                type="text"
                className="form-control"
                placeholder="Phone Number"
                value={phoneNumber}
              />
            </div>

            <div className="mb-3">
              <select
                onChange={(e) => setGender(e.target.value)}
                className="form-select"
                value={gender}
              >
                <option value="">Select Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div className="mb-3">
              <input
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                className="form-control"
                placeholder="Email"
                value={email}
              />
            </div>

            <div className="mb-3">
              <input
                onChange={(e) => setPwd(e.target.value)}
                type="password"
                className="form-control"
                placeholder="Password"
                value={pwd}
              />
            </div>

            <div className="mb-3">
              <input
                onChange={(e) => setConfPwd(e.target.value)}
                type="password"
                className="form-control"
                placeholder="Confirm Password"
                value={confPwd}
              />
            </div>

            <button className="btn btn-primary w-100" onClick={Register}>
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
