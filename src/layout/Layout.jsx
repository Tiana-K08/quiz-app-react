import { Outlet } from 'react-router-dom';

import styles from './Layout.module.scss';

export default function Layout() {
  return (
    <div className={styles.pageWrapper}>
      <main className={styles.mainWrapper}>
        <Outlet />
      </main>
    </div>
  );
}
