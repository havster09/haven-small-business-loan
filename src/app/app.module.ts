import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component'

import { SmallBusinessLoansViewComponent } from './views/small-business-loans-view/small-business-loans-view.component';
import { SmallBusinessLoansFormComponent } from './components/small-business-loans-form/small-business-loans-form.component';
import { RouteErrorComponent } from './components/route-error/route-error.component';
import { SmallBusinessLoanService } from "app/services/small-business-loan.service";
import { RatesTermsResolverService } from './services/rates-terms-resolver.service';


@NgModule({
  declarations: [
    AppComponent,
    SmallBusinessLoansViewComponent,
    SmallBusinessLoansFormComponent,
    RouteErrorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    SmallBusinessLoanService,
    RatesTermsResolverService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
