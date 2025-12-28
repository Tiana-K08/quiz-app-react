import { useEffect } from 'react';
import client from '../services/contentful';

import styles from './Page.module.scss';

export default function QuizPage() {
  useEffect(() => {
    client
      .getEntries()
      .then((response) => console.log(response.items))
      .catch(console.error);
  }, []);

  return (
    <div className={styles.content}>
      <h1>Quiz ...</h1>
    </div>
  );
}
