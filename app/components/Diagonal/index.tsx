import React from 'react';
import styles from './index.module.css';

const DiagonalText: React.FC = () => {
  return (
    <div className={styles.container}>
      <p className={styles.diagonalText}>斜めラインのテキスト</p>
    </div>
  );
};

export default DiagonalText;
