import React from 'react';
import styles from './news.module.scss';
import RecommendCard from '../../components/RecommendCard/recommendcard';

function News() {
  return (<>
    <div className={styles.container}>
      <div className={styles.recommend}>
        <RecommendCard />
        <RecommendCard />
        <RecommendCard />
      </div>
    </div>
    </>);
}

export default News