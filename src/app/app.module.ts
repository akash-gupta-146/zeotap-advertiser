import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ViewComponent } from './view/view.component';
import { HttpClientModule } from '@angular/common/http';
import { DataService } from './data.service';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ViewComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
  ],
  providers: [
    DataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
