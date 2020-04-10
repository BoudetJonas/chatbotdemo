import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChatModule } from './chat/chat.module';
import { LoaderComponent } from './loader/loader.component';
import { NgxAutoScrollModule } from 'ngx-auto-scroll';

@NgModule({
  declarations: [
    AppComponent,
    LoaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ChatModule,
    NgxAutoScrollModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
