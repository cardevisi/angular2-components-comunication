import { Component, Output, EventEmitter, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { DataService } from "../data.service";


@Component({
    selector: 'send-message',
    templateUrl: './send-message.component.html'
})

export class SendMessage implements OnInit {
    @Output() sendMessage = new EventEmitter();
    currentMessage:string = "Hello!";
    message:string;

    constructor(private data: DataService) {
        //this.sendMessage.emit({msg:'SendByEmit'});
        //console.log('SendMessage');
    }

    clickToSend(event) {
        event.preventDefault();
        this.sendMessage.emit({msg: this.currentMessage});
    };

    onSubmit(f: NgForm) {
        console.log('f.value', f.value);  // { first: '', last: '' }
        //console.log(f.valid);  // false
        this.sendMessage.emit({msg: f.value});
        this.data.changeMessage(f.value.first);
    }

    ngOnInit() {
      this.data.currentMessage.subscribe(message => this.message = message)
    }
}