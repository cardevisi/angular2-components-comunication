import { Component, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
    selector: 'send-message',
    templateUrl: './send-message.component.html'
})

export class SendMessage {
    @Output() sendMessage = new EventEmitter();
    currentMessage:string = "Hello!";

    constructor() {
        this.sendMessage.emit({msg:'SendByEmit'});
        console.log('SendMessage');
    }

    clickToSend(event) {
        event.preventDefault();
        this.sendMessage.emit({msg: this.currentMessage});
    };

    onSubmit(f: NgForm) {
        console.log(f.value);  // { first: '', last: '' }
        console.log(f.valid);  // false
        this.sendMessage.emit({msg: f.value});
    }
}