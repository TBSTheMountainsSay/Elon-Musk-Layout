import React from 'react';
import styles from './AdaptiveMenu.module.scss';
import SvgSelector from '../SvgSelector/SvgSelector';

const AdaptiveMenu = ({ onClick }) => {
  return (
    <div className={styles.adaptive_menu}>
      <button onClick={onClick} className={styles.menu_button}>
        <SvgSelector id={'close'} className={styles.svg} />
      </button>
      <div className={styles.menu_item}>Главная</div>
      <div className={styles.menu_item}>Технологии</div>
      <div className={styles.menu_item}>График полетов</div>
      <div className={styles.menu_item}>Гарантии</div>
      <div className={styles.menu_item}>О компании</div>
      <div className={styles.menu_item}>Контакты</div>
    </div>
  );
};

export default AdaptiveMenu;
