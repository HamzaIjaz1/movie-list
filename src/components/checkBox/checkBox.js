import React, { useState } from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';

const CheckBoxStyled = styled.div`
  ${tw`flex items-center gap-2`}
`;

const CheckBoxWrapper = styled.div`
  ${tw`relative flex items-center justify-center`}
  width: 18px;
  height: 18px;
`;

const HiddenCheckBox = styled.input.attrs({ type: 'checkbox' })`
  ${tw`absolute opacity-0 cursor-pointer`}
`;

const CustomCheckBox = styled.div`
  ${tw`flex items-center justify-center w-[18px] h-[17px] border-transparent rounded-4 transition-colors duration-200 ease-in-out`}
  background: ${({ checked }) => (checked ? '#2BD17E' : '#224957')};

  svg {
    ${tw`w-[18px] h-[17px]`}
    color: ${({ checked }) => (checked ? '#fff' : 'transparent')};
    visibility: ${({ checked }) => (checked ? 'visible' : 'hidden')};
  }
`;

export const CheckBoxLabel = styled.label`
  ${tw`text-[14px] leading-[24px] font-normal text-white`}
`;

function CheckBox({ label, id, name, value, }) {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };
  return (
    <CheckBoxStyled>
      <CheckBoxWrapper>
        <HiddenCheckBox
          id={id}
          name={name}
          value={value}
          checked={isChecked}
          onChange={handleCheckboxChange}
        />
        <CustomCheckBox checked={isChecked}>
          {isChecked ? (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M9.9997 15.1709L19.1921 5.97852L20.6063 7.39273L9.9997 17.9993L3.63574 11.6354L5.04996 10.2212L9.9997 15.1709Z"></path></svg>
          ) : (
            <svg width="18" height="17" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M14 2H2c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM2 0h12c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H2c-1.1 0-2-.9-2-2V2c0-1.1.9-2 2-2z" fill="currentColor" />
            </svg>
          )}
        </CustomCheckBox>
      </CheckBoxWrapper>
      <CheckBoxLabel htmlFor={id}>{label}</CheckBoxLabel>
    </CheckBoxStyled>
  );
}

export default CheckBox;
