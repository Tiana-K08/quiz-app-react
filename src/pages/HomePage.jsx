import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import client from '../services/contentful.js';

import styles from './Page.module.scss';

export default function HomePage() {
  const [firstStepId, setFirstStepId] = useState(null);

  useEffect(() => {
    client
      .getEntries({ content_type: 'step', order: 'fields.order', limit: 1 })
      .then((response) => {
        if (response.items.length > 0) {
          setFirstStepId(response.items[0].fields.stepId);
        }
      })
      .catch(console.error);
  }, []);

  return (
    <div className={styles.content}>
      <h1>Ласкаво просимо до вікторини &#127919;</h1>
      <p>Готовий перевірити свої знання та дізнатись результат?</p>
      <Link to={`/quiz/${firstStepId}`} className={styles.button}>
        Вперед!
      </Link>
    </div>
  );
}
