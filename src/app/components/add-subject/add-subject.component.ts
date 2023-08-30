import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'src/app/models/subject';
import { SubjectService } from 'src/app/services/subject/subject.service';


@Component({
  selector: 'app-add-subject',
  templateUrl: './add-subject.component.html',
  styleUrls: ['./add-subject.component.scss']
})
export class AddSubjectComponent implements OnInit{

  
  subject:Subject={}


 constructor(private router:Router,private service:SubjectService) { }

 ngOnInit(): void {

  
 }

 add(){


   this.service.createSubject(this.subject).subscribe(res =>{

     if(res!=null){

       this.router.navigate(['/ELearning/subjects']);

     }else {


       console.log("not found");

       console.log(res);
     }

   });

 }


}
