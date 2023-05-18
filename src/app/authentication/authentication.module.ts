import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { LogoModule } from '../components/logo/logo.module';
import { AuthenticationRoutingModule } from './authentication-routing.module';
import { AuthenticationComponent } from './authentication.component';


@NgModule({
  declarations: [
    AuthenticationComponent
  ],
  imports: [
    CommonModule,
    AuthenticationRoutingModule,
    LogoModule
  ]
})
export class AuthenticationModule { }
