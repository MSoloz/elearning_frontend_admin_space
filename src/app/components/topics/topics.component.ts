import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TopicService } from 'src/app/services/topic/topic.service';

@Component({
  selector: 'app-topics',
  templateUrl: './topics.component.html',
  styleUrls: ['./topics.component.scss']
})
export class TopicsComponent implements OnInit{

  topics: any[] = [];
  
  page:number = 1;

  constructor(private router:Router,private service:TopicService){}

  ngOnInit(): void {

    this.service.getAllTopics().subscribe((data: any) => {
      this.topics = data;
      console.log(data)
    });

  }


  navigate(){

    this.router.navigate(['ELearning/topic/add']);

  }

}
