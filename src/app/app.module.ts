import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component'

import { SmallBusinessLoansViewComponent } from './views/small-business-loans-view/small-business-loans-view.component';
import { SmallBusinessLoansFormComponent } from './components/small-business-loans-form/small-business-loans-form.component';
import { RouteErrorComponent } from './components/route-error/route-error.component';
import { SmallBusinessLoanService } from 'app/services/small-business-loan.service';
import { RatesTermsResolverService } from './services/rates-terms-resolver.service';
import { HeaderNavComponent } from './components/header-nav/header-nav.component';

@NgModule({
  declarations: [
    AppComponent,
    SmallBusinessLoansViewComponent,
    SmallBusinessLoansFormComponent,
    RouteErrorComponent,
    HeaderNavComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [
    SmallBusinessLoanService,
    RatesTermsResolverService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
