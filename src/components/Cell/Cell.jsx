import React from 'react';
import styles from './Cell.module.scss';
import clsx from 'clsx';

const Cell = ({ text_upper, title, text_bottom }) => {
  return (
    <div className={styles.cell}>
      <div className={clsx(styles.text, styles.text_upper)}>{text_upper}</div>
      <div className={styles.title}>{title}</div>
      <div className={clsx(styles.text, styles.text_bottom)}>{text_bottom}</div>
    </div>
  );
};

export default Cell;
