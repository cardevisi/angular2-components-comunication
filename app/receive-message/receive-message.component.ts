import { Component, Input } from '@angular/core';

@Component({
    selector: 'receive-message',
    templateUrl: './receive-message.component.html'
})

export class ReceiveMessage {
    @Input() receiveMessage :string = 'aqui';
}