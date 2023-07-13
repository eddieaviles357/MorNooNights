import React, { useContext } from "react";
import { Route, redirect } from "react-router-dom";
import UserContext from "../auth/UserContext";

/** "Higher-Order Component" for private routes.
 *
 * In routing component. 
 * This component will check if there is a valid current user 
 * and only continues to the route if so. 
 * If no user is present, redirects to login form.
 */

function PrivateRoute({path, children }) {
  const { currentUser } = useContext(UserContext);

  console.debug(
      "PRIVATE_ROUTE",
      "path::", path,
      "currentUser::", currentUser,
  );
  // redirect if no current user is present
  if (!currentUser) {
    return redirect("/login");
  }

  return (
      <Route path={path}>
        {children}
      </Route>
  );
}

export default PrivateRoute;