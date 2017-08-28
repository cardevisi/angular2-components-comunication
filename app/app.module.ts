import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { SendMessage } from './send-message/send-message.component';
import { ReceiveMessage } from './receive-message/receive-message.component';

@NgModule({
  imports: [ BrowserModule, FormsModule ],
  declarations: [ 
    SendMessage, 
    ReceiveMessage, 
    AppComponent 
  ],
  bootstrap: [ AppComponent ]
})

export class AppModule {}