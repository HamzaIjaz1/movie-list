import React from 'react'
import styled from 'styled-components';
import tw from 'twin.macro';

const headingStyles = {
  h1: tw`text-[64px] leading-[80px] text-white font-semibold`,
  h2: tw`text-[48px] leading-[56px] text-white font-semibold `,
  p: tw`text-[14px] leading-[24px] text-white font-normal`,
};

const StyledHeading = styled(({ size, ...props }) => {
  const Tag = size || 'p';
  return <Tag {...props} />;
})`
  ${props => headingStyles[props.size || 'p']}
`;

function HeadingComponent({ size = 'p', children, ...rest }) {
    return (
        <StyledHeading size={size} {...rest}>{children}</StyledHeading>
    )
}

export default HeadingComponent