import React, { useContext } from "react";
import UserContext from "../auth/UserContext";
import { Link } from "react-router-dom"
import "./Home.css";

export default function Home() {
    const { currentUser } = useContext(UserContext);
    console.log("CURRENTUSER::HOME::", currentUser);
    return (
        <div className="Home">
            <div className="container text-center">
                <h1 className="mb-4 text-white font-weight-bold">MorNooNightsNews</h1>
                <p className="lead text-white">Daily News</p>
                {currentUser
                ? <h2 className="text-white">
                    Welcome {currentUser.firstName || currentUser.username}!
                </h2>
                : (
                    <p>
                        <Link className="Btn-tertiary btn m-3"
                            to="/login">
                        Log in
                        </Link>
                        <Link className="Btn-secondary btn m-3"
                            to="/signup">
                        Sign up
                        </Link>
                    </p>
                )}
            </div>
        </div>
    )
}