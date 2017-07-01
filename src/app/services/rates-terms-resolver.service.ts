import { Injectable } from '@angular/core';
import { Resolve, Router } from '@angular/router';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/of';

import { SmallBusinessLoanService } from "app/services/small-business-loan.service";
import { IRatesTerms } from "app/models/rates-terms";

@Injectable()
export class RatesTermsResolverService implements Resolve<IRatesTerms> {

  constructor(private smallBusinessLoanService: SmallBusinessLoanService) { }

  resolve(): Observable<IRatesTerms> {
    return this.smallBusinessLoanService.getRatesTerms()
      .map(ratesterms =>  {
        return ratesterms;
      })
      .catch(error => {
        console.log(`Retrieval error: ${error}`);
        return Observable.of(null);
      });
  }
}
