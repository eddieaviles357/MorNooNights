import React, { useState, useContext } from "react";
import { Navigate } from "react-router-dom";
import "./Auth.css";
import Alert from "../common/Alert";
import UserContext from "../auth/UserContext";
/** Signup form.
 *
 * Shows form.
 * On submission:
 * - calls signup function prop
 */

function SignupForm({ signup }) {
  const { currentUser } = useContext(UserContext);
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    firstName: "",
    lastName: "",
    email: "",
  });
  const [formErrors, setFormErrors] = useState([]);

  /** Handle form submit:
   *
   * Calls singup func prop and, if successful routes to news route.
   */

  async function handleSubmit(evt) {
    evt.preventDefault();
    let result = await signup(formData);
    if (!result.success) setFormErrors( [result.errors] );
  }

  /** Update form data field */
  function handleChange(evt) {
    const { name, value } = evt.target;
    setFormData(data => ({ ...data, [name]: value.toLowerCase() }));
  }

  // redirects to topNews
  if(!!currentUser) (<Navigate to="/news" />);
  
  return (
      <div className="SignupForm">
        <div className="container col-md-6 offset-md-3 col-lg-4 offset-lg-4">
          <h2 className="text-center">Sign Up</h2>
          <div className="card">
            <div className="card-body">
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label>Username</label>
                  <input
                      name="username"
                      className="form-control"
                      value={formData.username}
                      onChange={handleChange}
                      autoFocus={true}
                  />
                </div>
                <div className="form-group">
                  <label>Password</label>
                  <input
                      type="password"
                      name="password"
                      className="form-control"
                      value={formData.password}
                      onChange={handleChange}
                  />
                </div>

                <div className="form-group">
                  <label>First name</label>
                  <input
                      name="firstName"
                      className="form-control"
                      value={formData.firstName}
                      onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                  <label>Last name</label>
                  <input
                      name="lastName"
                      className="form-control"
                      value={formData.lastName}
                      onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                  <label>Email</label>
                  <input
                      type="email"
                      name="email"
                      className="form-control"
                      value={formData.email}
                      onChange={handleChange}
                  />
                </div>

                {formErrors.length
                    ? <Alert type="danger" messages={formErrors} />
                    : null
                }

                <button
                    type="submit"
                    className="btn btn-primary float-right mt-3"
                    onSubmit={handleSubmit}
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
  );
}

export default SignupForm;