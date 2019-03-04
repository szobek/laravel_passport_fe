import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {AuthService} from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {



  loginForm;


  constructor(private auth: AuthService) {
    console.log('src/app/login/login.component.ts:11 run login', auth);
      auth.run();
  }
  
  
  ngOnInit() {
    console.log('src/app/login/login.component.ts:11 run login');
  }


  generateForm() {
    this.loginForm = new FormGroup({
        'email' : new FormControl('kunszt.norbert@gmail.com' ),
        'password' : new FormControl('123456789' )
    });
  }



}
