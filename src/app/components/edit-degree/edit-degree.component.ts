import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Degree } from 'src/app/models/degree';
import { DegreeService } from 'src/app/services/degree/degree.service';

@Component({
  selector: 'app-edit-degree',
  templateUrl: './edit-degree.component.html',
  styleUrls: ['./edit-degree.component.scss']
})
export class EditDegreeComponent implements OnInit{

  
  degree:Degree={}

  id:any;

 constructor(private route:ActivatedRoute,private router:Router,private service:DegreeService) { }

 ngOnInit(): void {

  this.route.paramMap.subscribe(params => {  this.id = params.get('id'); });
  
 }

 add(){


   this.service.updateDegree(this.id,this.degree).subscribe(res =>{

     if(res!=null){

       this.router.navigate(['/ELearning/degrees']);

     }else {


       console.log("not found");

       console.log(res);
     }

   });

 }

 

}
