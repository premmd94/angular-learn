import { Component, OnInit, HostBinding } from '@angular/core';
import { AngularFire, AuthProviders, AuthMethods } from 'angularfire2';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 error: any;
  constructor(private formbuilder: FormBuilder, public af: AngularFire,private router: Router) {
     this.af.auth.subscribe(auth => { 
      if(auth) {
        this.router.navigateByUrl('/members');
      }
      });
   }
    loginFb() {
    this.af.auth.login({
      provider: AuthProviders.Facebook,
      method: AuthMethods.Popup,
    }).then(
        (success) => {
        this.router.navigate(['/members']);
      }).catch(
        (err) => {
        this.error = err;
      })
  }

  loginGoogle() {
    this.af.auth.login({
      provider: AuthProviders.Google,
      method: AuthMethods.Popup,
    }).then(
        (success) => {
        this.router.navigate(['/members']);
      }).catch(
        (err) => {
        this.error = err;
      })
  }

  logIn: FormGroup;
  
  ngOnInit() {
    this.logIn = this.formbuilder.group(
    {
      name: [null, Validators.required],
      password: [null, Validators.required]
    }
  )
  }
  onSubmit(){
    console.log(this.logIn.value);
  }
}
