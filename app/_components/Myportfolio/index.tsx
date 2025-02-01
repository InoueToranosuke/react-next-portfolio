import React from 'react';
import styles from './index.module.css'; // CSS モジュールをインポート

const Myportfolio: React.FC = () => {
  const text = 'My Portfolio'; 

  return (
    <div>
      {text.split('').map((letter, index) => (
        <span
          key={index}
          className={styles.letter} // styles モジュールから letter クラスを参照
          style={{ animationDelay: `${index * 0.1}s` }} // 1.5秒の遅延を文字ごとに適用
        >
          {letter}
        </span>
      ))}
    </div>
  );
};

export default Myportfolio ;