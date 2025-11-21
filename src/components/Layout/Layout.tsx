import React from 'react';
import { Outlet } from 'react-router-dom'; // подставляется контент текущей страницы
import Menu from '../Menu/Menu';
import { menuItem } from '../../menuItems';

const Layout: React.FC = () => {
    return(
        <div className="layout">
        <header className="header">
        <h1>My app on React</h1>
       
        <Menu items={menuItem} />
      </header>
      
      <main className="main-content">
        <Outlet />
      </main>
      
      <footer className="footer">
        <p>2024 My app</p>
      </footer>
    </div>
    );
};

export default Layout;