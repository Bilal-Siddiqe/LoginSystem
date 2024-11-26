import React from 'react'
import { Link } from 'react-router-dom';
import useData from '../hooks/useData'

export default function Navbar() {

    const { login, setLogin } = useData();

    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark mb-5">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">Navbar</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Link</a>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Dropdown
                                </a>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li><a className="dropdown-item" href="#">Action</a></li>
                                    <li><a className="dropdown-item" href="#">Another action</a></li>
                                    <li><hr className="dropdown-divider" /></li>
                                    <li><a className="dropdown-item" href="#">Something else here</a></li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
                            </li>
                        </ul>
                        <form className="d-flex me-5">

                            {
                                login == true ? <button className="btn btn-danger me-5" onClick={() => {
                                    setLogin(false);
                                }}> Log Out</button> : <div><Link to={"/"}>  <button className="btn btn-success me-5" type="submit"> Sign In </button></Link>

                                    <Link to={"signup"}>   <button className="btn btn-primary me-5" type="submit">Sign Up </button></Link></div>
                            }






                        </form>
                    </div>
                </div>
            </nav>

        </div>
    )
}
