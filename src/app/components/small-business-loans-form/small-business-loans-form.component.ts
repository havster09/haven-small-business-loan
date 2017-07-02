import {Component, OnInit, OnChanges, Input, SimpleChanges} from '@angular/core';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';
import {IMonthOption} from 'app/models/month-option';
import {IRangeOption} from 'app/models/range-option';
import {IRatesTerms} from '../../models/rates-terms';

@Component({
  selector: 'app-small-business-loans-form',
  templateUrl: './small-business-loans-form.component.html',
  styleUrls: ['./small-business-loans-form.component.scss']
})
export class SmallBusinessLoansFormComponent implements OnInit, OnChanges {
  @Input() rateTerms: IRatesTerms[];
  repaymentCount: number;
  repaymentAmount: number;
  smallBusinessLoansForm: FormGroup;
  monthOptions: IMonthOption[];
  rangeOptions: IRangeOption[];
  amountMin = 5000;
  amountStep = 5000;
  amountMax = 250000;

  amountView: number = this.amountMin;

  private validationMessages = {
    required: 'required',
    pattern: 'Please enter a valid email address.'
  };
  private

  constructor(private fb: FormBuilder) {
  }

  ngOnInit(): void {
    this.monthOptions = [
      {amount: 3},
      {amount: 4},
      {amount: 5},
      {amount: 6},
      {amount: 7},
      {amount: 8},
      {amount: 9},
      {amount: 10},
      {amount: 11},
      {amount: 12}
    ];

    this.rangeOptions = [
      {amount: 5000},
      {amount: 50000},
      {amount: 100000},
      {amount: 150000},
      {amount: 250000}
    ];

    this.smallBusinessLoansForm = this.fb.group({
      amount: [5000, [
        Validators.required,
        Validators.min(5000),
        Validators.max(250000),
      ]
      ],
      months: [3, [Validators.required]],
      fullName: ['', [Validators.required]],
      email: ['', [
          Validators.required,
          Validators.pattern('^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$')
        ]
      ]
    });

    this.calculateRepayments();
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['rateTerms']) {
      this.rateTerms = changes['rateTerms'].currentValue
    }
  }

  onMonthSelect(months) {
    this.smallBusinessLoansForm.patchValue({
      months
    });
    this.calculateRepayments();
  }

  calculateRepayments() {
    const selectedRateTerm = this.rateTerms.find(rateTerm => rateTerm.duration === this.smallBusinessLoansForm.value.months);
    this.repaymentCount = selectedRateTerm.duration * 30;
    this.repaymentAmount = Math.ceil(this.smallBusinessLoansForm.value.amount
      * (1 + selectedRateTerm.rate / 100) / (selectedRateTerm.duration * 30));
  }

  smallBusinessLoansFormSubmit(): void {
    console.log('smallBusinessLoansFormSubmit: ' + JSON.stringify(this.smallBusinessLoansForm.value));
  }
}
