import { Outlet } from 'react-router-dom';

import styles from '../Page.module.scss';

export default function QuizLayout() {
  return (
    <div className={styles.content}>
      <Outlet />
    </div>
  );
}
