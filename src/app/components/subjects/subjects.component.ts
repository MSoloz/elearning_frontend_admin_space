import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'src/app/models/subject';
import { SubjectService } from 'src/app/services/subject/subject.service';


@Component({
  selector: 'app-subjects',
  templateUrl: './subjects.component.html',
  styleUrls: ['./subjects.component.scss']
})
export class SubjectsComponent {

  
  subjects:Array<Subject> =[];

  page:number = 1;

  constructor(private router:Router,private service:SubjectService){}

  ngOnInit(): void {

    this.service.getAllSubjects()
    .subscribe({
      next: (result) => {
        this.subjects= result;
      }
    });

  }

  
  navigate() {
    
    this.router.navigate(['ELearning/subject/add']);
  }

  
  removeSubject(id:any){

    this.service.deleteSubjectById(id).subscribe(res=>this.ngOnInit());


  }

}
