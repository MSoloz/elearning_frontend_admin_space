import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Topic } from 'src/app/models/topic';
import { TopicService } from 'src/app/services/topic/topic.service';

@Component({
  selector: 'app-edit-topic',
  templateUrl: './edit-topic.component.html',
  styleUrls: ['./edit-topic.component.scss']
})
export class EditTopicComponent {

  topic:Topic={}

  id:any;


  constructor(private route:ActivatedRoute,private router:Router,private service:TopicService) { }
 
  ngOnInit(): void {
 
    this.route.paramMap.subscribe(params => {  this.id = params.get('id'); });
   
  }
 
  add(){
 
 
    this.service.updateTopic(this.id,this.topic).subscribe(res =>{
 
      if(res!=null){
 
        this.router.navigate(['/ELearning/topics']);
 
      }else {
 
 
        console.log("not found");
 
        console.log(res);
      }
 
    });
 
  }

}
