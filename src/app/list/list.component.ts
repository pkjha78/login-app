import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

import {User} from "../model/user.model";
import { LoginService } from "../services/login.service";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  users: User[];

  constructor(private router: Router, private loginService: LoginService) { }

  ngOnInit() {
    if(!window.localStorage.getItem('token')) {
      this.router.navigate(['login']);
      return;
    }
    this.loginService.getUsers()
      .subscribe( data => {
          this.users = data.result;
      });
  }

  deleteUser(user: User): void {
    this.loginService.deleteUser(user.id)
      .subscribe( data => {
        this.users = this.users.filter(u => u !== user);
      })
  };

  editUser(user: User): void {
    window.localStorage.removeItem("editUserId");
    window.localStorage.setItem("editUserId", user.id.toString());
    this.router.navigate(['modify']);
  };

  addUser(): void {
    this.router.navigate(['register']);
  };

}
