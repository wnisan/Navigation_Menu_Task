import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import type { MenuItemType } from '../../menuItems';
import SubMenu from './SubMenu';

interface MenuItemProps {
    item: MenuItemType;
}

const MenuItem: React.FC<MenuItemProps> = ({item}) => {
    // State for controlling submenu visibility
    const [isSubMenuOpen, SetIsSubMenuOpen] = useState(false);

    const toggleSubMenu = () => {
        SetIsSubMenuOpen(!isSubMenuOpen);
    }

    // Check if menu item has submenu items
    const hasSubMenu = item.items && item.items.length > 0;

    return(
         <li className="menu-item">
        {hasSubMenu ? (
        <button 
          className="menu-button"
          onClick={toggleSubMenu}  
        >
          {item.name}
          <span className={`arrow ${isSubMenuOpen ? 'open' : ''}`}>
            ▼
          </span>
        </button>
        ) : item.link ? (
        <Link 
          to={item.link} 
          className="menu-link"
        >
          {item.name}
        </Link>
        ) : (
        <span className="menu-link">
          {item.name}
        </span>
      )}
      
      {hasSubMenu && isSubMenuOpen && item.items && (
        <SubMenu items={item.items} />
      )}
    </li>
    );
};

export default MenuItem;