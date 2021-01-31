import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CompaniesHelperService {

  listOfColumns = [
    {
      title: 'Image',
      width: '100px'
    },
    {
      title: 'Name',
      width: '200px'
    },
    {
      title: 'Description',
      width: 'auto'
    },
    {
      title: 'Like',
      width: '100px'
    },
    {
      title: 'Actions',
      width: '300px'
    }
  ];

  tableScroll = {
    x: '1280px'
  };

  constructor() {
  }
}
