import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import * as firebase from 'nativescript-plugin-firebase';
import { createUser, CreateUserOptions, User as FirebaseUser } from 'nativescript-plugin-firebase';

// import firebase = require("nativescript-plugin-firebase");

import { Observable } from "rxjs";
// import "rxjs/add/operator/do";
// import "rxjs/add/operator/map";

import { User } from '.';
import { Config } from '../config';

@Injectable()
export class UserService {
  constructor(private http: HttpClient) {
    console.log(`[DEBUG] - UserService.constructor is called !!!!!!!!!!!!!!!!!!!!!!!!!!!`);
  }

  register(user: User): Promise<FirebaseUser> {
    const createUserParam: CreateUserOptions = {
      email: user.email,
      password: user.password
    };
    return createUser(createUserParam)
  }

  // handleErrors(error) {
  //   console.log(JSON.stringify(error.json()));
  //   return Observable.throw(error);
  // }
}