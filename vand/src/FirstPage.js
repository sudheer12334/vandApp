import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./FirstPage.css";
import gif from "./person-raising-hand-joypixels.gif";

const FirstPage = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    aadhar: "",
    email: "",
  });

  const [formErrors, setFormErrors] = useState({
    firstName: "",
    lastName: "",
    aadhar: "",
    email: "",
  });
  const navigate = useNavigate();

  const validateForm = () => {
    let isValid = true;
    const newFormErrors = { ...formErrors };

    for (const key in formData) {
      if (formData[key].trim() === "") {
        newFormErrors[key] = `${
          key.charAt(0).toUpperCase() + key.slice(1)
        } is required`;
        isValid = false;
      } else {
        newFormErrors[key] = "";
      }
    }

    // Additional validation for Aadhar field
    if (formData.aadhar.length !== 12) {
      newFormErrors.aadhar = "Aadhar number must be 12 digits.";
      isValid = false;
    }

    // Additional validation for Email field
    if (!formData.email.endsWith("@gmail.com")) {
      newFormErrors.email = "Please enter a valid Email address";
      isValid = false;
    }

    setFormErrors(newFormErrors);
    return isValid;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleInputChange = (e) => {
    const newValue = e.target.value.replace(/\D/g, "").slice(0, 12);
    setFormData({ ...formData, aadhar: newValue });
  };

  const handleEmailChange = (e) => {
    const inputValue = e.target.value;
    setFormData({ ...formData, email: inputValue });
    if (!inputValue.endsWith("@gmail.com")) {
      setFormErrors({ ...formErrors, email: "Please enter a valid Email address" });
    } else {
      setFormErrors({ ...formErrors, email: "" });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      console.log("Form Data:", formData);

      navigate("/second-page");
    } else {
      console.log("Please fill the form correctly.");
    }
  };

  return (
    <div className="firstimage">
      
      <div id="aaa">
        
        <div id='para2'>
        <h2>WELCOME TO CITY BANK</h2><p>
        Get the peace of mind by knowing all the details about your loan 
        using CITY Bank Loan Eligibility Calculator</p></div>
        <form className='box1' onSubmit={handleChange}>
        <h1>CHECK YOUR ELIGIBILITY</h1>
          <div className='zzz'>
            <label>First Name</label>
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
            />
            <div className="error">{formErrors.firstName}</div>
          </div>

          <div className='zzz'>
            <label>Last Name</label>
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
            />
            <div className="error">{formErrors.lastName}</div>
          </div>
          <div className='zzz'>
            <label id='aadhar'>Aadhar</label>
            <input
              type="number"
              name="aadhar"
              value={formData.aadhar}
              onChange={handleInputChange}
            />
            <div className="error">{formErrors.aadhar}</div>
          </div>
          <div className='zzz'>
            <label id='email'>Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleEmailChange}
            />
            <div className="error">{formErrors.email}</div>
          </div>
          <div className='button1'>
            <Link to="/second-page">
              <button onClick={handleSubmit}>Next</button>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default FirstPage;
