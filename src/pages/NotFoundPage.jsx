import { Link } from 'react-router-dom';

import styles from './Page.module.scss';

export default function NotFound() {
  return (
    <div className={styles.content}>
      <h1>Щось пішло не так... &#128533;</h1>
      <p>Ми не змогли знайти сторінку</p>
      <Link to="/" className={styles.button}>
        Повернутись на головну
      </Link>
    </div>
  );
}
