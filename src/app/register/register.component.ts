import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import { LoginService } from "../services/login.service";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  addForm: FormGroup;

  constructor(private formBuilder: FormBuilder,private router: Router, private loginService: LoginService) { }

  ngOnInit() {
    this.addForm = this.formBuilder.group({
      id: [],
      username: ['', Validators.compose([Validators.required])],
      password: ['', Validators.required],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      age: ['', Validators.required],
      salary: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.addForm.invalid) {
      return;
    }
    this.loginService.createUser(this.addForm.value)
      .subscribe( data => {
        this.router.navigate(['list']);
      });
  }

}
