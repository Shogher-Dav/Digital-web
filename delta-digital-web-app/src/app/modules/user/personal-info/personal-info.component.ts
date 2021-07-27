import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-personal-info',
  templateUrl: './personal-info.component.html',
  styleUrls: ['./personal-info.component.scss']
})
export class PersonalInfoComponent implements OnInit {
  personalInfo: FormGroup;

  constructor(private router: Router,
    private fb: FormBuilder) {
    this.personalInfo = this.fb.group({
      name: ['', Validators.required],
      surname: ['', Validators.required],
      date: ['', Validators.required]
    })
  }
  ngOnInit(): void {
  }

  close() {
    this.router.navigate(["profile/config"]);
  }

}
