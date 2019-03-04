import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {HttpClient, HttpClientModule} from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {



  loginForm;


  constructor(private http: HttpClientModule, private h: HttpClient) {
      this.h.post('http://jwt.test/oauth/token', {}, {})
          .subscribe(
              res => console.log
          );
  }
  
  
  ngOnInit() {
    console.log('src/app/login/login.component.ts:11 run ngOnInit');
  }


  generateForm() {
    this.loginForm = new FormGroup({
        'email' : new FormControl('kunszt.norbert@gmail.com' ),
        'password' : new FormControl('123456789' )
    });
  }



}
