"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var SendMessage = (function () {
    function SendMessage() {
        this.sendMessage = new core_1.EventEmitter();
        this.currentMessage = "Hello!";
        this.sendMessage.emit({ msg: 'SendByEmit' });
        console.log('SendMessage');
    }
    SendMessage.prototype.clickToSend = function (event) {
        event.preventDefault();
        this.sendMessage.emit({ msg: this.currentMessage });
    };
    ;
    SendMessage.prototype.onSubmit = function (f) {
        console.log(f.value); // { first: '', last: '' }
        console.log(f.valid); // false
        this.sendMessage.emit({ msg: f.value });
    };
    __decorate([
        core_1.Output(),
        __metadata("design:type", Object)
    ], SendMessage.prototype, "sendMessage", void 0);
    SendMessage = __decorate([
        core_1.Component({
            selector: 'send-message',
            templateUrl: './send-message.component.html'
        }),
        __metadata("design:paramtypes", [])
    ], SendMessage);
    return SendMessage;
}());
exports.SendMessage = SendMessage;
//# sourceMappingURL=send-message.component.js.map