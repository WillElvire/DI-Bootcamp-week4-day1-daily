import { Component } from '@angular/core';
import { user } from '../types';

@Component({
  selector: 'app-user-profile-component',
  template : `
  <h1> {{getFullName()}}</h1>
  <img [src]="User.profilePictureUrl">
  `,
  styleUrls: ['./user-profile-component.component.scss']
})
export class UserProfileComponentComponent {

  User : user = {
    firstname    : "Wilfried",
    lastname     : "Koua",
    profilePictureUrl : "/assets/picture.jpeg"
  } ;



  getFullName(){
    return this.User.firstname+" "+this.User.lastname;
  }

}
