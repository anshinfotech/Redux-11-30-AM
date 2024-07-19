import React, { useState } from "react";
import axios from 'axios';

function Register() {

    const [userData , setUserData] = useState({
        username : '',
        phone : '',
        email : '',
        password : '',
    });

    const registerUser = async() => {
        try {
            const response = await axios.post("http://localhost:8000/register" , userData);
            
            const data = response.data;
            const message = data.message;
            const user = data.User;

            console.log(message );
            console.log(user);

        } catch (error) {
            console.log(error);
        }
    }

    const handleFormSubmit = (e) => {
        e.preventDefault();
        registerUser();
    }

  return (
    <div className="d-flex justify-content-center mt-5">
      <form className="w-50" onSubmit={handleFormSubmit}>
        {/* User name */}
      <div data-mdb-input-init className="form-outline mb-4">
          <label className="form-label" htmlFor="form2Exampleu">
            Username
          </label>
          <input value={userData.username} onChange={(e) => setUserData({...userData , username : e.target.value})} type="text" id="form2Exampleu" className="form-control" />
        </div>
        {/* Mobile Phone */}
      <div data-mdb-input-init className="form-outline mb-4">
          <label className="form-label" htmlFor="form2Examplep">
            Mobile Phone
          </label>
          <input value={userData.phone} onChange={(e) => setUserData({...userData , phone : e.target.value})} type="text" id="form2Examplep" className="form-control" />
        </div>
        {/* Email input */}
        <div data-mdb-input-init className="form-outline mb-4">
          <label className="form-label" htmlFor="form2Example1">
            Email address
          </label>
          <input value={userData.email} onChange={(e) => setUserData({...userData , email : e.target.value})} type="email" id="form2Example1" className="form-control" />
        </div>
        {/* Password input */}
        <div data-mdb-input-init className="form-outline mb-4">
          <label className="form-label" htmlFor="form2Example2">
            Password
          </label>
          <input value={userData.password} onChange={(e) => setUserData({...userData , password : e.target.value})} type="password" id="form2Example2" className="form-control" />
        </div>
        {/* 2 column grid layout for inline styling */}
        <div className="row mb-4">
          <div className="col d-flex justify-content-center">
            {/* Checkbox */}
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                defaultValue
                id="form2Example31"
                defaultChecked
              />
              <label className="form-check-label" htmlFor="form2Example31">
                {" "}
                Remember me{" "}
              </label>
            </div>
          </div>
          <div className="col">
            <a href="#!">Forgot password?</a>
          </div>
        </div>
        <button
          data-mdb-button-init
          data-mdb-ripple-init
          className="btn btn-primary btn-block mb-4"
        >
          Sign in
        </button>
        <div className="text-center">
          <p>
            Not a member? <a href="#!">Register</a>
          </p>
          <p>or sign up with:</p>
          <button
            type="button"
            data-mdb-button-init
            data-mdb-ripple-init
            className="btn btn-link btn-floating mx-1"
          >
            <i className="fab fa-facebook-f" />
          </button>
          <button
            type="button"
            data-mdb-button-init
            data-mdb-ripple-init
            className="btn btn-link btn-floating mx-1"
          >
            <i className="fab fa-google" />
          </button>
          <button
            type="button"
            data-mdb-button-init
            data-mdb-ripple-init
            className="btn btn-link btn-floating mx-1"
          >
            <i className="fab fa-twitter" />
          </button>
          <button
            type="button"
            data-mdb-button-init
            data-mdb-ripple-init
            className="btn btn-link btn-floating mx-1"
          >
            <i className="fab fa-github" />
          </button>
        </div>
      </form>
    </div>
  );
}

export default Register;
