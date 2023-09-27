import React, { useState } from "react";
import styled from "styled-components";

// Redux Imports:
import { useDispatch } from "react-redux";
import {
  auth_Register,
  auth_Google_Verification,
} from "../redux/authentication";

// Google OAuth Import:
import { useGoogleLogin } from "@react-oauth/google";

// Material-UI Imports:

import { Close } from "@mui/icons-material";
import GoogleIcon from "@mui/icons-material/Google";

// Responsive.js:
import { largeMobile, mobile } from "../utils/responsive";
import { useNavigate } from "react-router-dom";

import { Toaster } from "react-hot-toast";
import { InvalidEmail, Required } from "../utils/notification";

const Wrapper = styled.div`
  display: flex;
  border-radius: 5px;
  -webkit-box-shadow: 0px 0px 3px 0px rgba(0, 0, 0, 1);
  -moz-box-shadow: 0px 0px 3px 0px rgba(0, 0, 0, 1);
  box-shadow: 0px 0px 3px 0px rgba(0, 0, 0, 1);
`;

// Left Card and Its Components:
const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
  width: 400px;
  position: relative;
  padding-bottom: 40px;

  ${largeMobile({
    width: "70vw",
  })}

  ${mobile({
    width: "80vw",
  })}
`;

const Heading = styled.h1`
  font-weight: 800;
  padding: 60px 0px 20px 0px;
  font-family: "Josefin Sans", sans-serif;
  font-size: 36px;

  ${largeMobile({
    fontSize: "28px",
  })}

  ${mobile({
    fontSize: "28px",
  })}
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

const Input = styled.input`
  margin-bottom: 1rem;
  border: none;
  padding: 15px 12px;
  background-color: #eee;
  width: 80%;
  border-radius: 4px;
  font-family: "Noto Serif", serif;
`;

const Button = styled.button`
  background-color: #0ead69;
  color: white;
  cursor: pointer;
  font-size: 18px;
  font-weight: 400;
  padding: 12px 15px;
  width: 85%;
  border: none;
  font-family: "Noto Serif", serif;
  margin-top: 5px;
`;

const GoogleAuthWrapper = styled.div`
  cursor: pointer;
  display: flex;
  width: 80%;
  padding: 12px 8px;
  border: 1px solid lightgray;
  align-items: center;
  gap: 15px;
  margin: 20px 0px 40px 0px;
`;

const ExistingAccount = styled.p`
  font-size: 14px;
  padding: 15px 0px 10px 0px;
  color: gray;
  cursor: pointer;
  text-decoration: none;
  margin: 10px 0px;
  font-family: "Noto Serif", serif;
`;

const GoogleAuthTextField = styled.p`
  font-size: 18px;
`;

const CloseButton = styled.div`
  position: absolute;
  cursor: pointer;
  top: 5px;
  right: 5px;
`;

const Separator = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  width: 100%;
  align-items: center;
  justify-content: center;
  height: 30px;
`;
const Line = styled.hr`
  width: 80%;
  position: absolute;
  padding: auto;
`;
const OR = styled.div`
  z-index: 1;
  padding: 7px;
  font-size: 14px;
  border-radius: 100%;
  background-color: white;
  font-family: "Noto Serif", serif;
`;

const Login = styled.span`
  color: black;
  font-weight: bold;
`;

const SignUp = ({ setShowLoginModal, setShowRegisterModal }) => {
  /* State for Handling Input: */
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Email-Password Authentication:
  const auth = (event) => {
    event.preventDefault();
    if (name === "" || email === "" || password === "") {
      Required();
      return;
    }

    if (!email.includes("@")) {
      InvalidEmail();
      return;
    }

    auth_Register(
      navigate,
      dispatch,
      { name, email, password },
      setShowLoginModal,
      setShowRegisterModal
    );
  };

  return (
    <Wrapper>
      <Card>
        <CloseButton>
          <Close
            style={{ transform: "scale(1.2)" }}
            onClick={() => setShowRegisterModal(false)}
          />
        </CloseButton>
        <Heading>Create your account</Heading>
        <Form>
          <Input
            placeholder="Name"
            onChange={(event) => setName(event.target.value)}
          />
          <Input
            placeholder="Email"
            type="email"
            onChange={(event) => setEmail(event.target.value)}
          />
          <Input
            placeholder="Password"
            type="password"
            onChange={(event) => setPassword(event.target.value)}
          />
          <Button onClick={auth}>Continue</Button>

          <ExistingAccount>
            Already Have an Account?{" "}
            <Login
              onClick={() => {
                setShowLoginModal(true);
                setShowRegisterModal(false);
              }}>
              Log in
            </Login>
          </ExistingAccount>
        </Form>
      </Card>
      <Toaster />
    </Wrapper>
  );
};

export default SignUp;
