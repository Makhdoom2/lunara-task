import React, { useState } from "react";
import { Drawer } from "antd";
import Footer from "../footer/footer";
import Status from "./status/status";
import {
  NavBarContainer,
  Logo,
  DrawerButton,
  StatusWrapper,
  FooterContainer,
} from "./style";

const NavBar = () => {
  const [drawerVisible, setDrawerVisible] = useState(false);

  const showDrawer = () => setDrawerVisible(true);
  const onClose = () => setDrawerVisible(false);

  return (
    <NavBarContainer>
      <Logo>
        <img
          src={"/lunara-logo.svg"}
          alt="Logo"
          onClick={() => (window.location.href = "https://www.lunara.pk/")}
          style={{ cursor: "pointer" }}
        />
        <h1>
          |<span>Status</span>
        </h1>
      </Logo>

      <DrawerButton type="primary" onClick={showDrawer}>
        <span></span>
        <span></span>
      </DrawerButton>

      <StatusWrapper>
        <Status />
      </StatusWrapper>

      <Drawer
        style={{
          marginTop: "70px",
          background: "#1F1F1F",
        }}
        placement="top"
        closable={false}
        onClose={onClose}
        open={drawerVisible}
      >
        <Status />
        <FooterContainer>
          <Footer />
        </FooterContainer>
      </Drawer>
    </NavBarContainer>
  );
};

export default NavBar;
