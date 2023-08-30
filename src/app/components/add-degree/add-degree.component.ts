import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Degree } from 'src/app/models/degree';
import { DegreeService } from 'src/app/services/degree/degree.service';

@Component({
  selector: 'app-add-degree',
  templateUrl: './add-degree.component.html',
  styleUrls: ['./add-degree.component.scss']
})
export class AddDegreeComponent implements OnInit{

  
  degree:Degree={}


 constructor(private router:Router,private service:DegreeService) { }

 ngOnInit(): void {

  
 }

 add(){


   this.service.createDegree(this.degree).subscribe(res =>{

     if(res!=null){

       this.router.navigate(['/ELearning/degrees']);

     }else {


       console.log("not found");

       console.log(res);
     }

   });

 }


}
