import styled from "styled-components";
import { Layout, Button } from "antd";

export const NavBarContainer = styled(Layout.Header)`
  background: #111111;
  padding: 15px 20px;
  color: #ffffff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #212121;

  @media (min-width: 500px) {
    padding: 20px 40px;
  }
`;

export const Logo = styled.div`
  display: flex;
  align-items: center;

  img {
    height: 25px;
    margin-right: 4px;

    @media (min-width: 500px) {
      height: 32px;
      margin-right: 8px;
    }
  }

  h1 {
    font-size: 28px;
    font-weight: 300;
    margin: 0;
    color: #383838;

    @media (min-width: 500px) {
      font-size: 18px;
      margin: 0;
    }

    span {
      font-family: Helvetica Neue;
      color: #ffffff;
      font-size: 30px;
      margin-left: 9px;
      font-weight: 400;
    }
  }
`;

export const DrawerButton = styled(Button)`
  @media (min-width: 1200px) {
    display: none;
  }

  background-color: transparent;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  border: 2px solid #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 10px;
  gap: 3px;

  span {
    width: 10px;
    border: 1px solid #fff;
  }
`;

export const StatusWrapper = styled.div`
  @media (max-width: 1199px) {
    display: none;
  }
`;

export const FooterContainer = styled.div`
  @media (min-width: 767px) {
    display: none;
  }
`;
