import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Auth.css";
import Alert from "../common/Alert";
// Login form.
 
function LoginForm({ login }) {
  const history = useNavigate();
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  // will be used to display error to user
  const [formErrors, setFormErrors] = useState([]);

  // Handle form submit:
  // Calls login func prop
  // if any errors occur an Alert will be shown to user
  async function handleSubmit(evt) {
    evt.preventDefault();
    let result = await login(formData);
    if (result.success) {
      history("/"); // ***************** pending implementation *******
    } else {
      // something went wrong
      setFormErrors(result.errors);
    }
  }

  /** Update form data field */
  function handleChange(evt) {
    const { name, value } = evt.target;
    setFormData(currInputVal => ({ ...currInputVal, [name]: value }));
  }

  return (
      <div className="LoginForm">
        <div className="container col-md-6 offset-md-3 col-lg-4 offset-lg-4">
          <h3 className="text-center mb-3">Log In</h3>

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
                      autoComplete="username"
                      required
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
                      autoComplete="current-password"
                      required
                  />
                </div>

                {formErrors.length
                    ? <Alert type="danger" messages={formErrors} />
                    : null}

                <button
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

export default LoginForm;