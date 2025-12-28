import { Link } from 'react-router-dom';

import styles from './Page.module.scss';

export default function HomePage() {
  return (
    <div className={styles.content}>
      <h1>Ласкаво просимо до вікторини &#127919;</h1>
      <p>Готовий перевірити свої знання та дізнатись результат?</p>
      <Link to="/quiz" className={styles.button}>
        Вперед!
      </Link>
    </div>
  );
}
