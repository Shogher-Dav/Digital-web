import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IChannel } from 'src/app/core/interfaces/IChannel';
import { ChannelsService } from 'src/app/core/services/channels.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-channel',
  templateUrl: './channel.component.html',
  styleUrls: ['./channel.component.scss']
})
export class ChannelComponent implements OnInit {

  baseUrl = environment.baseUrl;
  channel = new  IChannel();

  constructor(private channelsService: ChannelsService, private router: Router) {
    const routeArr = this.router.url.split('/');
    const id = routeArr[routeArr.length-1];
    this.channelsService.getChannelById(id).subscribe(res => {
      this.channel =  res;
    });
   }

  ngOnInit(): void {
  
  }

}
