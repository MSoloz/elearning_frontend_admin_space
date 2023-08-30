import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subject } from 'src/app/models/subject';
import { SubjectService } from 'src/app/services/subject/subject.service';


@Component({
  selector: 'app-edit-subject',
  templateUrl: './edit-subject.component.html',
  styleUrls: ['./edit-subject.component.scss']
})
export class EditSubjectComponent implements OnInit{


  id:any;
  
  subject:Subject={}


 constructor(private route:ActivatedRoute,private router:Router,private service:SubjectService) { }

 ngOnInit(): void {

  this.route.paramMap.subscribe(params => {  this.id = params.get('id'); });

  
 }

 add(){


   this.service.updateSubject(this.id,this.subject).subscribe(res =>{

     if(res!=null){

       this.router.navigate(['/ELearning/subjects']);

     }else {


       console.log("not found");

       console.log(res);
     }

   });

 }


}
