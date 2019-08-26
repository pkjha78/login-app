import { Injectable } from '@angular/core';

import { Router, NavigationStart } from '@angular/router';
import { Observable, Subject } from 'rxjs';
import { filter } from 'rxjs/operators';
//this is alert-emit interface
import { Alert } from '../alert/alert';




@Injectable()
export class AlertService {

    alertSettings$ = new Subject<Alert>();
    constructor(private router: Router) {

    }
    create(
    	title: string, type: string , time: number, body: string){
    	this.alertSettings$.next({
    		title,
    		type,
    		time,
    		body
    	});
    }

}
