import React, { useState } from 'react';
import styled from 'styled-components';
import PromptScroll from './PromptScroll';
import logo from '../assets/dhfes-logo.png';
import { BackgroundStyle } from '../globalStyle';
import useScrollEffect from '../utils/useScrollEffect';
import { pct } from '../utils/units';

const aspect = 0.245;

const calcIsTop = (scrollY: number) => {
  const imageHeight = window.innerWidth * 0.9 * aspect;
  const scrollDegree = (scrollY - imageHeight) / window.innerHeight;
  if (scrollDegree >= 0.75) return true;
  return false;
};

const FirstView = () => {
  const [isTop, setIsTop] = useState(() => calcIsTop(window.scrollY));

  useScrollEffect(
    ({ scrollY }) => {
      setIsTop(calcIsTop(scrollY));
    },
    [true],
  );

  return (
    <Wrapper>
      <Header isTop={isTop}>
        <CustomImage src={logo} alt="デジハリ祭 デジタルハリウッド大学学祭" />
      </Header>
      <PromptScroll />
    </Wrapper>
  );
};

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

const Header = styled.div<{ isTop: boolean }>`
  display: block;
  width: 100%;
  position: ${({ isTop }) => (isTop ? 'fixed' : 'sticky')};
  top: ${({ isTop }) => (isTop ? 0 : pct(75))};
  left: 0;
  right: 0;
  margin: auto;
  z-index: 50;
  ${BackgroundStyle}
`;

export default FirstView;
