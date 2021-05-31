import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { C1Component } from './c1/c1.component';
import { C2Component } from './c2/c2.component';

//ngrx store
import {StoreModule} from '@ngrx/store';
import { counterReducer } from './state/counter.reducer';
import { C3Component } from './c3/c3.component';
import { HomeComponent } from './home/home.component';
import { CounterComponent } from './counter/counter.component';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { HeaderComponent } from './shared/header/header.component';
import { PostListComponent } from './posts/post-list/post-list.component';


import { StoreDevtoolsModule } from '@ngrx/store-devtools'; 
@NgModule({
  imports:      [ BrowserModule, FormsModule,
  StoreModule.forRoot({ishanCounter:counterReducer}) ,
    StoreDevtoolsModule.instrument({
    
    }),
  AppRoutingModule ],
  declarations: [ AppComponent, HelloComponent, C1Component, C2Component, C3Component, HomeComponent, CounterComponent, HeaderComponent, PostListComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
