import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { AuthService } from 'src/app/Service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginData !: FormGroup;
  loginApiRes !: any;
  colLoginData !:any;

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    this.loginData = new FormGroup({
      email: new FormControl(''),
      password: new FormControl('')
    })
  }

  submitLoginData() {
    console.log("The loginData is : ", this.loginData.value);
    this.colLoginData = this.loginData.value;
    this.authService.login(this.colLoginData).subscribe((resp) => {
      this.loginApiRes = resp;
      console.log("The loginApiRes is : ", this.loginApiRes);
    })
  }
}
