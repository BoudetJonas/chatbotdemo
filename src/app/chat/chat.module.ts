import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ChatDialogComponent} from './chat-dialog/chat-dialog.component';
import {ChatService} from './chat.service';
import {FormsModule} from '@angular/forms';
import {NgxAutoScrollModule} from 'ngx-auto-scroll';


@NgModule({
  declarations: [ChatDialogComponent],
    imports: [
        CommonModule,
        FormsModule,
        NgxAutoScrollModule
    ],
  exports: [
    ChatDialogComponent
  ],
  providers: [
    ChatService
  ]
})
export class ChatModule {
}
