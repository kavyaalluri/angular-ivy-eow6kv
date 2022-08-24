import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { OneService } from './one.service';
import { ShoppingComponent } from './shopping/shopping.component';
@NgModule({
  imports: [BrowserModule, FormsModule, HttpClientModule],
  declarations: [AppComponent, HelloComponent, ShoppingComponent],
  providers :[OneService],
  bootstrap: [AppComponent],
})
export class AppModule {}
