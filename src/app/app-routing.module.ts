import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SmallBusinessLoansViewComponent } from './views/small-business-loans-view/small-business-loans-view.component';
import { RouteErrorComponent } from './components/route-error/route-error.component';
import { RatesTermsResolverService } from "app/services/rates-terms-resolver.service";

const routes: Routes = [
  {
    path: 'small-business-loans',
    component: SmallBusinessLoansViewComponent,
    // resolve: {ratesterms: RatesTermsResolverService}
  },
  { path: '', redirectTo: '/small-business-loans', pathMatch: 'full'},
  { path: '**', component: RouteErrorComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
