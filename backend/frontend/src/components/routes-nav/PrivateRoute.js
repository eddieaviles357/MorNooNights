import React, { useContext, useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import UserContext from "../auth/UserContext";

/** "Higher-Order Component" for private routes.
 *
 * In routing component. 
 * This component will check if isAllowed is true
 * and only continues to the route if so. 
 * If isAllowed is true, redirects using redirectPath prop.
 * Default redirect is login form.
 */

function PrivateRoute({ redirectPath = "/login", children }) {
  const { currentUser } = useContext(UserContext);
  const navigate = useNavigate();

  // redirect no current user exist
  useEffect(() => {
    if(!currentUser) navigate(redirectPath)
  }, [currentUser, navigate, redirectPath])
  // can be used as layout component or a wrapper component
  return children ? children : <Outlet />;
}

export default PrivateRoute;