import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Degree } from 'src/app/models/degree';

@Injectable({
  providedIn: 'root'
})
export class DegreeService {

  private apiServerUrl = "http://localhost:8000/api";

  constructor(private http: HttpClient) { }


  getAllDegrees() { 

    return this.http.get<Array<Degree>>(`${this.apiServerUrl}/degree/all/`);
  
  }

 getCourseById(id:any) {  


  return this.http.get(`${this.apiServerUrl}`+'/'+id+'/');


     }

 createDegree(data:any){


  return this.http.post<Degree>(`${this.apiServerUrl}/degree/create/`, data);

  
 }    

 
 updateCourse(id:any,data:any){


  return this.http.put(`${this.apiServerUrl}/university/update/`+id, data);

  
 }    


 deleteCourseById(id:any){


  return this.http.delete(`${this.apiServerUrl}/university/delete/`+id);


}
}
