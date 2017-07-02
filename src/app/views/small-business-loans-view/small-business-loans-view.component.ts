import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IRatesTerms } from 'app/models/rates-terms';

@Component({
  selector: 'app-small-business-loans-view',
  templateUrl: './small-business-loans-view.component.html',
  styleUrls: ['./small-business-loans-view.component.scss']
})
export class SmallBusinessLoansViewComponent implements OnInit {
  ratesTerms: IRatesTerms;
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.ratesTerms = this.route.snapshot.data['ratesterms'];
  }

}
