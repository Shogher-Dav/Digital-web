import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-channels-list',
  templateUrl: './channels-list.component.html',
  styleUrls: ['./channels-list.component.scss']
})
export class ChannelsListComponent implements OnInit {

  channels = [
    {
      favorite: false,
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
      favorite: false,
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
      favorite: false,
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
      favorite: false,
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
      favorite: false,
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

  constructor() { }

  ngOnInit(): void {
  }

  changeFavourite(channel: any) {
    channel.favourite = !channel.favourite;
  }

}
