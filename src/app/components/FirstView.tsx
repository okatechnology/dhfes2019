import React from 'react';
import styled from 'styled-components';
import PromptScroll from './PromptScroll';
import logo from '../assets/dhfes-logo.png';

const FirstView = () => (
  <Wrapper>
    <Header>
      <CustomImage src={logo} alt="デジハリ祭 デジタルハリウッド大学学祭" />
    </Header>
    <PromptScroll />
  </Wrapper>
);

const Wrapper = styled.div`
  height: 100vh;
  width: 100%;
  position: relative;
`;
const CustomImage = styled.img`
  display: block;
  width: 90%;
  margin: 0 auto;
`;

const Header = styled.div`
  display: block;
  width: 100%;
  position: sticky;
  top: 75%;
  left: 0;
  right: 0;
  margin: auto;
  z-index: 50;
`;

export default FirstView;
