import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { MessageModalComponent } from 'src/app/core/modals/error-modal/message-modal.component';
import { UserService } from 'src/app/core/services/user.service';

@Component({
  selector: 'app-personal-info',
  templateUrl: './personal-info.component.html',
  styleUrls: ['./personal-info.component.scss']
})
export class PersonalInfoComponent implements OnInit, OnDestroy {
  personalInfo: FormGroup;
  private unsubscribe$ = new Subject<void>();
  bsModalRef: BsModalRef;


  constructor(
    private router: Router,
    private fb: FormBuilder,
    private userService: UserService,
    private modalService: BsModalService,
    ) {
      
    this.personalInfo = this.fb.group({
      userName: ['', [ Validators.required,  Validators.pattern('[-_a-zA-Z]*')] ],
      surname: ['', [ Validators.required,  Validators.pattern('[-_a-zA-Z]*') ]],
      birthDate: ['', Validators.required]
    });


  }
  ngOnInit(): void {

    this.userService.getCurrentUser()
      .pipe(
        takeUntil(this.unsubscribe$)
      )
      .subscribe(res => {
        this.personalInfo.patchValue({
          userName: res.name,
          birthDate: res.birthDate,
          surname: res.surname
        });
      });
  }

  close() {
    this.router.navigate(["profile/config"]);
  }

  updateCurrentUser() {
    this.userService.updateCurrentUserInfo(this.personalInfo.value)
    .pipe(
      takeUntil(this.unsubscribe$)
    ).subscribe(
      res =>  {
        this.showYourModal('Անձնական տվյալները հաջողությամբ փոփոխվել են', 'success');
      },
      err => this.showYourModal('Անձնական տվյալները չեն փոփոխվել, խնդրում ենք փորձել կրկին', 'error'),
    );
  }

  showYourModal(message:string, type: string) {
    const initialState = {
        message,
        type
    };
    this.bsModalRef = this.modalService.show(MessageModalComponent, {initialState});
    this.bsModalRef.content.closeBtnName = 'Close';
}

  ngOnDestroy() {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }


}
