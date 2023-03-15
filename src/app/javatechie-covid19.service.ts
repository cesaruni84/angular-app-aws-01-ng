import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class JavatechieCovid19Service {

  constructor(private http:HttpClient) { }


  public covid19Reports(){
  return  this.http.get("https://corona.lmao.ninja/v2/countries");
  }

  public employeesReports(){
    return  this.http.get("https://employermanagementapi-env.eba-cyar3k3a.us-east-1.elasticbeanstalk.com:5000/api/employers");
    }
}
