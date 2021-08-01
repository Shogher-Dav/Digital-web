import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscribable, Subscription } from 'rxjs';
import { MainService } from 'src/app/core/services/main.service';
import { MainComponent } from '../main/main.component';

@Component({
  selector: 'app-terms',
  templateUrl: './terms.component.html',
  styleUrls: ['./terms.component.scss']
})
export class TermsComponent implements OnInit, OnDestroy {
  termsAndPolicyText$ = this.mainService.termsAndPolicyText$;
  subS: Subscription;


  constructor(private mainService: MainService) { }


  ngOnInit(): void {
    this.subS = this.mainService.getTermsAndRules().subscribe();
  }


  ngOnDestroy(): void {
    this.subS.unsubscribe();
  }

}
