import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-channels',
  templateUrl: './channels.component.html',
  styleUrls: ['./channels.component.scss']
})
export class ChannelsComponent implements OnInit {

  channels = [
    {
      favorite: true,
      id: 1,
      liveProgram: 'Հաղորդման անվանում',
      liveProgramTime: '10:15',
      logoId: 1,
      name: 'Հեռուստաալիքի անվանում',
      nextProgram: 'Հաղորդման անվանում',
      nextProgramTime: '11:15',
      url: "../../../assets/images/logo-channel.png"
    },

     {
      favorite: true,
      id: 1,
      liveProgram: 'Հաղորդման անվանում',
      liveProgramTime: '10:15',
      logoId: 1,
      name: 'Հեռուստաալիքի անվանում',
      nextProgram: 'Հաղորդման անվանում',
      nextProgramTime: '11:15',
      url: "../../../assets/images/logo-channel.png"
    },
    {
      favorite: true,
      id: 1,
      liveProgram: 'Հաղորդման անվանում',
      liveProgramTime: '10:15',
      logoId: 1,
      name: 'Հեռուստաալիքի անվանում',
      nextProgram: 'Հաղորդման անվանում',
      nextProgramTime: '11:15',
      url: "../../../assets/images/logo-channel.png"
    },

     {
      favorite: true,
      id: 1,
      liveProgram: 'Հաղորդման անվանում',
      liveProgramTime: '10:15',
      logoId: 1,
      name: 'Հեռուստաալիքի անվանում',
      nextProgram: 'Հաղորդման անվանում',
      nextProgramTime: '11:15',
      url: "../../../assets/images/logo-channel.png"
    },
    {
      favorite: true,
      id: 1,
      liveProgram: 'Հաղորդման անվանում',
      liveProgramTime: '10:15',
      logoId: 1,
      name: 'Հեռուստաալիքի անվանում',
      nextProgram: 'Հաղորդման անվանում',
      nextProgramTime: '11:15',
      url: "../../../assets/images/logo-channel.png"
    },

     {
      favorite: true,
      id: 1,
      liveProgram: 'Հաղորդման անվանում',
      liveProgramTime: '10:15',
      logoId: 1,
      name: 'Հեռուստաալիքի անվանում',
      nextProgram: 'Հաղորդման անվանում',
      nextProgramTime: '11:15',
      url: "../../../assets/images/logo-channel.png"
    },
    {
      favorite: true,
      id: 1,
      liveProgram: 'Հաղորդման անվանում',
      liveProgramTime: '10:15',
      logoId: 1,
      name: 'Հեռուստաալիքի անվանում',
      nextProgram: 'Հաղորդման անվանում',
      nextProgramTime: '11:15',
      url: "../../../assets/images/logo-channel.png"
    },

     {
      favorite: true,
      id: 1,
      liveProgram: 'Հաղորդման անվանում',
      liveProgramTime: '10:15',
      logoId: 1,
      name: 'Հեռուստաալիքի անվանում',
      nextProgram: 'Հաղորդման անվանում',
      nextProgramTime: '11:15',
      url: "../../../assets/images/logo-channel.png"
    },
    {
      favorite: true,
      id: 1,
      liveProgram: 'Հաղորդման անվանում',
      liveProgramTime: '10:15',
      logoId: 1,
      name: 'Հեռուստաալիքի անվանում',
      nextProgram: 'Հաղորդման անվանում',
      nextProgramTime: '11:15',
      url: "../../../assets/images/logo-channel.png"
    },

     {
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
  ];

  // videoItems = [
  //   {
  //     name: 'Video one',
  //     src: 'http://static.videogular.com/assets/videos/videogular.mp4',
  //     type: 'video/mp4'
  //   },
  //   {
  //     name: 'Video two',
  //     src: 'http://static.videogular.com/assets/videos/big_buck_bunny_720p_h264.mov',
  //     type: 'video/mp4'
  //   },
  //   {
  //     name: 'Video three',
  //     src: 'http://static.videogular.com/assets/videos/elephants-dream.mp4',
  //     type: 'video/mp4'
  //   }
  // ];

  // activeIndex = 0;
  // currentVideo = this.videoItems[this.activeIndex];
  // data:any;

  constructor() { }

  ngOnInit(): void {
  }


  // videoPlayerInit(data:any) {
  //   this.data = data;

  //   this.data.getDefaultMedia().subscriptions.loadedMetadata.subscribe(this.initVdo.bind(this));
  //   this.data.getDefaultMedia().subscriptions.ended.subscribe(this.nextVideo.bind(this));
  // }

  // nextVideo() {
  //   this.activeIndex++;

  //   if (this.activeIndex === this.videoItems.length) {
  //     this.activeIndex = 0;
  //   }

  //   this.currentVideo = this.videoItems[this.activeIndex];
  // }

  // initVdo() {
  //   this.data.play();
  // }

  // startPlaylistVdo(item:any, index: number) {
  //   this.activeIndex = index;
  //   this.currentVideo = item;
  // }


}
