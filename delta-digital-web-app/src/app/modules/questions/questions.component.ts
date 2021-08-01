import { Component, OnInit } from '@angular/core';
import { MainService } from 'src/app/core/services/main.service';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.scss']
})
export class QuestionsComponent implements OnInit {




  constructor(private mainService: MainService) { }

  ngOnInit(): void {
    this.mainService.showLogin$.next(true);

  }

}
