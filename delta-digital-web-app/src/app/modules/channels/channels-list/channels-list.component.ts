import { Component, HostListener, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subject, Subscription } from 'rxjs';
import { map, takeUntil, tap } from 'rxjs/operators';
import { IChannel } from 'src/app/core/interfaces/IChannel';
import { ChannelsService } from 'src/app/core/services/channels.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-channels-list',
  templateUrl: './channels-list.component.html',
  styleUrls: ['./channels-list.component.scss']
})
export class ChannelsListComponent implements OnInit, OnDestroy {

  channels: IChannel[];
  currentPage = 0;
  private unsubscribe$ = new Subject<void>();
  baseUrl = environment.baseUrl;

  isFavorite: boolean;



  channelObj = {
    favorite: true,
    id: 1,
    liveProgram: 'Հաղորդման անվանում',
    liveProgramTime: '10:15',
    logoId: 1,
    name: 'Հեռուստաալիքի անվանում',
    nextProgram: 'Հաղորդման անվանում',
    nextProgramTime: '11:15',
    url: "../../../assets/images/logo-channel.png"
  }





  videoItems = [
    {
      name: 'Video one',
      src: 'http://static.videogular.com/assets/videos/videogular.mp4',
      type: 'video/mp4'
    },
    {
      name: 'Video two',
      src: 'http://static.videogular.com/assets/videos/big_buck_bunny_720p_h264.mov',
      type: 'video/mp4'
    },
    {
      name: 'Video three',
      src: 'http://static.videogular.com/assets/videos/elephants-dream.mp4',
      type: 'video/mp4'
    }
  ];


  constructor(private channelsService: ChannelsService, private router: Router) { }

  ngOnInit(): void {

    const routeArr = this.router.url.split('/');
    if (routeArr[routeArr.length - 1] === 'favorite') {
      this.channelsService.getFavoriteChannels().pipe(takeUntil(this.unsubscribe$))
        .subscribe(res => {
          this.channels = res.content;
        });
    } else {

      this.channelsService.getChannels().pipe(takeUntil(this.unsubscribe$))
        .subscribe(res => {
          this.channels = res.content;
        });
    }
  }

  changeFavourite(channel: any) {
    if (!channel.favorite) {
      this.channelsService.addChannelToFavorite(channel.id).subscribe(res => {
        channel.favorite = true;
      });
    } else {
      this.channelsService.removeChannelFromFavorite(channel.id).subscribe(res => {
        channel.favorite = false;
        const routeArr = this.router.url.split('/');
        if (routeArr[routeArr.length - 1] === 'favorite') {
          this.channels = this.channels.filter(res => res.id !== channel.id);
        }
      });
    }
  }



  onScrollDown() {

    this.currentPage++;
    this.channelsService.getChannels(this.currentPage).pipe(
      takeUntil(this.unsubscribe$),
      tap(res => {
        res.content.map((x: any) => {
          this.channels.push(x);
        })
      })
    ).subscribe(res => {
      console.log(res);
    })
  }

  ngOnDestroy() {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

}
