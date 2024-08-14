import React from 'react'
import styled from 'styled-components';
import tw from 'twin.macro';
import HeadingComponent from './../headingComponent/headingComponent';

import Add from '../../images/add-icon.svg';
import LogoutImage from '../../images/logout-icon.svg';

const HeaderWrapper = styled.div`
  ${tw`my-[120px]`}
`;
const Wrapper = styled.div`
  ${tw`flex items-center justify-between`}
`;
const HeadingWrapper = styled.div`
  ${tw`flex items-center gap-[12px]`}
`;
const AddIcon = styled.img`
  ${tw`w-[32px] h-[32px] object-contain mt-[8px]`}
`;
const LogoutWrapper = styled.button`
  ${tw`flex items-center gap-[12px]`}
  p{
    ${tw`text-[16px] font-bold`}
  }
`;
const LogoutIcon = styled.img`
  ${tw`w-[32px] h-[32px] object-contain`}
`;

function Header({title, plusIcon, logOut}) {
    return (
        <HeaderWrapper>
            <div className='container'>
                <Wrapper>
                    <HeadingWrapper>
                        <HeadingComponent size='h2'>
                            {title}
                        </HeadingComponent>
                        {plusIcon && (
                            <AddIcon src={Add} alt='icon' />
                        )}
                    </HeadingWrapper>
                    {logOut && (
                        <LogoutWrapper>
                            <HeadingComponent size='p'>
                                Logout
                            </HeadingComponent>
                            <LogoutIcon src={LogoutImage} alt='icon' />
                        </LogoutWrapper>
                    )}
                </Wrapper>
            </div>
        </HeaderWrapper>
    )
}

export default Header