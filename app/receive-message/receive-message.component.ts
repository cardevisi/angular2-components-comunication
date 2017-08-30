import { Component, Input , OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { DataService } from "../data.service";

@Component({
    selector: 'receive-message',
    templateUrl: './receive-message.component.html'
})

export class ReceiveMessage  implements OnInit {
    @Input() receiveMessage :string = 'Hello';

    message:string;

    constructor(private data: DataService) { }

    onSubmit(f: NgForm) {
        this.data.changeMessage(f.value.receive-text);
    }
    
    ngOnInit() {
        this.data.currentMessage.subscribe(message => this.message = message)
    }
}