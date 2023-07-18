import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-bmi-result',
  templateUrl: './bmi-result.component.html',
  styleUrls: ['./bmi-result.component.css']
})
export class BmiResultComponent {
  @Input() bmi!: number;
  @Input() child!: boolean;
  @Input() parentBmi!: number;
}