import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EvaluationDateRangeComponent } from './components/aggregate-reports/evaluation-date-range/evaluation-date-range.component';
import { AppMaterialModule } from '../app.material.module';
import { MatDatepickerModule,MatInputModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import { FiltersComponent } from './components/aggregate-reports/filters/filters.component';

@NgModule({
  declarations: [EvaluationDateRangeComponent, FiltersComponent],
  imports: [
    CommonModule,
    AppMaterialModule, MatDatepickerModule,
    MatInputModule,
    FormsModule,
    MatButtonToggleModule,
    ReactiveFormsModule,
    FlexLayoutModule
  ], 
  exports: [EvaluationDateRangeComponent,FiltersComponent]
})
export class SharedModule { }
