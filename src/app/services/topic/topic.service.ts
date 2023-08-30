import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Topic } from 'src/app/models/topic';

@Injectable({
  providedIn: 'root'
})
export class TopicService {

  private apiServerUrl = "http://localhost:8000/api";

  constructor(private http: HttpClient) { }


  getAllTopics() { 

    return this.http.get(`${this.apiServerUrl}/topic/all/`);
  
  }

 getTopicById(id:any) {  


  return this.http.get(`${this.apiServerUrl}`+'/'+id+'/');


     }

 createTopic(data:any){


  return this.http.post<Topic>(`${this.apiServerUrl}/topic/create/`, data);

  
 }    

 
 updateTopic(id:number,data:any){


  return this.http.put(`${this.apiServerUrl}/topic/`+id+'/update/', data);

  
 }    


 deleteTopicById(id:any){

  return this.http.delete(`${this.apiServerUrl}/topic/`+id+`/delete/`);

}


}
