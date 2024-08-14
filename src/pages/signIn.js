import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';
import HeadingComponent from '../components/headingComponent/headingComponent';
import ThemeInput from '../components/themeInput/themeInput';
import ThemeButton, {BUTTON_TYPE} from '../components/themeButton/themeButton';
import CheckBox from '../components/checkBox/checkBox';

export const SignInPage = styled.div`
  ${tw`h-[calc(100vh - 111px)] pt-[100px] overflow-y-auto flex flex-col gap-[40px] items-center justify-center`};
  h1{
    ${tw`text-center mb-[40px]`}
  }
`;
export const Form = styled.form`
  ${tw`w-[300px] flex items-center flex-col gap-[24px]`};
`;

function SignIn() {
  return (
    <SignInPage>
      <HeadingComponent size='h1'>
        Sign in
      </HeadingComponent>
      <Form action="">
        <ThemeInput label='Email' type='email' name='email' />
        <ThemeInput label='Password' type='password' name='password' />
        <CheckBox label='Remember me' id='remember' name='remember' value='Remember me'/>
        <ThemeButton buttonType={BUTTON_TYPE.primary}>
          Login
        </ThemeButton>
      </Form>
    </SignInPage>
  )
}

export default SignIn