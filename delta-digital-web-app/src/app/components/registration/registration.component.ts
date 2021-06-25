import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {


  userFormGroup: FormGroup;


  constructor(private fb: FormBuilder) {
    this.userFormGroup = this.fb.group({
      id: [null],
      birthDate: [null, Validators.required],
      email: [null, Validators.required],
      name: [null, Validators.required],
      password: [null, Validators.required],
      phoneNumber: [null, Validators.required],
      surname: [null, Validators.required],
    })
  }

  ngOnInit(): void {


  }

}
