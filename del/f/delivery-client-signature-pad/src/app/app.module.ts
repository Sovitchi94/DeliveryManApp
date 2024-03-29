import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AboutPage } from '../pages/about/about';
import { ProfilePage } from '../pages/profile/profile';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { IonicStorageModule } from '@ionic/storage';
import { IndexeddbserviceProvider } from '../providers/indexeddbservice/indexeddbservice';
import { OnlineOfflineServiceProvider } from '../providers/online-offline-service/online-offline-service';
import { TextMaskModule } from "angular2-text-mask";
import { DeliveryManProvider } from '../providers/delivery-man/delivery-man';
import { AuthenticationService } from '../providers/authentication.service';
import { LoginPage } from '../pages/login/login';
import { SignaturePage } from '../pages/signature/signature';
import {DeliveriesPage} from '../pages/deliveries/deliveries';


import { SignaturePadModule } from 'angular2-signaturepad';
import { DeliveriesServiceProvider } from '../providers/deliveries-service/deliveries-service';
import { DeliveryDetailsPage } from 'pages/delivery-details/delivery-details';
@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ProfilePage,
    HomePage,
    TabsPage,
    LoginPage,
    SignaturePage,
    DeliveriesPage,
    DeliveryDetailsPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp),
    TextMaskModule,
    SignaturePadModule,
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ProfilePage,
    HomePage,
    TabsPage,
    LoginPage,
    SignaturePage,
    DeliveriesPage,
    DeliveryDetailsPage
  ],
  providers: [
    {provide: ErrorHandler, 
      useClass: IonicErrorHandler},
    IndexeddbserviceProvider,
    OnlineOfflineServiceProvider,
    DeliveryManProvider,
    AuthenticationService,
    DeliveriesServiceProvider
  ]
})
export class AppModule {}
