import React, { useState } from "react";
// you may need to install react-hook-form and react-router-dom
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";


const Navigation = () => {
  const [loggedOut, setLoggedOut] = useState(true);
  const [loggedIn, setLoggedIn] = useState(false);
  const [chatbox, setChatbox] = useState(false);
  // initialize the hook for form validation
  const { register, handleSubmit, errors } = useForm();

  const addUser = (data) => {
    console.log("User has been added: ", data);
    // You need to implement addUser functionality on your own
    
    //change login and logout status after adding user
    setLoggedOut(false);
    setLoggedIn(true);
    //similarly perform a check to setChatbox state
  };

  const loginUser = (data) => {
    console.log("User has logged in: ", data);
    // You need to implement loginUser functionality on your own

    //change login and logout status after user login
    setLoggedOut(false);
    setLoggedIn(true);
    //similarly perform a check to setChatbox state
  };

  const logOutUser = () => {
    // You need to implement logOutUser functionality on your own

    //change login and logout status after user logout
    setLoggedOut(true);
    setLoggedIn(false);
  };

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-secondary">
        <a className="navbar-brand ml-sm-5" href="#">Chat UI</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
            </li>
          </ul>

          <form className="form-inline my-2 my-lg-0">
            {loggedOut && (
              <>
                <button className="btn btn-primary mr-sm-5 my-2 my-sm-0" type="submit" data-toggle="modal"
                  data-target="#exampleModalCenter">Add User</button>

                <button className="btn btn-success mr-sm-5 my-2 my-sm-0" type="submit" data-toggle="modal"
                  data-target="#exampleModalCenter2">Login</button>
              </>
            )}

            {loggedIn && (
              <>
                {chatbox && (
                  <Link className="btn btn-success mr-sm-5 my-2 my-sm-0" to="/chat">My
                    Chats</Link>
                )}
                <button className="btn btn-danger mr-sm-5 my-2 my-sm-0" type="submit" onClick={logOutUser}>LogOut</button>
              </>
            )}
          </form>
        </div>
      </nav>
      { /* rest of the components... */}
    </div>
  );
};

export default Navigation;
