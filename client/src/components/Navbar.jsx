import { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import Modal from "./Modal";
import SignUp from "./SignUp";
import SignIn from "./SignIn";
import ProfileDashboard from "./ProfileDashboard";

import useWindowDimensions from "../hooks/useWindowDimensions";
import Logo_Black from "../static/Logo_Black.png";

const Container = styled.div`
  padding: ${(props) => (props.isHome === true ? "0px 10px" : "")};
  height: 80px;
  display: flex;
  position: sticky;
  top: 0px;
  z-index: 10000;
  background-color: ${(props) => (props.scrolled >= 80 ? "white" : "")};
  transition: all 3 ease-in-out;
`;

const LogoContainer = styled.div`
  flex: 2;
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

const LogoImgContainer = styled.div`
  display: flex;
  align-items: center;
  height: 4rem;
  width: 4rem;
  max-width: max-content;
`;

const Img = styled.img`
  height: 100%;
  width: 100%;
`;

const LogoHeading = styled.h2`
  padding-left: 10px;
  color: black;
  border-left: 1px solid white;
  cursor: pointer;
  font-family: "Bree Serif", serif;
`;

const ProfileContainer = styled.div`
  flex: 2;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

function Navbar({ isHome, scrollPosition }) {
  const { width } = useWindowDimensions();

  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showRegisterModal, setShowRegisterModal] = useState(false);

  return (
    <>
      {showLoginModal && (
        <Modal>
          <SignIn
            setShowLoginModal={setShowLoginModal}
            setShowRegisterModal={setShowRegisterModal}
          />
        </Modal>
      )}

      {showRegisterModal && (
        <Modal>
          <SignUp
            setShowLoginModal={setShowLoginModal}
            setShowRegisterModal={setShowRegisterModal}
          />
        </Modal>
      )}

      <Container isHome={isHome} scrolled={scrollPosition}>
        <LogoContainer>
          <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
            <LogoImgContainer>
              <Img alt="voyance" src={Logo_Black} />
            </LogoImgContainer>
          </Link>

          {width > 660 && (
            <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
              <LogoHeading> Voyance </LogoHeading>
            </Link>
          )}
        </LogoContainer>

        <ProfileContainer>
          <ProfileDashboard
            setShowLoginModal={setShowLoginModal}
            setShowRegisterModal={setShowRegisterModal}
          />
        </ProfileContainer>
      </Container>
    </>
  );
}

export default Navbar;
