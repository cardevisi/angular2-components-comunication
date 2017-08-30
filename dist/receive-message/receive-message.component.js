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
var data_service_1 = require("../data.service");
var ReceiveMessage = (function () {
    function ReceiveMessage(data) {
        this.data = data;
        this.receiveMessage = 'Hello';
    }
    ReceiveMessage.prototype.onSubmit = function (f) {
        this.data.changeMessage(f.value.receive - text);
    };
    ReceiveMessage.prototype.ngOnInit = function () {
        var _this = this;
        this.data.currentMessage.subscribe(function (message) { return _this.message = message; });
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], ReceiveMessage.prototype, "receiveMessage", void 0);
    ReceiveMessage = __decorate([
        core_1.Component({
            selector: 'receive-message',
            templateUrl: './receive-message.component.html'
        }),
        __metadata("design:paramtypes", [data_service_1.DataService])
    ], ReceiveMessage);
    return ReceiveMessage;
}());
exports.ReceiveMessage = ReceiveMessage;
//# sourceMappingURL=receive-message.component.js.map