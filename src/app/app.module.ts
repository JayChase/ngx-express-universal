import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { MdSidenavModule, MdButtonModule, MdToolbarModule, MdIconModule, MdListModule } from '@angular/material';

import { Comp1Component } from './comp1/comp1.component';
import { Comp2Component } from './comp2/comp2.component';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    Comp1Component,
    Comp2Component
  ],
  imports: [
    BrowserModule.withServerTransition({
      appId: 'cli-uni'
    }),
    BrowserAnimationsModule,
    MdSidenavModule,
    MdButtonModule,
    MdToolbarModule,
    MdIconModule,
    MdListModule,
    RouterModule.forRoot([
      {
        path: 'comp1',
        component: Comp1Component
      },
      {
        path: 'comp2',
        component: Comp2Component
      },
      {
        path: '',
        redirectTo: 'comp1',
        pathMatch: 'full'
      },
      {
        path: '**',
        component: Comp1Component
      }
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
