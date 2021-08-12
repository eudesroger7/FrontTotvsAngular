import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {NzIconModule} from 'ng-zorro-antd/icon';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { en_US } from 'ng-zorro-antd/i18n';
import {CommonModule, registerLocaleData} from '@angular/common';
import en from '@angular/common/locales/en';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';

// pages
import { MainComponent } from './pages/main/main.component';

// components
import { EmptyStateComponent } from './components/empty-state/empty-state.component';
import { CardListComponent } from './components/card-list/card-list.component';
import { InputSearchComponent } from './components/input-search/input-search.component';
import { ConfirmDialogComponent } from './components/confirm-dialog/confirm-dialog.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

registerLocaleData(en);

const pages = [
  MainComponent
];

const components = [
  CardListComponent,
  InputSearchComponent,
  EmptyStateComponent,
  ConfirmDialogComponent
];

const materialModules = [
  MatDialogModule
];

@NgModule({
  declarations: [
    AppComponent,
    ...pages,
    ...components,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NzIconModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    CommonModule,
    ...materialModules,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
      // Register the ServiceWorker as soon as the app is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    })
  ],
  providers: [{ provide: NZ_I18N, useValue: en_US }],
  bootstrap: [AppComponent]
})
export class AppModule { }
