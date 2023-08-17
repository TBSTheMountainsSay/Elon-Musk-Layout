import React, { useState } from 'react';
import styles from './Cell.module.scss';
import clsx from 'clsx';

const Cell = ({ text_upper, title, extraTitle, text_bottom }) => {
  const handleMouseMove = (event) => {
    const { currentTarget: target } = event;
    const rect = target.getBoundingClientRect(),
      x = event.clientX - rect.left,
      y = event.clientY - rect.top;

    target.style.setProperty('--mouse-x', `${x}px`);
    target.style.setProperty('--mouse-y', `${y}px`);
  };

  return (
    <div className={styles.cell} onMouseMove={handleMouseMove}>
      <div className={clsx(styles.text, styles.text_upper)}>{text_upper}</div>
      <div className={styles.titleWrapper}>
        <div className={styles.title}>{title}</div>
        <div className={styles.extraTitle}>{extraTitle}</div>
      </div>
      <div className={clsx(styles.text, styles.text_bottom)}>{text_bottom}</div>
    </div>
  );
};

export default Cell;
