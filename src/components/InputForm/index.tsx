import { isEmail } from 'class-validator';
import React, { ChangeEvent, MouseEvent, useState } from 'react';
import Button from '../Button';
import Input from '../Input';

import styles from './InputForm.module.css';

interface InputFormProps { }

const InputForm = (props: InputFormProps) => {

  const [value, setValue] = useState('');
  const [error, setError] = useState(false);

  const onInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    setError(false);
    setValue(event.currentTarget.value);
  }

  const OnButtonClick = (event: MouseEvent<HTMLDivElement>) => {
    console.log('OnButtonClick');
    console.log({ email: value, valid: isEmail(value) });
    event.preventDefault();
    setError(!isEmail(value));
  }

  return (
    <div className={styles.inputForm}>
      <div className={styles.input}><Input value={value} onChange={onInputChange}/></div>
      <div className={styles.button}><Button onClick={OnButtonClick}>Request Access</Button></div>
      <div className={`${styles.message} ${error && styles.visible}`}><p>Oops! Please check your email</p></div>
    </div>
  );
};

export default InputForm;