import styled from 'styled-components';
import tw from 'twin.macro';

const shrinkLabel = tw`
  text-[12px]
  leading-[16px]
  top-[-24px]
  left-0
  transform-none
`;

const shrinkInput = tw`
  bg-white
  border-input
`;

export const InputWrapper = styled.div`
  ${tw`relative w-[100%] flex`}
`;

export const FormInputLabel = styled.label`
  ${tw`absolute top-1/2 left-[16px] text-[14px] leading-[24px] font-normal transition-all ease-in-out duration-300 text-white`}
  transform: translateY(-50%);

  ${({ shrink }) => shrink && shrinkLabel}
`;

export const Input = styled.input`
  ${tw`text-[14px] leading-[24px] font-normal w-[100%] px-[16px] pt-[10px] pb-[9px] rounded-10 border-[1px] border-transparent transition-colors duration-300 text-input bg-input`}

  &:focus {
    ${tw`outline-none border-input bg-white`}
  }
  ${({ shrink }) => shrink && shrinkInput}
  
  &:focus ~ ${FormInputLabel} {
    ${shrinkLabel};
  }
`;
