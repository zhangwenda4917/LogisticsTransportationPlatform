import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {PartModule} from './part/part.module';
import {PersonalCenterModule} from './pages/personal-center/personal-center.module';
import {FuncModule} from './func/func.module';
import {OrderModule} from './pages/owner/order/order.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {YunzhiInterceptor} from './net/yunzhi.interceptor';
import { AccountComponent } from './pages/account/account.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { OrderManageComponent } from './pages/driver/order-manage/order-manage.component';
import {ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    AccountComponent,
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FuncModule,
        PartModule,
        HttpClientModule,
        FontAwesomeModule,
        ReactiveFormsModule
    ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: YunzhiInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
