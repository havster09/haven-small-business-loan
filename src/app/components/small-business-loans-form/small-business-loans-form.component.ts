import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { IMonthOption } from "app/models/month-option";

@Component({
  selector: 'app-small-business-loans-form',
  templateUrl: './small-business-loans-form.component.html',
  styleUrls: ['./small-business-loans-form.component.scss']
})
export class SmallBusinessLoansFormComponent implements OnInit {
  smallBusinessLoansForm: FormGroup;
  monthOptions: IMonthOption[];

  private validationMessages = {
    required: 'required',
    pattern: 'Please enter a valid email address.'
  };

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.monthOptions = [
      {amount:3},
      {amount:4},
      {amount:5},
      {amount:6},
      {amount:7},
      {amount:8},
      {amount:9},
      {amount:10},
      {amount:11},
      {amount:12}
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
  }

  onMonthSelect(amount) {
    this.smallBusinessLoansForm.value.months = amount;
  }

  smallBusinessLoansFormSubmit(): void {
    console.log('smallBusinessLoansFormSubmit: ' + JSON.stringify(this.smallBusinessLoansForm.value));
  }
}
