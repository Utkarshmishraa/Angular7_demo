import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';



@Component({
  selector: 'app-evaluation-date-range',
  templateUrl: './evaluation-date-range.component.html',
  styleUrls: ['./evaluation-date-range.component.scss']
})
export class EvaluationDateRangeComponent implements OnInit {
  
  date = new FormControl(new Date());
  constructor() { }

  ngOnInit() {
  }

}
