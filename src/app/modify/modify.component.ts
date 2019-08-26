import { Component, OnInit } from '@angular/core';

import {Router} from "@angular/router";
import {User} from "../model/user.model";
import { LoginService } from "../services/login.service";
import { AlertService } from '../services/alert.service';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {first} from "rxjs/operators";

@Component({
  selector: 'app-modify',
  templateUrl: './modify.component.html',
  styleUrls: ['./modify.component.scss']
})
export class ModifyComponent implements OnInit {

  user: User;
  editForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private alertService: AlertService, private router: Router, private loginService: LoginService) { }

  ngOnInit() {
    let userId = window.localStorage.getItem("editUserId");
    if(!userId) {
      alert("Invalid action.")
      this.router.navigate(['list']);
      return;
    }
    this.editForm = this.formBuilder.group({
      id: [''],
      username: ['', Validators.required],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      age: ['', Validators.required],
      salary: ['', Validators.required]
    });
    this.loginService.getUserById(+userId)
      .subscribe( data => {
        this.editForm.setValue(data.result);
      });
  }

  onSubmit() {
    this.loginService.updateUser(this.editForm.value)
      .pipe(first())
      .subscribe(
        data => {
          if(data.status === 200) {
            //alert('User updated successfully.');
            
              this.alertService.create(
              "Add User", //title
              "danger", //type
              5000, // time
              "User updated successfully." //body

            );

            this.router.navigate(['list']);
          } else {
            alert(data.message);
          }
        },
        error => {
          alert(error);
        });
  }

}
