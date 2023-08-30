import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { CourseService } from 'src/app/services/course/course.service';

@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.scss']
})
export class AddCourseComponent {


  courseForm !:FormGroup;

  file1 :any;
  file2 :any;


 constructor(private router:Router,private service:CourseService) { }

 ngOnInit(): void {

   this.courseForm = new FormGroup({
     name: new FormControl(''),
     description: new FormControl(''),
     image_path : new FormControl(''),
     video_path : new FormControl(''),
     
   });

 }

 
 getFile1(event:any){

   this.file1 = event.target.files[0];

   this.courseForm.get('image_path')?.setValue(this.file1);
     
 }

 getFile2(event:any){

  this.file2 = event.target.files[0];

  this.courseForm.get('video_path')?.setValue(this.file2);
    
}


 addCourse(){


   const formData = new FormData();

   console.log(this.courseForm.get('name')?.value)

   formData.append('name',this.courseForm.get('name')?.value);
   formData.append('description',this.courseForm.get('description')?.value);
   formData.append('image_path',this.courseForm.get('image_path')?.value);
   formData.append('video_path',this.courseForm.get('video_path')?.value);
   
   console.log(this.courseForm.value);

   this.service.createCourse(formData).subscribe(res =>{

     if(res!=null){

       this.router.navigate(['/ELearning/courses']);

     }else {


       console.log("not found");

       console.log(res);
     }

   });

 }

}
