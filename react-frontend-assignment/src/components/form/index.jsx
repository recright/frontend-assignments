import React, { useState } from "react";
import "./style.css";

const Form = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);


  return (
    <div className="container">
      <div className="formWrapper">
        <div className="form">
          {!isSubmitted ? (
            <form>
              <div className="field">
                <label>First Name</label>
                <input
                  type="text"
                  name="firstName"
                />
              </div>
              <div className="field">
                <label>Last Name</label>
                <input
                  type="text"
                  name="lastName"
                />
              </div>
              <div className="field">
                <label>Email</label>
                <input
                  type="email"
                  name="email"
                />
              </div>
              <div className="field">
                <button>Submit form</button>
              </div>
            </form>
          ) : (
            <div className="thankYou">
              <h3>Thank you for submitting the form {formData.firstName}!</h3>
              <p>
                We have received your submission and will get back to you
                shortly.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
export default Form;
