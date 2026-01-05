import { Link } from 'react-router-dom';

import styles from './Page.module.scss';

export default function ErrorPage() {
  return (
    <div className={styles.errorPage}>
      <h1>Щось пішло не так... &#128533;</h1>
      <Link to="/" className={styles.button}>
        Повернутись на головну
      </Link>
    </div>
  );
}
