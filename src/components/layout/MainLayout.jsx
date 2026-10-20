import { Outlet } from 'react-router-dom';
import { Footer } from './Footer';
import { Navbar } from './Navbar';

export function MainLayout() {
  return <><Navbar /><main id="main-content"><Outlet /></main><Footer /></>;
}
