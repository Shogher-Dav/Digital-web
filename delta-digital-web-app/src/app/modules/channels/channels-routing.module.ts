import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChannelsListComponent } from './channels-list/channels-list.component';
import { ChannelsComponent } from './channels.component';

const routes: Routes = [
  { path: '', component: ChannelsComponent },
  {path: 'favourite', component: ChannelsListComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChannelsRoutingModule { }
