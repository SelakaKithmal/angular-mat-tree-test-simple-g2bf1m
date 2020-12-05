import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatCheckboxModule, MatIconModule } from '@angular/material';
import { MatTreeModule } from '@angular/material/tree';
import { DataService } from './data.service';

@NgModule({
  imports: [BrowserModule, FormsModule, BrowserAnimationsModule, MatButtonModule, MatCheckboxModule, MatTreeModule, MatIconModule],
  declarations: [AppComponent, HelloComponent],
  bootstrap: [AppComponent],
  providers: [DataService]
})
export class AppModule { }
