import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { IntroComponent } from './intro/intro.component';
import { HowitworksComponent } from './howitworks/howitworks.component';
import { CasestudiesComponent } from './casestudies/casestudies.component';
import { NewsComponent } from './news/news.component';
import { ContactComponent } from './contact/contact.component';
import { HeaderComponent } from './header/header.component';



import { FooterComponent } from './footer/footer.component';
import { AppRoutingModule } from './/app-routing.module';
import { MobmenuComponent } from './mobmenu/mobmenu.component';
import { ConfigService } from './config.service';
import { StartupCtoComponent } from './startup-cto/startup-cto.component';
import { NewburyBritianComponent } from './newbury-britian/newbury-britian.component';
import { B2BComponent } from './b2-b/b2-b.component';
import { B2BMarketComponent } from './b2-b-market/b2-b-market.component';
import { B2BRevolutionComponent } from './b2-b-revolution/b2-b-revolution.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { PrivacyComponent } from './privacy/privacy.component';
import { EnterpriseComponent } from './enterprise/enterprise.component';
import { OurstoryComponent } from './ourstory/ourstory.component';
import { NtsComponent } from './nts/nts.component';
import { RiskpalComponent } from './riskpal/riskpal.component';
import { ItsComponent } from './its/its.component';
import { ContactFormEmailService } from './contact/contact-form-email.service';
import { from } from 'rxjs';


@NgModule({
  declarations: [
    AppComponent,
    IntroComponent,
    HowitworksComponent,
    CasestudiesComponent,
    NewsComponent,
    ContactComponent,
    HeaderComponent,
    FooterComponent,
    MobmenuComponent,
    StartupCtoComponent,
    NewburyBritianComponent,
    B2BComponent,
    B2BMarketComponent,
    B2BRevolutionComponent,
    SignupComponent,
    LoginComponent,
    PrivacyComponent,
    EnterpriseComponent,
    OurstoryComponent,
    NtsComponent,
    RiskpalComponent,
    ItsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [ConfigService, ContactFormEmailService],
  bootstrap: [AppComponent]
})
export class AppModule { }
