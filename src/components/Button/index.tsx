import React, { MouseEventHandler } from 'react';

import styles from './Button.module.css';

interface ButtonProps {
  children: string;
  onClick?: MouseEventHandler;
}

const Button = (props: ButtonProps) => {
  return (
    <div onClick={props.onClick} className={styles.button}>
      {props.children}
    </div>
  );
}

export default Button;