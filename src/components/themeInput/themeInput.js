import React, { useState } from 'react'
import { InputWrapper, FormInputLabel, Input } from './inputStyles'

function ThemeInput({ label, ...rest }) {
  const [value, setValue] = useState('');

  const handleChange = (e) => {
    setValue(e.target.value);
  };
  const shrink = value.length > 0;
  return (
    <InputWrapper>
      <Input {...rest} value={value} shrink={shrink} onChange={handleChange} />
      <FormInputLabel shrink={shrink}>
          {label}
      </FormInputLabel>
    </InputWrapper>
  )
}

export default ThemeInput