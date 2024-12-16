import React, { useEffect, useState } from 'react';
import useData from '../hooks/useData';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function Profile() {
  const { loginUser, setLoginUser, login } = useData();
  const navigate = useNavigate();

  // Fetch storedPost from localStorage
  const [storedPost, setStoredPost] = useState({});

  useEffect(() => {
    if (!login) {
      navigate('/');
    } else {
      // Retrieve the post data from localStorage
      const post = JSON.parse(localStorage.getItem('post')) || {};
      setStoredPost(post);
    }
  }, [login, navigate, loginUser]);


  function crtPost() {
    const url = "http://localhost:3000/creatPost";
    axios.post(url, {
      loginUser: loginUser.email,
      postsData: {
        title: "Palestine-2",
        decs: "Lorem ipsum dolor sit amet consectetur adipisicing elit."
      }
    }).then(
      (res) => {
        setLoginUser(res.data);
      }
    ).catch(
      (err) => {
        console.log("server not responding")
      }
    )
  }

  function delPost(index) {
    const url = "http://localhost:3000/delPost";

    axios.post(url, { postIndex: index })
      .then((res) => {
        console.log(res.data)
      })
      .catch((err) => {
        console.log("Server not responding");
      });
  }


  return (
    <div className="container-fluid">
      <div className="row">

        {/* Left Sidebar */}
        <div className="col-12 col-md-2 bg-dark text-white p-4" style={{ height: '100vh' }}>
          <h2 className="text-center mb-4">Left Sidebar</h2>
          <ul className="list-unstyled">
            <li className="mb-3">
              <a href="#" className="text-white">Home</a>
            </li>
            <li className="mb-3">
              <a href="#" className="text-white">Settings</a>
            </li>
            <li className="mb-3">
              <a href="#" className="text-white">Messages</a>
            </li>
            <li className="mb-3">
              <a href="#" className="text-white">Notifications</a>
            </li>
          </ul>
        </div>

        {/* Profile Content (Center) */}
        <div className="col-12 col-md-8 p-1">
          <div className="postCreater border border-danger border-3 rounded py-4 px-5 w-75 m-auto">
            <input type="text" className="d-block w-100 m-auto py-2" />
            <button onClick={crtPost} className="btn btn-success d-block w-100 m-auto py-2 my-2"> Start Posting </button>
          </div>

          {
            loginUser.posts.map((items, index) => {
              return (
                <div key={items.id || index} className="post border border-primary border-3 w-75 m-auto mt-4 rounded p-2">
                  <h1 className="postTitle">{items.title}</h1>
                  <p className="postDecs">{items.decs}</p>
                  <button className="btn btn-success">Edit</button>
                  <button className="btn btn-danger" onClick={() => delPost(index)}>Delete</button>
                </div>
              );
            })
          }

        </div>

        {/* Right Sidebar */}
        <div className="col-12 col-md-2 bg-dark text-white p-4" style={{ height: '100vh' }}>
          <h2 className="text-center mb-4">Right Sidebar</h2>
          <ul className="list-unstyled">
            <li className="mb-3">
              <a href="#" className="text-white">Quick Links</a>
            </li>
            <li className="mb-3">
              <a href="#" className="text-white">Friends</a>
            </li>
            <li className="mb-3">
              <a href="#" className="text-white">Groups</a>
            </li>
            <li className="mb-3">
              <a href="#" className="text-white">Events</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
