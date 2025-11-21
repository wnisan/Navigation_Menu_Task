export interface MenuItemType {
    name: string;
    link?: string;
    items?: MenuItemType[]; 
}

export const menuItem: MenuItemType[] = [
    {
    name: "Главная",
    link: "/",
    items: [] 
  },
  {
    name: "Новости", 
    items: [   
      {
        name: "Срочные новости",
        link: "/news/breaking",
        items: []
      },
      {
        name: "Популярные новости", 
        link: "/news/popular",
        items: []
      }
    ]
  },
  {
    name: "О нас",
    link: "/about",
    items: [
      {
        name: "Команда",
        link: "/about/team",
        items: []
      },
      {
        name: "Контакты",
        link: "/about/contacts", 
        items: []
      }
    ]
  }
];