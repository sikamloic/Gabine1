import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { LocalStorageService } from 'src/app/shares/services/local-storage.service';
import { UserService } from 'src/app/shares/services/user.service';

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.page.html',
  styleUrls: ['./connexion.page.scss'],
})
export class ConnexionPage implements OnInit {

  focused : boolean;
  showPwd = false;
  loginForm : FormGroup
  constructor(
    private route: Router,
    private formbuilder: FormBuilder,
    private localstorage: LocalStorageService,
    private userservices: UserService
  ) { 
    this.loginForm = this.formbuilder.group({
      email: formbuilder.control(''),
      pwd: formbuilder.control('')
    })
  }

  signIn(){
    this.userservices.userLogin(
      this.loginForm.value.email,
      this.loginForm.value.pwd
    ).subscribe((res : any) =>{
      console.log(res)
      this.localstorage.set('x-access-token', res.accessToken);
      this.goTo()
    })
  }

  onBlur(e : any){
    const value = e.target.value;
    if(!value){
      this.focused = false;
    }
  }

  goTo(){
    this.route.navigateByUrl('/');
  }

  ngOnInit() {
  }

}
