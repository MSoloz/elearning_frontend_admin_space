import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Topic } from 'src/app/models/topic';
import { TopicService } from 'src/app/services/topic/topic.service';

@Component({
  selector: 'app-add-topic',
  templateUrl: './add-topic.component.html',
  styleUrls: ['./add-topic.component.scss']
})
export class AddTopicComponent implements OnInit{

  topic:Topic={}


  constructor(private router:Router,private service:TopicService) { }
 
  ngOnInit(): void {
 
   
  }
 
  add(){
 
 
    this.service.createTopic(this.topic).subscribe(res =>{
 
      if(res!=null){
 
        this.router.navigate(['/ELearning/topics']);
 
      }else {
 
 
        console.log("not found");
 
        console.log(res);
      }
 
    });
 
  }

}
