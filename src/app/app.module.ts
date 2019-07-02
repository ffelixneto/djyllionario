import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';

import { NgZorroAntdModule, NZ_I18N, en_US } from 'ng-zorro-antd';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzPageHeaderModule } from 'ng-zorro-antd/page-header';
import { NzLayoutModule } from 'ng-zorro-antd/layout';

import { environment } from '@env/environment';
import { AppComponent } from './app.component';

registerLocaleData(en);

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,

    // firebase
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,

    // zorro
    NgZorroAntdModule,
    NzButtonModule,
    NzInputModule,
    NzLayoutModule,
    NzPageHeaderModule
  ],
  providers: [{ provide: NZ_I18N, useValue: en_US }],
  bootstrap: [AppComponent]
})
export class AppModule {}
