import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';
import ImageUploader from '../imageUploader/imageUploader';
import ThemeButton, { BUTTON_TYPE } from '../themeButton/themeButton';
import ThemeInput from '../themeInput/themeInput';

const MovieWrapper = styled.div`
  ${tw`flex gap-[127px] mb-[89px]`}
`;
const ImageUploaderWrapper = styled.div`
  ${tw`w-[473px] h-[504px]`}
`;
const CreateMovieForm = styled.form`
  ${tw`w-[362px]`}
`;
const FormInputs = styled.div`
  ${tw`flex flex-col gap-[24px] mb-[64px]`}
  div:nth-child(2){
    ${tw`w-[216px]`}
  }
`;
const FormButtons = styled.div`
  ${tw`flex items-center gap-[16px]`}
  button:nth-child(2){
    ${tw`px-[59px]`}
  }
`;

function MovieForm() {
  return (
    <div>
      <div className="container">
        <MovieWrapper>
          <ImageUploaderWrapper>
            <ImageUploader title='Drop an image here' />
          </ImageUploaderWrapper>
          <CreateMovieForm action="">
            <FormInputs>
              <ThemeInput label='Title' type='title' name='title' />
              <ThemeInput label='Publishing year' type='year' name='year' />
            </FormInputs>
            <FormButtons>
              <ThemeButton buttonType={BUTTON_TYPE.white}>
                Cancel
              </ThemeButton>
              <ThemeButton buttonType={BUTTON_TYPE.primary}>
                Submit
              </ThemeButton>
            </FormButtons>
          </CreateMovieForm>
        </MovieWrapper>
      </div>
    </div>
  )
}

export default MovieForm