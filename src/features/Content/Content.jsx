import React from 'react';
import styles from './Content.module.scss';
import Mars from 'src/images/travelToMars.png';
import corner from 'src/images/corner.png';
import pointer from 'src/images/pointer.png';
import clsx from 'clsx';
import Cell from '../../components/Cell/Cell';

const Content = ({}) => {
  return (
    <div className={'main'}>
      <div className={styles.content}>
        <div className={styles.left_side}>
          <img src={Mars} className={styles.img} />
          <div className={styles.text_wrapper}>
            <div className={clsx(styles.title, styles.gradient)}>
              ПУТЕШЕСТВИЕ
            </div>
            <div className={clsx(styles.text, styles.gradient)}>
              на красную планету
            </div>
          </div>
          <div className={styles.button_wrapper}>
            <button className={styles.button}>Начать путешествие</button>
            <img src={corner} className={clsx('corner', 'bottom')} />
            <img src={corner} className={clsx('corner', 'right')} />
          </div>
          <img src={pointer} className={styles.pointer} />
        </div>
        <div className={styles.right_side}>
          <Cell text_upper={'мы'} title={'1'} text_bottom={'на рынке'} />
          <Cell
            text_upper={'гарантируем'}
            title={'50%'}
            text_bottom={'безопасность'}
          />
          <Cell
            text_upper={'календарик за'}
            title={'2001'}
            text_bottom={'в подарок'}
          />
          <Cell text_upper={'путешествие'} title={'597'} text_bottom={'дней'} />
        </div>
      </div>
    </div>
  );
};

export default Content;
