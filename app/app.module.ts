import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { SendMessage } from './send-message/send-message.component';
import { ReceiveMessage } from './receive-message/receive-message.component';

@NgModule({
  imports: [ BrowserModule ],
  declarations: [ AppComponent, SendMessage, ReceiveMessage ],
  bootstrap: [ AppComponent ]
})

export class AppModule {}