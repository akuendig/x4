import {NgModule} from '@angular/core';
import {WareService} from './services/ware.service';
import {CoreModule} from '../core/core.module';
import {HeaderComponent} from './components/header.component';
import {BrowserModule} from '@angular/platform-browser';
import {MessagesComponent} from './components/messages.component';
import {RouterModule} from '@angular/router';
import {FormsModule} from '@angular/forms';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    CoreModule,
    RouterModule
  ],
  providers: [
    WareService
  ],
  declarations: [
    HeaderComponent,
    MessagesComponent
  ],
  exports: [
    HeaderComponent,
    MessagesComponent
  ]
})
export class SharedModule {
}