import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { MessageModalComponent } from 'src/app/core/modals/error-modal/message-modal.component';
import { UserService } from 'src/app/core/services/user.service';

@Component({
  selector: 'app-email-change',
  templateUrl: './email-change.component.html',
  styleUrls: ['./email-change.component.scss']
})
export class EmailChangeComponent implements OnInit {

  emailGroup: FormGroup;
  bsModalRef: BsModalRef;


  constructor(
    private router: Router,
    private userService: UserService,
    private fb: FormBuilder,
    private modalService: BsModalService,
    ) { 
      this.emailGroup = this.fb.group({
        email: ['', [ Validators.required, Validators.email ]]
      });
    }

  ngOnInit(): void {}

  changeEmail() {

    this.userService.changeEmail(this.emailGroup.value.email)
    .subscribe(
      res =>  {
        this.showYourModal('Էլեկտրոնային փոստը հաջողությամբ փոփոխվել է', 'success');
      },
      err => this.showYourModal('Էլեկտրոնային փոստը չի փոփոխվել, խնդրում ենք փորձել կրկին', 'error'),
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

  close() {
    this.router.navigate(['profile/config']);
  }

}
