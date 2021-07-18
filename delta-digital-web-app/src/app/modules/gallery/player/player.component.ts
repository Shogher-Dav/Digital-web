import { AfterContentChecked, AfterViewInit, Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.scss']
})
export class PlayerComponent implements OnInit, AfterViewInit, AfterContentChecked {


  isSerialPage = false;

  constructor( private route: Router) { }
  ngAfterContentChecked(): void {
    console.log('After contnet checked playeri mej')

    const url = this.route.url.split('/')[3];
    console.log(url);
    
    if(url !== undefined && url === 'series') {
      this.isSerialPage = true;
    }

  }
  ngAfterViewInit(): void {
  //  throw new Error('Method not implemented.');\
    console.log('View init playeri mej')

  }
  ngOnChanges(changes: SimpleChanges): void {
  //  throw new Error('Method not implemented.');
    console.log('Changes playeri mej')

  }

  ngOnInit(): void {

    console.log('playeri mej')
  }

}
