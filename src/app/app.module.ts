import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { ServiceWorkerModule } from '@angular/service-worker';
import { BsModalService } from 'ngx-bootstrap/modal';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PwaUpdateComponent } from './pwa-update/pwa-update.component';
@NgModule({
  declarations: [
    AppComponent,
    PwaUpdateComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: !isDevMode(),
      // Register the ServiceWorker as soon as the application is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    }),
    TooltipModule.forRoot(),
  ],
  providers: [BsModalService],
  bootstrap: [AppComponent]
})
export class AppModule { }
