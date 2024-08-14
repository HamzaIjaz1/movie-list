import styled from 'styled-components';
import tw from 'twin.macro';

export const ButtonBase = styled.button`
  ${tw`text-[16px] leading-[24px] font-bold w-[100%] px-[55px] py-[16px] rounded-10 border transition duration-300 ease-in-out cursor-pointer`}
`;

export const PrimaryButton = styled(ButtonBase)`
  ${tw`bg-primary text-white border-none`}
`;

export const WhiteButton = styled(ButtonBase)`
  ${tw`bg-transparent text-white py-[15px] border-white`}
`;
