import React, { ChangeEventHandler } from 'react';

import styles from './Input.module.css';

interface InputProps {
  value: string;
  onChange: ChangeEventHandler;
}

const Input = (props: InputProps) => {
  return (
    <input className={styles.input} placeholder='Email address' onChange={props.onChange} value={props.value}/>
  );
}

export default Input;