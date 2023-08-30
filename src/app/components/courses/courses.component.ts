import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CourseService } from 'src/app/services/course/course.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit{

  courses: any[] = [];
  
  page:number = 1;


  ngOnInit(): void {
    this.loadCourses();
  }

  constructor(private router:Router,private service:CourseService){}

  loadCourses() {
    this.service.getAllCourses().subscribe((data: any) => {
      this.courses = data;
      console.log(data)
    });
  }

  navigate() {
    
    this.router.navigate(['ELearning/course/add']);
  }

}
