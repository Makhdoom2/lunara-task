import styled from "styled-components";

export const Container = styled.div`
  max-width: 861px;
  height: 154px;
  background: #1f1f1f;
  border-radius: 8px;
  padding: 8px 12px;
  display: flex;
  flex-direction: column;
  gap: 24px;

  @media (min-width: 768px) {
    padding: 16px 24px;
  }
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const StatusBar = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Status = styled.div<{ color: string }>`
  height: 32px;
  width: 2px;
  background-color: ${(props) => props.color};

  @media screen and (min-width: 768px) {
    width: 4px;
    border-radius: 4px;
  }
`;

export const Footer = styled.div`
  display: grid;
  grid-template-columns: auto 1fr auto;
  justify-content: space-between;
  align-items: center;
  gap: 8px;
  margin-top: -19px;
`;
