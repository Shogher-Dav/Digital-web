import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChannelComponent } from './channel/channel.component';
import { ChannelsComponent } from './channels.component';
import { MyListComponent } from './my-list/my-list.component';

const routes: Routes = [
  { path: '', component: ChannelsComponent },
  { path: 'favourite', component: MyListComponent },
  { path: 'channel', component: ChannelComponent },
  { path: 'favourite/channel', redirectTo: 'channel' }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChannelsRoutingModule { }
