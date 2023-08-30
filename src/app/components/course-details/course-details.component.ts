import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Course } from 'src/app/models/course';
import { CourseService } from 'src/app/services/course/course.service';

@Component({
  selector: 'app-course-details',
  templateUrl: './course-details.component.html',
  styleUrls: ['./course-details.component.scss']
})
export class CourseDetailsComponent implements OnInit{

  courseId:any;

  course: any ; 

  videoUrl="http://localhost:8000/media/videos/Snapinsta.app_video_53921017_154718780619968_8753101696699856532_n_deuS9WD.mp4"

  constructor(private router:Router,private route:ActivatedRoute,private service:CourseService) { }

  ngOnInit(): void { 

    this.route.paramMap.subscribe(params => {  this.courseId = params.get('id'); });
 
  
      this.service.getCourseById(this.courseId)
      .subscribe({
        next: (result) => {
          this.course= result;
          
        }
      });
    

  }

}
