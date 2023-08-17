import React, { useState } from 'react';
import styles from './Menu.module.scss';
import logo from 'src/images/logo.png';
import clsx from 'clsx';
import corner from 'src/images/corner.png';
import SvgSelector from '../../components/SvgSelector/SvgSelector';
import AdaptiveMenu from '../../components/AdaptiveMenu/AdaptiveMenu';

const Menu = ({}) => {
  const [isActiveMenu, setIsActiveMenu] = useState(false);

  const handleActiveMenu = () => {
    setIsActiveMenu(!isActiveMenu);
  };

  return (
    <div className={styles.wrapper}>
      <div className={clsx(styles.menu, 'main')}>
        <div className={styles.img}>
          <img src={logo} />
          <img src={corner} className={clsx('corner')} />
          <img src={corner} className={clsx('corner', 'bottom')} />
          <img src={corner} className={clsx('corner', 'right')} />
          <img src={corner} className={clsx('corner', 'right', 'bottom')} />
        </div>
        <div className={styles.menu_items}>
          <button onClick={handleActiveMenu}>
            <SvgSelector id={'burger'} className={styles.burger} />
          </button>
          <div
            className={
              isActiveMenu === true
                ? styles.menuAdaptive
                : styles.menuAdaptiveDisabled
            }
          >
            <AdaptiveMenu onClick={handleActiveMenu} />
          </div>
          <div className={styles.menu_item}>Главная</div>
          <div className={styles.menu_item}>Технологии</div>
          <div className={styles.menu_item}>График полетов</div>
          <div className={styles.menu_item}>Гарантии</div>
          <div className={styles.menu_item}>О компании</div>
          <div className={styles.menu_item}>Контакты</div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
