import {MenuItemTypeEnum} from '@enums/menu-item-type.enum';
import {MenuItemModel} from '@models/menu-item.model';
import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class MenuHelperService {

  menuItems = [
    new MenuItemModel(
      'Cats',
      MenuItemTypeEnum.Button,
      'cats',
      'sketch',
      []
    ),
  ];

  constructor() {
  }
}
