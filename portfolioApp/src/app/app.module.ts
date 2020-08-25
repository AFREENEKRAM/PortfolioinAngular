import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { OutletCompoComponent } from './outlet-compo/outlet-compo.component';
import { HeaderCompoComponent } from './header-compo/header-compo.component';
import { FooterCompoComponent } from './footer-compo/footer-compo.component';
import { WelcomeCompoComponent } from './welcome-compo/welcome-compo.component';

@NgModule({
  declarations: [
    AppComponent,
    OutletCompoComponent,
    HeaderCompoComponent,
    FooterCompoComponent,
    WelcomeCompoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
