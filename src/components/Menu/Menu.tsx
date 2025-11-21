import React from 'react';
import type { MenuItemType } from '../../menuItems';
import MenuItem from './MenuItem';

interface MenuProps {
    items: MenuItemType[];
}

const Menu: React.FC<MenuProps> = ({items}) => {
    return(
      <nav className="menu">
      <ul className="menu-list">
       {items.map((item,index) => (
        <MenuItem
        key={index}
        item={item}
        />
       ))}
      </ul>
    </nav>
    );
};

export default Menu;