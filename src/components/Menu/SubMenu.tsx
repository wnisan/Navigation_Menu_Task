import React from 'react';
import type { MenuItemType } from '../../menuItems';
import MenuItem from './MenuItem';

interface SubMenuProps {
  items: MenuItemType[];
}

const SubMenu: React.FC<SubMenuProps> = ({ items }) => {
  return (
    <ul className="submenu">
        
      {items.map((item, index) => (
        <MenuItem 
          key={index} 
          item={item} 
        />
      ))}
    </ul>
  );
};

export default SubMenu;