import { ModuleWithProviders } from '@angular/core';
// import { HeaderComponent } from './modules/aggregate-header/header/header.component'
import { RouterModule, Routes } from '@angular/router';
import { SiteEvaluationsComponent } from './modules/aggregate-header/site-evaluations/site-evaluations.component';
import { StudentEvaluationsComponent } from './modules/aggregate-header/student-evaluations/student-evaluations.component';
import { FacultyEvaluationsComponent } from './modules/aggregate-header/faculty-evaluations/faculty-evaluations.component';
import { CourseEvaluationsComponent } from './modules/aggregate-header/course-evaluations/course-evaluations.component';

const routes: Routes = [
    // { path: '', redirectTo: 'overview', pathMatch: 'full' },
    {   
        path: '',
        redirectTo: 'home',
        pathMatch: 'prefix'
    }, 
    {
        path: 'course',
        component: CourseEvaluationsComponent
    },
    {
        path: 'site',
        component: SiteEvaluationsComponent
    },
    {
        path: 'student',
        component: StudentEvaluationsComponent
    },
    {
        path: 'faculty',
        component: FacultyEvaluationsComponent
    }
    
]

export const AppRoutingModule: ModuleWithProviders = RouterModule.forRoot(routes);

