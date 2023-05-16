import styled from "styled-components";

const FooterWrapper = styled.footer`
box-sizing: border-box;
width: 100%;
height: 58px;
background: #FFFFFF;
border-top: 1px solid rgba(0, 0, 0, 0.1);
position: fixed;
bottom: 0;
`;


const Content = styled.p`
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  color: #888888 ;
  line-height: 88.02%;
  /* or 11px */
  display: flex;
  justify-content: center;
  margin-top: 17px;
  margin-bottom: -10px;
`;
const Footer = () => {
  return (
    <FooterWrapper>
      <Content>개인정보 처리방침 | 이용 약관</Content>
      <Content>All rights reserved @ Codestates</Content>
    </FooterWrapper>
  );
};

export default Footer;
