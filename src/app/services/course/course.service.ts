import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Course } from 'src/app/models/course';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  private apiServerUrl = "http://localhost:8000/api";

  constructor(private http: HttpClient) { }


  getAllCourses() { 

    return this.http.get(`${this.apiServerUrl}/course/all/`);
  
  }

 getCourseById(id:any){  


  return this.http.get<Course>(`${this.apiServerUrl}`+'/course/'+id+'/');


     }

 createCourse(data:any){


  return this.http.post(`${this.apiServerUrl}/course/create/`, data);

  
 }    

 
 updateCourse(id:any,data:any){


  return this.http.put(`${this.apiServerUrl}/university/update/`+id, data);

  
 }    


 deleteCourseById(id:any){


  return this.http.delete(`${this.apiServerUrl}/university/delete/`+id);


}


}