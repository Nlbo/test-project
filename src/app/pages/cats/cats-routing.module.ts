import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ManageTypesEnum} from '@enums/manage-types.enum';
import {CatsComponent} from '@pages/cats/cats.component';
import {ListComponent} from '@pages/cats/pages/list/list.component';
import {ManageComponent} from '@pages/cats/pages/manage/manage.component';

const routes: Routes = [{
  path: '',
  component: CatsComponent,
  children: [
    {
      path: 'list',
      component: ListComponent
    },
    {
      path: ManageTypesEnum.Add,
      component: ManageComponent
    },
    {
      path: `${ManageTypesEnum.Edit}/:id`,
      component: ManageComponent
    },
    {
      path: `${ManageTypesEnum.Preview}/:id`,
      component: ManageComponent
    },
    {
      path: '**',
      redirectTo: 'list',
      pathMatch: 'full'
    }
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CatsRoutingModule {
}
