import React, { useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Auth.css";
import Alert from "../common/Alert";
import UserContext from "../auth/UserContext";
// Login form.
 
function LoginForm({ login }) {
  const Navigate = useNavigate()
  const { currentUser } = useContext(UserContext);
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
    if (!result.success) setFormErrors( [ result.errors] )
  }

  /** Update form data field */
  function handleChange(evt) {
    const { name, value } = evt.target;
    setFormData(currInputVal => ({ ...currInputVal, [name]: value.toLowerCase() }));
  }

  useEffect(() => {
   if(currentUser) Navigate("/news")
  }, [currentUser])

  // redirect to topNews
  if(!!currentUser) (<Navigate to="/news" />)
  
  return (
      <div className="LoginForm">
        <div className="container col-md-6 offset-md-3 col-lg-4 offset-lg-4">
          <h2 className="text-center">Log In</h2>

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
                      autoFocus={true}
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
