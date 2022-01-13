import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { ChildComponent } from './child.component';
import { HttpClientModule } from '@angular/common/http';
import { DataService } from './data.service';
@NgModule({
  imports: [BrowserModule, FormsModule, HttpClientModule],
  declarations: [AppComponent, HelloComponent, ChildComponent],
  providers: [DataService],
  bootstrap: [AppComponent],
})
export class AppModule {}
