import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BindingExampleComponent } from './binding-example/binding-example.component';

@NgModule({
  declarations: [	
    AppComponent,
      BindingExampleComponent
   ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
