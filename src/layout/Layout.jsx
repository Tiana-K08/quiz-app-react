import { Outlet } from 'react-router-dom';

export default function Layout() {
  return (
    <main className="main-wrapper">
      <Outlet />
    </main>
  );
}
