import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { OutletCompoComponent } from './outlet-compo/outlet-compo.component';
import { HeaderCompoComponent } from './header-compo/header-compo.component';
import { FooterCompoComponent } from './footer-compo/footer-compo.component';
import { CustomizeModuleModule } from './CustomizeModule/customize-module.module'
import { DevExtremeModule } from './AngularModules/dev-extreme/dev-extreme.module';



@NgModule({
  declarations: [
    AppComponent,
    OutletCompoComponent,
    HeaderCompoComponent,
    FooterCompoComponent,
    
  ],
  imports: [
    BrowserModule,
    CustomizeModuleModule,
    
    /**** DevEx ******/
  
    DevExtremeModule 
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
