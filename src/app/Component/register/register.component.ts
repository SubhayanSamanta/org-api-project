import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { AuthService } from 'src/app/Service/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  formInfo !: any;
  formDatas!: FormGroup;
  apiRes !: any;
  selectedImg !: File;

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
    this.formDatas = new FormGroup({
      first_name: new FormControl(''),
      last_name: new FormControl(''),
      email: new FormControl(''),
      password: new FormControl(''),
      // profile_pic: new FormControl(''),
    })
  }

  onFileSelection(event: any) {
    this.selectedImg = event?.target.files[0];
    console.log("The api response of selectedImg is : ", this.selectedImg);

  }

  submitData() {
    this.formInfo = this.formDatas.value;
    console.log("The submitted data is : ", this.formInfo);

    const formData: FormData = new FormData();
    formData.append('first_name', this.formInfo.first_name),
      formData.append('last_name', this.formInfo.last_name),
      formData.append('email', this.formInfo.email),
      formData.append('password', this.formInfo.email),
      formData.append('profile_pic', this.selectedImg,this.selectedImg.name)

    this.authService.registration(formData).subscribe((res) => {
      this.apiRes = res;
      console.log("The final API response is : ", this.apiRes);
      if (this.apiRes.status == 200) {
        alert("Registration done.");
        this.router.navigateByUrl('/login');
      }
      else {
        alert("Registration failed.");
      }
    })
  }

}
