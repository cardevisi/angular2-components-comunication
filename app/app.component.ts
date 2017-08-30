import { Component } from '@angular/core';
import { User } from './share/models/user';
import { DataService } from "./data.service";

@Component({
  selector: 'app',
  providers: [DataService],
  templateUrl: './app.component.html',
  styles: [`
    body {
      
    }
  `]
})

export class AppComponent {
  activeUser = User;
  
  users: User[] = [
      {id: 10, name: 'Charles', username: 'servilcha'},
      {id: 25, name: 'Ester', username: 'servilester'},
      {id: 30, name: 'Francis', username: 'servilfrancis'}
  ];
  
  selectUser(user) {
    this.activeUser = user;
    console.log(this.activeUser);
  };

  onSendMessage(msg) {
    console.log(':: AppComponent => onSendMessage =>', msg);
  };
}