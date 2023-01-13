import { Fragment, React, useEffect, useState } from "react";
import { gapi } from "gapi-script";
import GoogleLogin from "react-google-login";
import { Navbar } from "react-bootstrap";
import Card from "../UI/Card";
import classes from "./Google.module.css";
import Button from "../UI/Button";
import Home from "../Pages/Home";

const clientId =
  "809515788873-8h36j161t9rktleeinj0ua7f39t98pfm.apps.googleusercontent.com";

function Google(props) {
  const [profile, setProfile] = useState(false);

  useEffect(() => {
    const initClient = () => {
      gapi.client.init({
        clientId: clientId,
        scope: "",
      });
    };
    gapi.load("client:auth2", initClient);
  });

  const onSuccess = (res) => {
    console.log("success:", res);
    setProfile(res.profileObj);
  };

  const onFailure = (error) => {
    console.error(error);
  };

  const logOutHandler = () => {
    setProfile(false);
  };

  return (
    <>
      <Navbar bg="dark" expand="lg" >
                <nav>
                    <ul>
                      <li><a>abcd</a></li>
                      <li><a>edniek</a></li>
                    </ul>
                </nav>
      </Navbar>

      <Card>
        {profile && (
          <>
            <Home></Home>
          </>
        )}

        {!profile && (
          <div className={classes.google}>
            <h1> Welcome To My App </h1>
            <br></br>
            <p> Please Sign into your Google Account</p>
            <GoogleLogin
              clientId={clientId}
              buttonText="Login with Google"
              onSuccess={onSuccess}
              onFailure={onFailure}
              cookiePolicy={"single_host_origin"}
            />
          </div>
        )}
      </Card>
    </>
  );
}

export default Google;
