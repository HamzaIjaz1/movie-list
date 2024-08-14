import React from 'react';
import { PrimaryButton, WhiteButton } from './buttonStyles';

export const BUTTON_TYPE = {
    primary: 'primary_button',
    white: 'white_button'
};

const getButton = (buttonType = BUTTON_TYPE.primary) => (
    {
        [BUTTON_TYPE.primary]: PrimaryButton,
        [BUTTON_TYPE.white]: WhiteButton,
    }[buttonType]
);

const ThemeButton = ({ children, buttonType, ...otherProps }) => {
    const Button = getButton(buttonType);
    return (
        <Button {...otherProps}>
            {children}
        </Button>
    );
};

export default ThemeButton;
