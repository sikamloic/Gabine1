import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { LocalStorageService } from 'src/app/shares/services/local-storage.service';
import { UserService } from 'src/app/shares/services/user.service';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.page.html',
  styleUrls: ['./inscription.page.scss'],
})
export class InscriptionPage implements OnInit {

  focused : boolean;
  showPwd : boolean = false;
  registerForm : FormGroup
  constructor(
    private route : Router,
    private formbuilder : FormBuilder,
    private userService : UserService,
    private localStorage: LocalStorageService
  ) { 
    this.registerForm = this.formbuilder.group({
      nom: formbuilder.control(''),
      prenom: formbuilder.control(''),
      email: formbuilder.control(''),
      ville: formbuilder.control(''),
      tel: formbuilder.control(''),
      pwd: formbuilder.control('')
    })
  }

  signUp(){
    this.userService.userRegister(
      this.registerForm.value.nom,
      this.registerForm.value.prenom,
      this.registerForm.value.ville,
      this.registerForm.value.email,
      this.registerForm.value.pwd,
      this.registerForm.value.tel
      ).subscribe((res) =>{
        console.log(res);
        this.signIn();
      })
  }

  signIn(){
    this.userService.userLogin(
      this.registerForm.value.email,
      this.registerForm.value.pwd
    ).subscribe((res : any) =>{
      console.log(res)
      this.localStorage.set('x-access-token', res.accessToken);
      this.goTo()
    })
  }

  onBlur(e:any){
    const value = e.target.value;
    if (!value) {
      this.focused = false;
    }
  }

  cancel(e : any){
    console.log(e);
  }

  goTo(){
    this.route.navigateByUrl('/');
  }
  ngOnInit() {
  }

}
