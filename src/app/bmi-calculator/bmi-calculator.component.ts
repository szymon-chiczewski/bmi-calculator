import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-bmi-calculator',
  templateUrl: './bmi-calculator.component.html',
  styleUrls: ['./bmi-calculator.component.css']
})
export class BmiCalculatorComponent implements OnInit {
  bmiForm!: FormGroup;
  parentBmi!: number;
  childBmi!: number;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.bmiForm = this.fb.group({
      parentHeight: ['', Validators.required],
      parentWeight: ['', Validators.required],
      childHeight: ['', Validators.required],
      childWeight: ['', Validators.required]
    });
  }

  calculateBMI(): void {
    const parentHeight = this.bmiForm.get('parentHeight')?.value;
    const parentWeight = this.bmiForm.get('parentWeight')?.value;
    this.parentBmi = parentWeight / ((parentHeight / 100) ** 2);
    if ((parentHeight === '' && parentWeight !== '') || (parentHeight !== '' && parentWeight === '')) {
      alert('Please fill in both parent\'s height and weight fields.');
      return;
    }

    const childHeight = this.bmiForm.get('childHeight')?.value;
    const childWeight = this.bmiForm.get('childWeight')?.value;
    this.childBmi = childWeight / ((childHeight / 100) ** 2);
    if ((childHeight === '' && childWeight !== '') || (childHeight !== '' && childWeight === '')) {
      alert('Please fill in both child\'s height and weight fields.');
      return;
    }
  }


}

