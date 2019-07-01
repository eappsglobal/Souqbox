import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { HowitworksComponent } from './howitworks/howitworks.component';
import { CasestudiesComponent } from './casestudies/casestudies.component';
import { NewsComponent } from './news/news.component';
import { ContactComponent } from './contact/contact.component';
import { IntroComponent } from './intro/intro.component';
import { StartupCtoComponent } from './startup-cto/startup-cto.component';
import { B2BComponent } from './b2-b/b2-b.component';
import { B2BMarketComponent } from './b2-b-market/b2-b-market.component';
import { B2BRevolutionComponent } from './b2-b-revolution/b2-b-revolution.component';
import { NewburyBritianComponent } from './newbury-britian/newbury-britian.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { EnterpriseComponent } from './enterprise/enterprise.component';
import { PrivacyComponent } from './privacy/privacy.component';
import { OurstoryComponent } from './ourstory/ourstory.component';
import { NtsComponent } from './nts/nts.component';
import { RiskpalComponent } from './riskpal/riskpal.component';
import { ItsComponent } from './its/its.component';

const routes: Routes = [
  { path: '', redirectTo: '/About', pathMatch: 'full' },
  { path: 'About', component: IntroComponent },
  { path: 'Howitworks', component: HowitworksComponent },
  { path: 'Casestudies', component: CasestudiesComponent },
  { path: 'News', component: NewsComponent },
  { path: 'Contact', component: ContactComponent },
  { path: 'Startupcto-opportunity-at-souqbox', component: StartupCtoComponent },
  { path: 'Why-the-b2b', component: B2BComponent },
  { path: 'B2b-marketplace-opportunities', component: B2BMarketComponent },
  { path: 'How-you-can-join-the-b2b-revolution', component: B2BRevolutionComponent },
  { path: 'Newbury-top-tech-town-uk', component: NewburyBritianComponent },
  { path: 'Signup', component: SignupComponent },
  { path: 'Login', component: LoginComponent },
  { path: 'Enterprise', component: EnterpriseComponent },
  { path: 'Privacy-policy', component: PrivacyComponent },
  { path: 'Our-story', component: OurstoryComponent },
  { path: 'N2s', component: NtsComponent },
  { path: 'Riskpal', component: RiskpalComponent },
  { path: 'Its', component: ItsComponent }


];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes,{
      scrollPositionRestoration: 'enabled'
    })],
  declarations: [],
  exports: [RouterModule]
})
export class AppRoutingModule { }
