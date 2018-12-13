import { Component, OnInit } from '@angular/core';
import { CourseEvaluationsComponent } from '../course-evaluations/course-evaluations.component';
import { Router } from '@angular/router';

@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  evaluations: any = ["COURSE EVALUATIONS", "SITE EVALUATIONS", "FACULTY EVALUATIONS", "STUDENT EVALUATIONS"];
  course: boolean = true;
  constructor(private router: Router) { }

  ngOnInit() {
    this.router.navigate(['course'])
  }

  loadComponent(event) {
    debugger;
    switch (event.tab.textLabel) {
      case "COURSE EVALUATIONS":
        this.router.navigate(['course'])
        break;
      case "SITE EVALUATIONS":
        this.router.navigate(['site'])
        break;
      case "FACULTY EVALUATIONS":
        this.router.navigate(['faculty'])
        break;
      case "STUDENT EVALUATIONS":
        this.router.navigate(['student'])
        break;
      default:
        break;
    }

  }
}
