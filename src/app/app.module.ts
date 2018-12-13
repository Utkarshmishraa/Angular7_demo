import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './modules/aggregate-header/header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule, MatCheckboxModule} from '@angular/material';
import { AppMaterialModule } from './app.material.module';
import {MatTabsModule} from '@angular/material/tabs';
import { CourseEvaluationsComponent } from './modules/aggregate-header/course-evaluations/course-evaluations.component';
import { FacultyEvaluationsComponent } from './modules/aggregate-header/faculty-evaluations/faculty-evaluations.component';
import { SiteEvaluationsComponent } from './modules/aggregate-header/site-evaluations/site-evaluations.component';
import { StudentEvaluationsComponent } from './modules/aggregate-header/student-evaluations/student-evaluations.component';
import { FlexLayoutModule, FlexModule } from '@angular/flex-layout';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatFormFieldModule, MatInputModule } from '@angular/material';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import { SharedModule } from './shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CourseEvaluationsComponent,
    FacultyEvaluationsComponent,
    SiteEvaluationsComponent,
    StudentEvaluationsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    FlexLayoutModule,
    FlexModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatIconModule,
    MatButtonToggleModule,
    MatFormFieldModule,
    AppMaterialModule,
    
    MatDatepickerModule,
    MatTabsModule,
    MatButtonModule,
    MatCheckboxModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
