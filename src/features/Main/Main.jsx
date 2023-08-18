import React from 'react';
import Menu from '../Menu/Menu';
import Content from '../Content/Content';
import styles from './Main.module.scss';

const Main = ({}) => {
  return (
    <div className={styles.main}>
      <Menu />
      <Content />
    </div>
  );
};

export default Main;
