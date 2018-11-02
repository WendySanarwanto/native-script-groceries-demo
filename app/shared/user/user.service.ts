import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
// import * as firebase from "nativescript-plugin-firebase";
// const firebase = require("nativescript-plugin-firebase");

import { Observable } from "rxjs";
// import "rxjs/add/operator/do";
// import "rxjs/add/operator/map";

import { User } from '.';
import { Config } from '../config';

@Injectable()
export class UserService {
  constructor(private http: HttpClient) {
    console.log(`[DEBUG] - UserService.constructor is called !!!!!!!!!!!!!!!!!!!!!!!!!!!`);
    // firebase.init({
    //   persist: true      
    // }).then(instance => {
    //   console.log("firebase.init done");
    // }, error => {
    //   console.log(`firebase.init error: \n`);
    //   console.dir(error);
    // });
  }

  register(user: User) {//: Observable<Object> {
    // let headers = new HttpHeaders({
    //   "Content-Type": "application/json"
    // });
    // const data = {
    //   Username: user.email,
    //   Email: user.email,
    //   Password: user.password      
    // };
    // return this.http.post(
    //   `${Config.apiUrl}Users`,
    //   { data },
    //   { headers }
    // );
    // .catch(this.handleErrors);
    alert(`About to register: ${user.email}`);
  }

  // handleErrors(error) {
  //   console.log(JSON.stringify(error.json()));
  //   return Observable.throw(error);
  // }
}