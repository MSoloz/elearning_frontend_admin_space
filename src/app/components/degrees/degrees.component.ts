import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Degree } from 'src/app/models/degree';
import { DegreeService } from 'src/app/services/degree/degree.service';

@Component({
  selector: 'app-degrees',
  templateUrl: './degrees.component.html',
  styleUrls: ['./degrees.component.scss']
})
export class DegreesComponent implements OnInit{

  page:number = 1;

  degrees:Array<Degree> =[];

  constructor(private router:Router,private service:  DegreeService){}

  ngOnInit(): void {

    this.service.getAllDegrees()
    .subscribe({
      next: (result) => {
        this.degrees= result;
      }
    });
   
  }

  navigate() {
    
    this.router.navigate(['ELearning/degree/add']);
  }


}
