import {MenuItemTypeEnum} from '@enums/menu-item-type.enum';

export class MenuItemModel {
  title: string;
  type: MenuItemTypeEnum;
  url: string;
  icon: string;
  items: MenuItemListModel[];

  constructor(
    title: string,
    type: MenuItemTypeEnum,
    url: string,
    icon: string,
    items: MenuItemListModel[] = [],
) {
    this.title = title;
    this.type = type;
    this.url = url;
    this.icon = icon;
    this.items = items;
  }
}

export class MenuItemListModel {
  title: string;
  url: string;

  constructor(
    title: string,
    url: string,
  ) {
    this.title = title;
    this.url = url;
  }
}
