import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/map';
import { IRatesTerms } from 'app/models/rates-terms';
import { ISmallBusinessLoan } from 'app/models/small-business-loan';

@Injectable()
export class SmallBusinessLoanService {
    private baseUrl = 'http://www.mocky.io/v2/5955dc852900001e01cd70b7';

    constructor(private http: Http) { }

    getRatesTerms(): Observable<IRatesTerms[]> {
        return this.http.get(this.baseUrl)
            .map(this.extractData)
            .do(data => console.log('getRatesTerms: ' + JSON.stringify(data)))
            .catch(this.handleError);
    }

    saveProduct(product: IRatesTerms): Observable<IRatesTerms> {
        const headers = new Headers({ 'Content-Type': 'application/json' });
        const options = new RequestOptions({ headers: headers });
         return this.createProduct(product, options);
    }

    private createProduct(product: IRatesTerms, options: RequestOptions): Observable<IRatesTerms> {
        return this.http.post(this.baseUrl, product, options)
            .map(this.extractData)
            .do(data => console.log('createProduct: ' + JSON.stringify(data)))
            .catch(this.handleError);
    }

    private extractData(response: Response) {
        return response.json();
    }

    private handleError(error: Response): Observable<any> {
        // in a real app, would at least notify user of error via toastr
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }
}
