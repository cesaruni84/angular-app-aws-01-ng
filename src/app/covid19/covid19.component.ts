import { Component, OnInit, ViewChild } from '@angular/core';
import { JavatechieCovid19Service } from '../javatechie-covid19.service';
import { CountryReports } from 'src/countryReports';
import { EmployeesReports } from 'src/countryReports';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';


@Component({
  selector: 'app-covid19',
  templateUrl: './covid19.component.html',
  styleUrls: ['./covid19.component.css']
})
export class Covid19Component implements OnInit {
  

  ELEMENT_DATA : CountryReports[];
  ELEMENT_DATA2 : EmployeesReports[];
  displayedColumns: string[] = ['country','cases','todayCases','deaths','todayDeaths','recovered','active','critical','casesPerOneMillion','deathsPerOneMillion','tests','testsPerOneMillion'];
  dataSource = new MatTableDataSource<CountryReports>(this.ELEMENT_DATA);
  dataSource2 = new MatTableDataSource<EmployeesReports>(this.ELEMENT_DATA2);


  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;
  constructor(private service:JavatechieCovid19Service) { }

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort=this.sort;
    this.getAllReports();
    this.getAllEmployees();
  }

  public getAllReports(){
    let resp = this.service.covid19Reports();
    resp.subscribe(report=>this.dataSource.data=report  as CountryReports[])
  }

  // Se añade nuevo método para listar
  public getAllEmployees(){
    let resp = this.service.employeesReports();
    resp.subscribe(report=>{
        this.dataSource2.data=report as EmployeesReports[]; 
        console.log(report)
      })
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
