import React from 'react';
import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';

const BaseButton = ({ content, external, to, fontSize }: PartialIfOptional<BaseButtonProps>) => {
  const props: StyleProps = { fontSize };
  return (
    <>
      {!to && <CustomAnchor {...props} href="#" onClick={preventDefault} children={content} />}
      {!!to &&
        (external ? (
          <CustomAnchor {...props} href={to} children={content} />
        ) : (
          <CustomLink {...props} to={to} children={content} />
        ))}
    </>
  );
};

const preventDefault: React.MouseEventHandler = (e) => {
  e.preventDefault();
};

interface StyleProps extends Omit<BaseButtonProps, 'content' | 'external' | 'to'> {}

const styleCreator = css<StyleProps>`
  background-color: #777;
  display: block;
  font-size: ${(props) => props.fontSize || '16px'};
`;

const CustomAnchor = styled.a<StyleProps>`
  ${styleCreator}
`;

const CustomLink = styled(Link)<StyleProps>`
  ${styleCreator}
`;

export default BaseButton;
