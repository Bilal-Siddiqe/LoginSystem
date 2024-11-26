import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useData from '../hooks/useData'

export default function SingIn() {

  const navigate = useNavigate();
  const { setLoginUser, setLogin } = useData();
  const [email, setEmail] = useState("");
  const [pwd, setPwd] = useState("");

  async function signIn() {
    const url = "http://localhost:3000/login";

    await axios.post(url, { email, pwd })
      .then((res) => {
        if (res.data !== "User Not Found") {
          navigate("/profile");
          setLoginUser(res.data);
          setLogin(true);
        }
        else {
          alert(`Invalid Email Or Password`);
        }
      })
      .catch((err) => {
        alert("Server Not Responding");
      });
  }

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6 col-lg-4">
          <div className="card shadow-lg p-4">
            <h2 className="text-center mb-4">Sign In</h2>

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

            <button className="btn btn-primary w-100" onClick={signIn}>
              Sign In
            </button>

            {/* Forgot Password link */}
            <div className="text-center mt-3">
              <a href="/forgot-password" className="text-decoration-none">Forgot Password?</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
