import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-email-change',
  templateUrl: './email-change.component.html',
  styleUrls: ['./email-change.component.scss']
})
export class EmailChangeComponent implements OnInit {

  constructor( private router: Router) { }

  ngOnInit(): void {
  }

  close() {
    this.router.navigate(['profile/config'])

  }

}
