import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { RegisterComponent } from './register/register.component';
import { ActionsRoutingModule } from './actions.routing';
import { EmailComponent } from './email/email.component';

@NgModule({
    imports: [BrowserModule, FormsModule, ActionsRoutingModule, ReactiveFormsModule],
    declarations: [LoginComponent, RegisterComponent, ProfileComponent, EmailComponent ],
    exports: [LoginComponent, RegisterComponent, ProfileComponent ]
})

export class ActionsModule { }

