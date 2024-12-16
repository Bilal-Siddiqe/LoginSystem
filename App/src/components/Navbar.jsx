import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import useData from '../hooks/useData';

export default function Navbar() {
    const { login, setLogin, loginUser } = useData(); // Destructuring loginUser from useData
    const [dropdownOpen, setDropdownOpen] = useState(false);

    // Handle dropdown toggle
    const toggleDropdown = () => {
        setDropdownOpen(!dropdownOpen);
    };

    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark mb-5">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">Facbook</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            {/* Conditionally render navigation items based on login status */}
                            {login ? (
                                <>
                                    <li className="nav-item">
                                        <a className="nav-link active" href="#">Home</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#">Feeds</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#">Post</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#">Videos</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#">Profile</a>
                                    </li>
                                </>
                            ) : null}
                        </ul>
                        <form className="d-flex me-5">
                            {login ? (
                                <div className="d-flex align-items-center">
                                    {/* Display user's name and logout button */}
                                    <span className="text-white me-3">{loginUser.fullName}</span>
                                    <div className="dropdown">
                                        <span
                                            className="text-white me-3"
                                            style={{ cursor: 'pointer' }}
                                            onClick={toggleDropdown}
                                        >
                                            Settings
                                        </span>
                                        {dropdownOpen && (
                                            <ul className="dropdown-menu show" style={{ position: 'absolute', zIndex: 1 }}>
                                                <li>
                                                    <button
                                                        className="dropdown-item"
                                                        onClick={() => setLogin(false)} // Log out on click
                                                    >
                                                        Log Out
                                                    </button>
                                                </li>
                                            </ul>
                                        )}
                                    </div>
                                </div>
                            ) : (
                                <div>
                                    <Link to={"/"}>
                                        <button className="btn btn-success me-5" type="submit">Sign In</button>
                                    </Link>
                                    <Link to={"signup"}>
                                        <button className="btn btn-primary me-5" type="submit">Sign Up</button>
                                    </Link>
                                </div>
                            )}
                        </form>
                    </div>
                </div>
            </nav>
        </div>
    );
}
