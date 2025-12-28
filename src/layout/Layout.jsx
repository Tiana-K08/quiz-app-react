import { Outlet } from 'react-router-dom';

import styles from './Layout.module.scss';

export default function Layout() {
  return (
    <div className={styles.page}>
      <main className={styles.container}>
        <Outlet />
      </main>
    </div>
  );
}
