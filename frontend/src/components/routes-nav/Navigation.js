import React, { useContext } from "react";
import { NavLink, Link } from "react-router-dom";
import "./Navigation.css";
import UserContext from "../auth/UserContext"; 

export default function Navigation({ logout }) {
  
  const {currentUser} = useContext(UserContext);
  console.log("NAVIGATION CURR_USER::", currentUser);
  // displays when user is logged in
  function loggedInNav() {
    return (
        <ul>
          <li>
            <Link to="/" onClick={logout}>
              Log out {currentUser.first_name || currentUser.username}
            </Link>
          </li>
        </ul>
    );
  };
  // displays when user is logged out or is a new user
  function loggedOutNav() {
    return (
        <ul>
            <li><NavLink to='/login'>Login</NavLink></li>
            <li><NavLink to='/signup'>Sign Up</NavLink></li>
        </ul>
    );
  };

  return (
    <nav className="Nav">
      <Link className="navbar-brand" to="/">
        MorNooNightsNews
      </Link>
      {currentUser ? loggedInNav() : loggedOutNav()}
    </nav>
  );
};


// export default function Navigation() {
//     const [isNavCollapsed, setNavCollapsed] = useState(true);
//     const handleCollapse = () => setNavCollapsed((prevState) => !prevState);
//     return (
//         <nav className="navbar navbar-expand-md Nav">
//             <div className="container-fluid">
//                 <Link className="navbar-brand" to='/'>MorNooNightsNews</Link>
//                 <button 
//                     className="navbar-toggler" 
//                     type="button" 
//                     data-bs-toggle="collapse" 
//                     data-bs-target="#mainNav" 
//                     aria-controls="mainNav" 
//                     aria-expanded={isNavCollapsed ? false : true} 
//                     aria-label="Toggle navigation"
//                     onClick={handleCollapse}>
//                     <span className="navbar-toggler-icon"></span>
//                 </button>
//                 <div className={`${isNavCollapsed ? "collapse" : ""} "navbar-collapse"`} id="mainNav">
//                     <form className="d-flex" role="search">
//                         <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
//                         <button className="btn btn-outline-success" type="submit">Search</button>
//                     </form>
//                     <ul className="navbar-nav me-auto mb-2 mb-lg-0">
//                         <li className="nav-item">
//                             <NavLink className="nav-link" to='/profile'>Profile</NavLink>
//                         </li>
//                         <li className="nav-item">
//                             <NavLink className="nav-link" to='/profile'>Profile</NavLink>
//                         </li>
//                         <li className="nav-item">
//                             <NavLink className="nav-link" to='/profile'>Profile</NavLink>
//                         </li>
//                     </ul>
//                 </div>
//             </div>
//         </nav>
//     )
// };