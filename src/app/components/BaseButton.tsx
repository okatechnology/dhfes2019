import React, { useMemo, MouseEventHandler } from 'react';
import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';

const BaseButton = ({ className, content, external, to, fontSize }: PartialIfOptional<BaseButtonProps>) => {
  const props: StyleProps = { fontSize, className };
  const handler = useMemo<MouseEventHandler | undefined>(() => {
    if (typeof to !== 'function') return undefined;
    return (e) => (e.preventDefault(), to(e));
  }, [to]);

  return (
    <>
      {typeof to === 'function' ? (
        <CustomAnchor {...props} href="#" onClick={handler} children={content} />
      ) : external ? (
        <CustomAnchor {...props} href={to} children={content} />
      ) : (
        <CustomLink {...props} to={to} children={content} />
      )}
    </>
  );
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
