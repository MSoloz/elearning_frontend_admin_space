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
     file1 : new FormControl(''),
     file2 : new FormControl(''),
     
   });

 }

 
 getFile1(event:any){

   this.file1 = event.target.files[0];

   this.courseForm.get('file1')?.setValue(this.file1);
     
 }

 getFile2(event:any){

  this.file2 = event.target.files[0];

  this.courseForm.get('file2')?.setValue(this.file2);
    
}


 addCourse(){


   const formData = new FormData();

   console.log(this.courseForm.get('name')?.value)

   formData.append('name',this.courseForm.get('name')?.value);
   formData.append('country',this.courseForm.get('country')?.value);
   formData.append('file',this.courseForm.get('file')?.value);
   formData.append('file',this.courseForm.get('file')?.value);
   
   console.log(this.courseForm.value);

   this.service.createCourse(formData).subscribe(res =>{

     if(res!=null){

       this.router.navigate(['/MoveOnEsprit/universities']);

     }else {


       console.log("not found");

       console.log(res);
     }

   });

 }

}
