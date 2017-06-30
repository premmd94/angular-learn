import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/Router';
import { appRoute } from './app.routes';
import { AngularFireModule } from 'angularfire2';
// New imports to update based on AngularFire2 version 4
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { LoginComponent } from './login/login.component';
import { JqueryDirective } from './jquery.directive';
export const firebaseConfig = {
 apiKey: "AIzaSyCj2UKL2XGggKCHHbTHMjAD640zljZze-E",
    authDomain: "angular-learn-b8108.firebaseapp.com",
    databaseURL: "https://angular-learn-b8108.firebaseio.com",
    projectId: "angular-learn-b8108",
    storageBucket: "angular-learn-b8108.appspot.com",
    messagingSenderId: "569459176697"
};
@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    LoginComponent,
    JqueryDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(firebaseConfig),
    RouterModule.forRoot(appRoute)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
